import React, { useEffect } from "react";
import img from "./image.jpg";


const About = () => (
  <div className="about">


    <div className="info">
      <div id="h1"><h1>Hello Everyone</h1></div>
      
      <p>
        My name is Priyanshu kumar mishra and I live in kolkata , West Bengal . I am a computer science student and completed my bachleors drgree in B.sc computer Science from University of Calcutta. I am very much passionate about Website Development and want to see myself at a higher position in IT companies in future
      </p>
      <a href="#contact" id="btn">Contact Me</a>
      <a href="https://github.com/Priyanshu629" target="_blank">
          
          <i
            className="fa-brands fa-square-github xl-2"
            style={{ color: "white" }}
          ></i>
        </a>
        <a href="https://linkedin.com/in/priyanshu-mishra6291" target="_blank">
          <i
            className="fa-brands fa-linkedin xl-2"
            style={{ color: "white" }}
          ></i>
        </a> 
        
    </div>

   
   <img src={img} alt="" id="img" />

  
  </div>
);

export default About;
