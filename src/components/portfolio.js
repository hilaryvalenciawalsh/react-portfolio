import React, {Component} from 'react';
import mixr from  "../assets/images/mixr.png";
import password from "../assets/images/password.png";
import covid from "../assets/images/covid.png";
import schedule from "../assets/images/schedule.png";
import budget from "../assets/images/budget.png";
import employee from "../assets/images/employee.png";
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
              paddingLeft: "8px",
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
              paddingLeft: "8px",
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
              paddingLeft: "8px",
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
              paddingLeft: "8px",
              paddingBottom: "30px"
            }}
          ></img></a>

<a href="https://github.com/hilaryvalenciawalsh/budget-tracker">
          <img src={budget}
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
              paddingLeft: "8px",
              paddingBottom: "30px"
            }}
          ></img></a>

<a href="https://github.com/hilaryvalenciawalsh/employee-directory">
          <img src={employee}
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
              paddingLeft: "8px",
              paddingBottom: "30px"
            }}
          ></img></a>
            </div>
        )
    }
}
export default Portfolio;
