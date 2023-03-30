import React, { Fragment } from "react";
import CertificationCard from "../components/CertificationCard";
import DropDownBar from "../components/DropDownBar";
import LearningCard from "../components/LearningCard";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";
import SideBar from "../components/SideBar";
import ProgressCard from "../components/ProgressCard";
import "./Home.css";
import ForumIcon from "@mui/icons-material/Forum";
function Home() {
  return (
    <Fragment>
      <Navbar learner="Test student" />
      <DropDownBar code="dsc1102" name="Hello from name" />
      <div className="homeGridContainer">
        <SideBar />
        <div className="home__section">
          <h1 className="home__section-heading">Upcoming Certifications</h1>
          <CertificationCard />
          <h1 className="home__section-heading">Continue Learning</h1>
          <div className="homeSection__subGrid">
            <LearningCard />
            <PlanCard />
            <div className="progressContainer">
              <ProgressCard />
            </div>
          </div>
        </div>
        <ForumIcon
          fontSize="large"
          sx={{
            position: "fixed",
            bottom: 0,
            right: 10,
          }}
        />
      </div>
    </Fragment>
  );
}

export default Home;
