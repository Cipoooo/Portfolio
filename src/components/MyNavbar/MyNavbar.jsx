

import { Navbar,Container,Nav } from "react-bootstrap";
import "./MyNavbar.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const MyNavbar = () =>{

  const [scrolled,setScrolled ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return(
        <>
        <Navbar fluid fixed="top" className={scrolled? "NavScrolled  px-5" :"Nav px-5"}>
          <div className="w-100 px-3 d-flex justify-content-between">
            <Link style={{textDecoration:"none"}} to={"/"}>
             <div className="d-flex">   
              <span>G</span><p>abriele</p><span>Dev</span><p>.</p>
             </div> 
            </Link>
            <div className="NavLinkContainer d-flex">
              <Link className="NavLinks my-0 py-0 ms-4" to={"/"}>Home</Link>
              <Link className="NavLinks my-0 py-0 ms-3" to={"/About"}>About me </Link>
              <Link className="NavLinks my-0 py-0 ms-3" to={"/Projects"}> Projects </Link>
              <Link className="NavLinks my-0 py-0 ms-3" to={"/Contacts"}> Contacts</Link>
              <i className="bi bi-align-bottom px-2 text-white"></i>
              {/*<button className="modeSwitcher outline-none rounded-pill d-flex justify-content-evenly">
                {isOn == true?<i className="bi bi-sun-fil text-white fs-2"></i>: <i className="bi bi-moon text-white fs-3 w-100" onClick={() =>{setIsOn==false}}></i>}
              </button>*/}
            </div>
             <div className="NavLinkContainer d-flex">
              <Link className="NavLinks my-0 py-0 ms-4" to={"/"}>Home</Link>
              <Link className="NavLinks my-0 py-0 ms-3" to={"/About"}>About me </Link>
            </div>
          </div>
      </Navbar>
        </>
    );
};

export default MyNavbar;