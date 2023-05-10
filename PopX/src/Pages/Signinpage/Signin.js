import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Validation from "./Signinvalidation";
import "./Signin.scss";

const Signin = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const inputhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //validdation point created but not active yet
  //ist can be active by few changes.
  //after click on submit yoy can see input data on console

  const login = (event) => {
    event.preventDefault();
    const errmsg = Validation(inputData);
    setErrors(errmsg);

    // showing error msg and input data on console
    // we can chnage below code and send data to backend using axios,ajax,fetch
    //or any other technology
    if (Object.values(errmsg).length === 0) {
      console.log("no error check below");
      console.log(errmsg);
      console.log("input fields data check below");
      console.log(inputData);
    } else {
      console.log("error message check below");
      console.log(errmsg);
      console.log("input fields data check below");
      console.log(inputData);
    }

    navigate("/profile");
  };

  return (
    <div className="loginpage-container">
      <p className="loginheading">Signin to your PopX account</p>
      <p className="logininfo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="form">
        <div className="email-box">
          <label htmlFor="email" id="emaillabel">
            Email Address
          </label>
          <br />
          <input
            id="email"
            className="inputs email"
            type="text"
            value={inputData.email}
            autoComplete="off"
            name="email"
            placeholder="Enter email address"
            onChange={inputhandler}
          ></input>
          {errors.email && <span className="errormsg">{errors.email}</span>}
        </div>
        <div className="password-box">
          <label htmlFor="password" id="passwordlabel">
            Password
          </label>
          <br />
          <input
            id="password"
            className="inputs password"
            type="password"
            value={inputData.password}
            autoComplete="off"
            name="password"
            placeholder="Enter password"
            onChange={inputhandler}
          ></input>{" "}
          {errors.password && (
            <span className="errormsg">{errors.password}</span>
          )}
        </div>
        <button type="button" className="buttonlogin" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
