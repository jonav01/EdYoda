import React from "react";
import "./Navbar.css";
// import videoCam from "../assets/videocam.svg";
import user from "../assets/user.avif"
function Navbar({ learner }) {
  return (
    <div className="navbar__container">
      <h1 className="navbar__container-Logo">EDYODA</h1>
      <div className="navbar__container-LoginDetails">
      <span>Hi {learner}</span>
        <img src={user} alt="logo" className="navbar__container-Logo" />
      </div>
    </div>
  );
}

export default Navbar;
