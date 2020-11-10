import React, {Component} from 'react';
import mixr from  "../assets/images/mixr.png";
import password from "../assets/images/password.png";
import covid from "../assets/images/covid.png";
import schedule from "../assets/images/schedule.png";
class Portfolio extends Component {

    render () {
        return(
            <div> <h1>Portfolio</h1>
          
          <a href="https://github.com/UnexpectedGoat/mixr">
          <img src={mixr}
            width="400"
            height="300"
            alt="mixr"
            style={{
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              display: "inline-block",
              paddingLeft: "300px",
              paddingBottom: "30px"
            }}
          ></img></a>

<a href="https://github.com/hilaryvalenciawalsh/day-planner">
          <img src={schedule}
            width="400"
            height="300"
            alt="mixr"
            style={{
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              display: "inline-block",
              paddingLeft: "300px",
              paddingBottom: "30px"
            }}
          ></img></a>

<a href="https://github.com/jjainga/Covid-19-Resource-Page">
          <img src={covid}
            width="400"
            height="300"
            alt="mixr"
            style={{
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              display: "inline-block",
              paddingLeft: "300px",
              paddingBottom: "30px"
            }}
          ></img></a>

<a href="https://github.com/hilaryvalenciawalsh/password-generator">
          <img src={password}
            width="400"
            height="300"
            alt="mixr"
            style={{
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              display: "inline-block",
              paddingLeft: "300px",
              paddingBottom: "30px"
            }}
          ></img></a>
            </div>
        )
    }
}
export default Portfolio;
