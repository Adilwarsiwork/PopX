import React from "react";
import "./Landingpage.scss";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  const routing = (value) => {
    if (value === "/Createaccount") {
      navigate("/createaccount");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="dashboard-container">
      <p className="dashboard-heading">Welcome to PopX</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button
        type="button"
        className="createaccount"
        onClick={() => {
          routing("/Createaccount");
        }}
      >
        Create Account
      </button>
      <button
        type="button"
        className="loginbutton"
        onClick={() => {
          routing("/Signin");
        }}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Landingpage;
