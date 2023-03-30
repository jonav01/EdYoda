import React from "react";
import "./CertificationCard.css";
import dataImage from "../assets/Data-Analysis.png";
function CertificationCard() {
  return (
    <div className="certficationcardGrid__container">
      <img src={dataImage} alt="logo"/>
      <div className="card__section1">
        <div className="card__section1-tags">CERTIFICATION | ATTEMPT 1 </div>
        <div className="card__section1-heading">
          DATA ANALYSIS CERTIFICATION{" "}
        </div>
        <div className="card__section1-endingtags">
          COMPLETED | ATTEMPT 1
        </div>
      </div>
      <div className="card__section2">
        <div className="card__section2-heading">Exam Structure</div>
        <div className="card__section2-rounds">
          Round 1 <span>MCQS</span>
          <span>CODING</span>
        </div>
        <div className="card__section2-rounds">
          Round 2 <span>PROJECT</span>
        </div>
      </div>
      <div className="card__section3">
        <button>View Exam Details</button>
      </div>
    </div>
  );
}

export default CertificationCard;
