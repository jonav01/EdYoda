import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import "./SideBar.css";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sideBar__container">
      <Link to="/">
        <HomeIcon fontSize="large" sx={{ marginBottom: "2px" }} />
      </Link>
      <p className="sidebar__iconNames">HOME</p>
      <Link to="/modules/stream">
        <LibraryBooksIcon
          fontSize="large"
          sx={{ marginBottom: "2px", marginTop: "1.5rem" }}
        />
      </Link>
      <p className="sidebar__iconNames">MODULE</p>
      <Link to="/">
        <RecordVoiceOverIcon
          fontSize="large"
          sx={{ marginBottom: "2px", marginTop: "1.5rem" }}
        />
      </Link>
      <p>INSTRUCTORS</p>
    </div>
  );
}
export default SideBar;
