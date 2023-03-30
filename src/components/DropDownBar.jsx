import React, { useState } from "react";
import "./DropDownBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function DropDownBar({ code, name }) {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="dropdownBar__container">
        <p className="dropdownBar__container-Code">{code}</p>
        {show ? (
          <ArrowDropUpIcon fontSize="large" onClick={() => setshow(!show)} />
        ) : (
          <ArrowDropDownIcon fontSize="large" onClick={() => setshow(!show)} />
        )}

        <p className="dropdownBar__container-CourseName">{name}</p>
      </div>
      {show && (
        <div className="dropdownBar__container-Subsection">
          <p className="dropdownBar__container-Subsection__heading">
            Sub-section
          </p>
          <div className="dropdownBar__container-Subsection_courses">
            <a className="dropDown-links" href="#">
              ECD
            </a>
            <a className="dropDown-links" href="#">
              sadasd
            </a>
            <a className="dropDown-links" href="#">
              dasdasd
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default DropDownBar;
