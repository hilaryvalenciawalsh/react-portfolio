import React, { Component } from "react";
import me from "../assets/images/me.png";
import resume from "../assets/images/resume.png";
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
        <h2 style={{fontSize:"2.5rem"}}>
          My name is Hilary Valencia-Walsh, and I am 22 years old. I started
          college at 16, and earned my Bachelors of Science in Healthcare
          Administration at the age of 21. I am currently in the University of
          Washingtons Full-Stack Coding Bootcamp. In January 2021, I will be
          starting my Masters of Science in Software Development. My hobbies are
          reading, cooking and learning to code!
        </h2>
        <h1>Resume</h1>
        <img
          src={resume}
          width="800"
          height="1100"
          alt="me"
          style={{
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        />
      </div>
    );
  }
}
export default About;
