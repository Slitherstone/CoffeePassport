import React, { useState } from "react";
import styles from "./UserInput.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { uid } from "uid";
import { set, ref} from "firebase/database"
import { db } from "../../../FirebaseConfig";



const UserInput = (props) => {
    const [titleBean, setTitleBean] = useState('');
    const [aroma, setAroma] = useState('');
    const [acidity, setAcidity] = useState('');
    const [experience, setExperience] = useState('');
    const [flavor, setFlavor] = useState('');
    const [dateTasted, setDateTasted] = useState(Date());
    const [brewMethod, setBrewMethod] = useState('');
    const [body, setBody] = useState('');
    
    const submitHandler = (event) => {
        const uuid = uid();
        event.preventDefault();

            set(ref(db, `/${uuid}`), 
            
            {
                titleBean, //todo: todo
                key: uuid,
                id: uuid, //uuid: uuid
                aroma,
                acidity,
                experience,
                flavor,
                dateTasted,
                brewMethod,
                body
            });
        setTitleBean('');
        setAroma('');
        setBody('');
        setAcidity('');
        setExperience('');
        setFlavor('');
        setDateTasted('');
        setBrewMethod('');
      };

    return (
        <div className={styles.background}>

        <Container fluid>
            <form className={styles.form} onSubmit={submitHandler}>

                <Row>
                    <Col>
                        {/* dateTested */}
                        <label className={styles.textCentered}>Day Of Coffee Tasting: </label>
                        <input type="date" value={dateTasted} onChange={(e) => setDateTasted(e.target.value)}></input>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* title */}
                        <label className={styles.textCentered}>Coffee Name: </label>
                        <input type="text" value={titleBean} onChange={(e) => setTitleBean(e.target.value)}></input>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        {/* aroma */}
                        <label className={styles.textCentered}>Coffee aroma: </label>
                        <input type="text" value={aroma} onChange={(e) => setAroma(e.target.value)}></input>
                    </Col>
                    <Col>
                        {/* acidity */}
                        <label className={styles.textCentered}>Coffee acidity: </label>
                        <input type="text" value={acidity} onChange={(e) => setAcidity(e.target.value)}></input>
                    </Col>

                </Row>
                <Row>

                    <Col>
                        {/* Body */}
                        <label className={styles.textCentered}>Coffee body: </label>
                        <input type="text" value={body} onChange={(e) => setBody(e.target.value)}></input>
                    </Col>
                    <Col>
                        {/* flavor */}
                        <label className={styles.textCentered}>Coffee flavor: </label>
                        <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)}></input>
                    </Col>

                </Row>

                <Row>

                    <Col>
                        {/* Brew Method */}
                        <label className={styles.textCentered}>Brewing Method: </label>
                        <div className={styles.textCentered}>
                            <select value={brewMethod} onChange={(e) => setBrewMethod(e.target.value)}>
                                <option value="null" >Selection</option>
                                <option value="Pour Over">Pour Over</option>
                                <option value="Coffeemaker Method" >Coffeemaker Method</option>
                                <option value="French" >French Press Method</option>
                            </select>
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        {/* Experience */}
                        <label className={styles.textCentered}>Coffee Experience: </label>
                        <textarea type="text" value={experience} onChange={(e) => setExperience(e.target.value)} ></textarea>
                    </Col>

                </Row>

                <div className={styles.textCentered} >
                    <button type="submit">Submit Experience</button>
                </div>

            </form>
        </Container>
         </div>
    );
};

export default UserInput;