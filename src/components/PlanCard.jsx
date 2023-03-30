import React from "react";
import "./PlanCard.css";
function PlanCard() {
  return (
    <div className="planCard__container">
      <h1 className="planCard__heading">Today's Plan</h1>
      <h3 className="planCard__subheading">21 March 2023</h3>
      <h3 className="planCard__textHeading">Data Transformation using Pandas-3</h3>
      <div className="planCard__details">
      <span>Daily Feedback</span>
      <span>opens at 7:30 PM</span>
      </div>
      <button className="planCard__button">JOIN LIVE SESSION</button>
      <p className="planCard__time">Begins at 7:30pm</p>
    </div>
  );
}

export default PlanCard;
