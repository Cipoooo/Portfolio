import { Container, Row , Col } from "react-bootstrap";
import { useState } from "react";
import FotoMia2 from "../../assets/mm.jpg";
import "../About/About.css";


const About = () =>{

    const [activeSection, setActiveSection] = useState('education');


    return(
        <>
        <Container lg className="About p-5">
            <Row>
                <Col className="ColImage col-12 col-md-6 col-xl-5">
                <div className="ImageContainer">
                    <img src={FotoMia2} alt="" width={"100%"} height={"100%"} style={{borderRadius:"10%", boxShadow:"5px 5px 10px 5px var(--background)"}} />
                </div>
                </Col>
                <Col className="ColDescription col-12 col-md-6 col-xl-7">
                    <Row>
                        {activeSection === 'education' ? 
                        <Col className="ColEducation col-10">
                            <h1>Educazione & Formazione</h1>
                            <p>Diploma tecnico in Informatica, corso Full-Stack Web Developer presso Boolean, con esperienza su progetti React, Node.js e MongoDB.</p>
                        </Col>
                         : ""}
                          {activeSection === 'stack'? 
                        <Col className="ColStack col-10">
                            <h1>Tech-Stack</h1>
                            <p>Diploma tecnico in Informatica, corso Full-Stack Web Developer presso Boolean, con esperienza su progetti React, Node.js e MongoDB.</p>
                        </Col>
                         : ""}
                          {activeSection === 'hobbies' ? 
                        <Col className="ColHobbies col-10">
                            <h1>Hobbies</h1>
                            <p>Diploma tecnico in Informatica, corso Full-Stack Web Developer presso Boolean, con esperienza su progetti React, Node.js e MongoDB.</p>
                        </Col>
                         : ""}
                        <Col className="icon-column col-2 d-flex flex-column justify-content-start">
                        <div className="d-flex me-2 align-items-center">
                            <span className={activeSection === 'education' ? "educationSpan" : "text-black fs-3"}>-----</span>
                            <i className={activeSection === 'education'? "educationIcon bi bi-mortarboard-fill icon" :`bi bi-mortarboard-fill icon fs-3`} onClick={() => setActiveSection('education')}></i>
                        </div>
                        <div className="d-flex me-2 align-items-center">
                            <span className={activeSection === 'stack' ? "educationSpan" : "text-black fs-3"}>-----</span>
                            <i className={activeSection === 'stack'? "tech-stackIcon bi bi-file-earmark-person icon":`bi bi-file-earmark-person icon fs-3 `} onClick={() => setActiveSection('stack')}></i>
                        </div>
                        <div className="d-flex me-2 align-items-center">
                            <span className={activeSection === 'hobbies' ? "educationSpan" : "text-black fs-3"}>-----</span>
                            <i className={activeSection === 'hobbies'? "hobbiesIcon bi bi-controller icon":`bi bi-controller icon fs-3`} onClick={() => setActiveSection('hobbies')}></i>
                        </div>
                           
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default About;