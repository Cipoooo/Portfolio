
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const arraySaluti = [
  "Ciao",
  "Hi",
  "Salut",
  "Privet",
  "Bonjour",
  "Hola",
  "Hallo",
  "Shalom",
  "Cześć",
  "Hej",
  "Merhaba",
  "Konnichiwa",
  "Ni hao",
  "Ahoj",
  "Salam",
  "Chào",
  "Sawubona"
];

  const getRandomSaluto = () => {
    return arraySaluti[Math.floor(Math.random() * arraySaluti.length)];
  };


const Home = () =>{

      const [saluto, setSaluto] = useState(getRandomSaluto());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setSaluto(getRandomSaluto());
        },3000);

        return () => clearInterval(intervalId);
    },[]);

    return(
        <>
        <Container fluid className="Header p-0">
            <div className="HeaderColumn">
              <h3 className="saluto my-0">{saluto}, This is</h3>
              <div className="d-flex">
                <h1 className="nome my-0"><span className="colore">Gabr</span>iele<span className="colore"> Cipo</span>lloni</h1>
              </div>
              <hr />
              <h2 className="lavoro my-0">A Junior <span className="colore2">Full-Stack</span> Web Developer</h2>
              <div className="ButtonsContainer">
               <Link to={"/About"}><button className="LearnMore px-4 fw-semi-bold py-2 fs-4 ms ">Learn More</button></Link> 
                              <Link to={"/Projects"}><button className="LearnMore   px-4 fw-semi-bold py-2 fs-4 ms-4">My Projects</button></Link>
               <Link to={"/Contacts"}><button className="LearnMore  px-4 fw-semi-bold py-2 fs-4 ms-4">Contact Me</button></Link>
              </div>
            </div>
            <div className="HeaderColumnR ">
                <div className="ProfileImageContainer1">
                    <div className="ProfileImageContainer2">
                        <div className="ProfileImage"></div>
                    </div>
                </div>
            </div>
            <div className="RandomCircles"></div>
        </Container>
        </>
    );
};

export default Home;