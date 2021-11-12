import React from "react";
import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Habilities from "./components/Habilities/Habilities";
import { CV } from "./CV/cv";

const { hero, education, experience, languages, habilities,} = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />

      <button
        className="custom"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <Habilities habilities={habilities} />
  
    </div>
  );
};

export default App;
