import React, { Component } from "react";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1> Contact</h1>
        <a href="https://www.linkedin.com/in/hilary-valencia-walsh-bs-5baa6a1b0/">
          
          <img
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
              paddingLeft: "20px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
          ></img>
        </a>
        <a href="https://github.com/hilaryvalenciawalsh">
          
          <img
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
              paddingLeft: "40px",
            }}
            src="https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g.jpg"
          ></img>
        </a>
        <a href="mailto: hilaryvalenciawalsh@gmail.com">
         
          <img
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
              paddingLeft: "40px",
            }}
            src=" https://image.flaticon.com/icons/png/512/561/561127.png"
          ></img>
        </a>
      </div>
    );
  }
}
export default Contact;
