import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Createaccount.scss";
import Validation from "./Createaccountvalidation.js";

const Createaccount = () => {
  const [inputData, setInputData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    password: "",
    company: "",
    agency: "",
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

  const submitform = (event) => {
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
    <div className="signpage-container">
      <p className="signinheading">Create your PopX account</p>

      <form className="signinform">
        <label htmlFor="fullname" id="fullnamelabel">
          Full Name<span>*</span>
        </label>
        <br />
        <input
          id="fullname"
          className="inputs fullnamefield"
          type="text"
          value={inputData.fullname}
          autoComplete="off"
          name="fullname"
          placeholder="Enter full name / Marry Doe"
          onChange={inputhandler}
        ></input>
        {errors.fullname && <span className="errormsg">{errors.fullname}</span>}
        <br />
        <label htmlFor="phonenumber" id="phonenumberlabel">
          Phone number<span>*</span>
        </label>
        <br />
        <input
          id="phonenumber"
          className="inputs phonenumberfield"
          type="text"
          value={inputData.phonenumber}
          autoComplete="off"
          name="phonenumber"
          placeholder="Enter phone number / Marry Doe"
          onChange={inputhandler}
        ></input>
        {errors.phonenumber && (
          <span className="errormsg">{errors.fullname}</span>
        )}
        <br />
        <label htmlFor="email" id="emaillabel">
          Email address<span>*</span>
        </label>
        <br />
        <input
          id="email"
          className="inputs emailfield"
          type="text"
          value={inputData.email}
          autoComplete="off"
          name="email"
          placeholder="Enter email address / Marry Doe"
          onChange={inputhandler}
        ></input>
        {errors.email && <span className="errormsg">{errors.email}</span>}
        <br />
        <label htmlFor="password" id="passwordlabel">
          Password<span>*</span>
        </label>
        <br />
        <input
          id="password"
          className="inputs passwordfield"
          type="password"
          value={inputData.password}
          autoComplete="off"
          name="password"
          placeholder="Enter password / Marry Doe"
          onChange={inputhandler}
        ></input>
        {errors.password && <span className="errormsg">{errors.password}</span>}
        <br />
        <label htmlFor="company" id="companylabel">
          Company name
        </label>
        <br />
        <input
          id="company"
          className="inputs companyfield"
          type="text"
          value={inputData.company}
          autoComplete="off"
          name="company"
          placeholder="Enter company name / Marry Doe"
          onChange={inputhandler}
        ></input>
        {errors.company && <span className="errormsg">{errors.company}</span>}
        <br />
        <div className="radioinputfield">
          <p className="inputtitle">
            Are you an Agency?<span>*</span>
          </p>
             
          <div className="radiobuttons">
            <label id="radiolabelyes" htmlFor="yes">
              <input
                type="radio"
                id="yes"
                name="agency"
                value="YES"
                checked="checked"
                onChange={inputhandler}
              />
            </label>
            <span>Yes</span> 
            <label id="radiolabelno" htmlFor="no">
              <input
                type="radio"
                id="no"
                name="agency"
                value="NO"
                onChange={inputhandler}
              />
               
            </label>
            <span>No</span>
          </div>
        </div>
        {errors.agency && <span className="errormsg">{errors.agency}</span>}
        <button type="button" className="buttonsignin" onClick={submitform}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Createaccount;
