import React from "react";
import "./ProgressCard.css";
function ProgressCard() {
  return (
    <div className="progressCard__container">
      <h1>Progress Overview</h1>
      <div className="progressCard__layouts">
        <div className="progress__container">
          <p>0%</p>
          <p>Overall Grade</p>
        </div>
        <div className="progressbar"></div>
      </div>
      <div className="progressCard__layouts">
        <div className="progress__container">
          <p>0%</p>
          <p>Overall Grade</p>
        </div>
        <div className="progressbar"></div>
      </div>
      <h3 className="progressBar__footer">View Detailed Progress</h3>
    </div>
  );
}

export default ProgressCard;
