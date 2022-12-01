import React from "react";
import styles from "./Blog.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { db } from "../../FirebaseConfig"
import { ref, remove } from "firebase/database"
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Blog = (props) => {


  const deleteHandler = (id) => {
    remove(ref(db, `${id}`));
  };

  const day = props.dateTasted;
  return (

    <div className={styles.background}>
    <Container fluid>  
      <li key={props.id} className={styles}>
        <Row>
          <Col className={styles.dateTasted}><h4>Date Tasted Coffee:</h4></Col>
          <h4>{day}</h4>
          <Col><h1>{props.titleBean}</h1></Col>
        </Row>
        <hr className={styles.line}/>

        <Row className={styles.experience}>
          <Col> <h4 className={styles.textLighter}> Your Coffee's Body Experience:</h4></Col>
          <h4 >{props.body}</h4>
        </Row>
          <hr className={styles.line}/>

        <Row>
          <Col> <h4 className={styles.textLighter}>Your Coffee's Aroma Experience:</h4></Col>
          <h4> {props.aroma}</h4>
        </Row>
          <hr className={styles.line}/>

        <Row>
          <Col> <h4 className={styles.textLighter}>Your Coffee's Acidity Experience:</h4></Col>
          <h4 >{props.acidity}</h4>
         </Row>
          <hr className={styles.line}/>

         <Row>
          <Col> <h4 className={styles.textLighter}>Your Coffee's Flavor Experience:</h4></Col>
          <h4>{props.flavor}</h4>
        </Row>
          <hr className={styles.line}/>

        <Row>
          <Col> <h4 className={styles.textLighter}>Your Coffee's Brewing Method:</h4></Col>
          <h4>{props.brewMethod}</h4>
        </Row>
          <hr className={styles.line}/>

        <Row>
          <Col> <h4 className={styles.textLighter}>Your Coffee Experience:</h4></Col>
          <h4>{props.experience}</h4>
        </Row>
          <hr className={styles.line}/>
       
        <Row>
          <Col><Button className={styles.float} variant="danger" onClick={() => deleteHandler(props.id)}>Delete Post</Button></Col>
Ï        </Row>
      </li>
    </Container>
    </div>

///////////////////////////////////////


// {/* <Card className={styles.Card}>
// <Card.Body>
//   <Card.Title><h1>{props.titleBean}</h1></Card.Title>
//   <Card.Subtitle className="mb-2 text-muted">{day}</Card.Subtitle>
//   <Card.Text><h2>
//   {props.experience}
//   </h2>
//   </Card.Text>
//   <Card.Text><h4> Your Coffee's Body Experience: {props.body} </h4></Card.Text>
//   <hr className={styles.line}/>
//   <Card.Text><h4> Your Coffee's Aroma Experience:{props.aroma}</h4></Card.Text>
//   <hr className={styles.line}/>
//   <Card.Text><h4> Your Coffee's Acidity Experience:{props.acidity} </h4></Card.Text>
//   <hr className={styles.line}/>
//   <Card.Text><h4> Your Coffee's Flavor Experience:{props.flavor}</h4></Card.Text>
//   <hr className={styles.line}/>
//   <Card.Text><h4> Your Coffee's Brewing Method:{props.brewMethod}</h4></Card.Text>
//   <hr className={styles.line}/>  
//   <Card.Text><h4> Your Coffee Experience:{props.experience}</h4></Card.Text>
//   <hr className={styles.line}/>  

// <Button variant="danger" onClick={() => deleteHandler(props.id)}>Delete Post</Button>
// </Card.Body>
// </Card> */}

  );
};

export default Blog;