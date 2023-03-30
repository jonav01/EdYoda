import React, { Fragment } from "react";
import DropDownBar from "../components/DropDownBar";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import assignment from "../assets/assignment.svg";
import topic from "../assets/activeTopic.svg";
import quiz from "../assets/moduleQuiz.svg";
import ModuleContent from "../components/ModuleContent";
import "./Modules.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ModuleStream from "../components/ModuleStream";

function Modules({
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
  list,
  showStream,
}) {
  return (
    <Fragment>
      <Navbar learner="Test student" />
      <DropDownBar code="dsc1102" name="Hello from name" />
      <div className="moduleGridContainer">
        <SideBar />
        <div className="moduleSidebar">
          <Link to="/modules/stream" className="module__sectionFlexbox">
            <img src={topic} alt="logo" className="moduleIcon" />
            <span>Python Loops</span>
          </Link>
          <Link to="/modules/quiz" className="module__sectionFlexbox">
            <img src={quiz} alt="logo" className="moduleIcon" />
            <span>Quiz-1: Data types</span>
          </Link>
          <Link to="/modules/assignment" className="module__sectionFlexbox">
            <img src={assignment} alt="logo" className="moduleIcon" />
            <span>Assignment-1: Operators | Loops</span>
          </Link>
        </div>
        {showStream ? (
          <ModuleStream heading={heading} subheading={subheading} list={list} />
        ) : (
          <ModuleContent
            heading={heading}
            subheading={subheading}
            details={details}
            problems={problems}
            question={question}
            duration={duration}
            score={score}
            startData={startData}
            dueDate={dueDate}
            startTime={startTime}
            dueTime={dueTime}
          />
        )}
      </div>
    </Fragment>
  );
}

export default Modules;
