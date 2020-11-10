import React, { Component } from "react";
import me from "../assets/images/me.png";
import resume from "../assets/images/iconresume.png";
class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <img
          src={me}
          width="230"
          height="350"
          alt="me"
          style={{
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        />
        <h2 style={{fontSize:"1.5rem"}}>
          My name is Hilary Valencia-Walsh, and I am 22 years old. I started
          college at 16, and earned my Bachelors of Science in Healthcare
          Administration at the age of 21. I am currently in the University of
          Washingtons Full-Stack Coding Bootcamp. In January 2021, I will be
          starting my Masters of Science in Software Development. My hobbies are
          reading, cooking and learning to code!
        </h2>
        <h1>Resume</h1>
        
          <a href="https://app.luminpdf.com/viewer/5faa2648db72460011eb32b5">
          <img 
          src={resume}
            width="100"
            height="100"
            alt="mixr"
            style={{
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              display: "inline-block",
              paddingLeft: "150px",
            }}
          ></img></a>
        
       
      </div>
    );
  }
}
export default About;
