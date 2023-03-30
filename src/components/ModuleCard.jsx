import React from "react";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock-blue.svg";
import "./ModuleCard.css";
function ModuleCard({
  problems,
  score,
  question,
  duration,
  startData,
  dueDate,
  startTime,
  dueTime,
}) {
  return (
    <div className="moduleCard">
      {problems ? (
        <div className="moduleCard--section1">
          <div className="moduleCard--subsection">
            <p className="headingCard--heading">{problems}</p>
            <p>Problems</p>
          </div>
          <div className="moduleCard--subsection">
            <p className="headingCard--heading">{score}</p>
            <p>Total Score</p>
          </div>
        </div>
      ) : (
        <div className="moduleCard--section1">
          <div className="moduleCard--subsection">
            <p className="headingCard--heading">{question}</p>
            <p>Questions</p>
          </div>
          <div className="moduleCard--subsection">
            <p className="headingCard--heading">{duration}</p>
            <p>Duration</p>
          </div>
          <div className="moduleCard--subsection">
            <p className="headingCard--heading">{score}</p>
            <p>Total Score</p>
          </div>
        </div>
      )}
      <div>
        <div className="moduleCard--section2">
          <div className="moduleCard--subsection2">
            <p>Start</p>
            <div>
            <img src={calendar} alt="logo" className="moduleCard--logo"/>
            <span>{startData}</span>
            </div>
            <img src={clock} alt="logo" className="moduleCard--logo"/>
            <span>{startTime}</span>
          </div>

          <div className="moduleCard--subsection2">
            <p>End</p>
            <div>
            <img src={calendar} alt="logo" className="moduleCard--logo"/>
            <span>{dueDate}</span>
            </div>
            <img src={clock} alt="logo" className="moduleCard--logo"/>
            <span>{dueTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleCard;
