import React from "react";
import "./LearningCard.css";
import user from "../assets/user.avif";
import dataWrangling from "../assets/Data Wrangling.png";
function LearningCard() {
  return (
    <div className="learningCard__container">
      <div className="learningCard__heading">
        <img src={dataWrangling} alt="logo" />
        <div className="learningCard__userContainer">
        <p>Data Wrangling and visualization</p>
        <div className="userContainer">
        <img src={user} alt="user" className="learningCard__user"/><span>Instructor</span>
        </div>
        </div>
      </div>
      <div className="learningCard__section">
        <div className="learningSection__flexContainer">
          <span>Live sessions</span>
          <div className="progress__flexContainer">
            <p>0/13</p>
            <div className="progress"></div>
          </div>
        </div>
        <div className="learningSection__flexContainer">
          <span>Assignments</span>
          <div className="progress__flexContainer">
            <p>0/13</p>
            <div className="progress"></div>
          </div>
        </div>
        <div className="learningSection__flexContainer">
          <span>MCQ Quiz</span>
          <div className="progress__flexContainer">
            <p>0/13</p>
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningCard;
