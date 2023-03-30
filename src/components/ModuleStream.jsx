import React from "react";
import document from "../assets/document.svg";
import info1 from "../assets/information-circle 1.svg";
import video from "../assets/videocam.svg";
import play from "../assets/play-circle.svg";
import './ModuleStream.css'
function ModuleStream({heading , subheading , list}) {
  return (
    <div className="moduleStream__container">
      <div className="streamHeading__container">
        <div>
          <h1 className="streamHeading">{heading}</h1>
          <h3 className="streamSubHeading">{subheading}</h3>
        </div>
        <p>Daily Feedback</p>
      </div>
      <div className="moduleWatch__container">
        <a className="watchFlexbox">
          <img src={info1} alt="logo" className="watchIcon" />
          <span className="">SESSION PLAN</span>
        </a>
        <a className="watchFlexbox">
          <img src={play} alt="logo" className="watchIcon" />
          <span className="">PRE-WATCH VIDEOS</span>
        </a>
        <a className="watchFlexbox">
          <img src={video} alt="logo" className="watchIcon" />
          <span className="">SESSION RECORDING</span>
        </a>
        <a className="watchFlexbox">
          <img src={document} alt="logo" className="watchIcon" />
          <span className="">REFERENCES</span>
        </a>
      </div>
      <div className="moduleStream__main">
        <h3 className="moduleStream__main--header">Session Plan</h3>
        <span className="moduleStream__main--subheader">
          Live session is about to start
        </span>
        <br />
        <button className="moduleStream__main--headerBtn">
          Join Live Session
        </button>
        <ol className="moduleStream__main--list">
          <h3 className="moduleStream__main--listHeading">Sub-Topics</h3>
          {list.map((elem) => (
            <li className="moduleStream__main--listElements">{elem}</li>
          ))}
        </ol>
        <h3 className="footer">Session Details</h3>
      </div>
    </div>
  );
}

export default ModuleStream;
