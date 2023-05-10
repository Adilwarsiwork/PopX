import React from "react";
import "./Profilepage.scss";

const Profilepage = () => {
  return (
    <div className="profilepage-container">
      <div className="profileheader-box">
        <p className="profileheader">Account Settings</p>
      </div>
      <div className="profilebox">
        <div className="image"></div>
        <div className="cameraicon"></div>
        <span className="profilename">Marry Doe</span>
        <span className="profileemail">Marry@Gmail.Com</span>
        <p className="profileinfo">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <span className="line"></span>
    </div>
  );
};

export default Profilepage;
