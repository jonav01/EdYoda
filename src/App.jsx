import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import Modules from "./pages/Modules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/modules/stream"
          element={
            <Modules
              showStream={true}
              heading="Python Loops"
              subheading="15 December 2021 , Wednesday,07:30 PM"
              list={[
                "Sorting and indexing Dataframe",
                "Filtering Dataframe",
                "Usage of loc and iloc functions",
              ]}
            />
          }
        />
        <Route
          path="/modules/quiz"
          element={
            <Modules
              showStream={false}
              heading="Quiz-1: Data Types"
              subheading="16 December 2021,Thursday"
              details="Quiz"
              question="10"
              duration="-"
              score="125"
              startData="16 Dec 2021"
              startTime="07:30 PM"
              dueDate="19 Dec 2021"
              dueTime="11:59 PM"
            />
          }
        />
        <Route
          path="/modules/assignment"
          element={
            <Modules
              showStream={false}
              heading="Assignment-1: Operators | Loops"
              subheading="20 December 2021,Thursday"
              details="Assignment"
              problems="3"
              score="100"
              startData="16 Dec 2021"
              startTime="07:30 PM"
              dueDate="19 Dec 2021"
              dueTime="11:59 PM"
            />
          }
        />

        <Route path="/instructors" element={<Instructors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
