import React, { useState } from "react";
import BlogList from "./components/Blogs/BlogList";
import NewInput from "./components/Blogs/UserInput/NewInput";
import { db } from "./FirebaseConfig";
import { ref, onValue} from "firebase/database"



function App() {
  
  const [blogging, setBlogging] = useState([]);
  

  //read
  const fetchBlogsHandler = () =>{
    onValue(ref(db), snapshot => {
      setBlogging([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((blogging) => (
          setBlogging((prevArray) => [...prevArray, blogging])
        ));
      }
    });
  };


  
  let content = <center>
    <p> Fetch Blogs to Find Stored Data.</p>
  </center>;
  

  if (blogging.length > 0) {
    content = <BlogList blogs={blogging} />;

  }


  return (
    <React.Fragment>

      <section>
      <NewInput />
      </section>

      <section>
        <button onClick={fetchBlogsHandler}> Fetch Blogs</button>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
