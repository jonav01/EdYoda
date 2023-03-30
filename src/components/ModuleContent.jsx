import React from "react";
import ModuleCard from "./ModuleCard";
import "./ModuleContent.css";
function ModuleContent({
  heading,
  subheading,
  details,
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
    <div className="moduleContentContainer">
      {problems && score ? (
        <div className="moduleContent">
          <div>
            <h1 className="moduleContent--header">{heading}</h1>
            <h3 className="moduleContent--subheader">{subheading}</h3>
          </div>
          <div className="moduleContent--header-section">
          <div className="moduleContent--header-subsection">
            <p>{problems}</p>
            <p>Problems</p>
          </div>
          <div className="moduleContent--header-subsection">
            <p>{score}</p>
            <p>Total Score</p>
          </div>
          </div>
        </div>
      ) : (
        <div className="moduleContent">
          <h1 className="moduleContent--header">{heading}</h1>
          <h3 className="moduleContent--subheader">{subheading}</h3>
        </div>
      )}
      <p className="moduleContent--details">{details} details</p>
      {(question && duration) ? 
      <ModuleCard
        question={question}
        duration={duration}
        score={score}
        dueDate={dueDate}
        dueTime={dueTime}
        startData={startData}
        startTime={startTime}
      /> : 
      <ModuleCard
      problems={problems}
      score={score}
      dueDate={dueDate}
      dueTime={dueTime}
      startData={startData}
      startTime={startTime}
      />
    }
    </div>
  );
}

export default ModuleContent;
