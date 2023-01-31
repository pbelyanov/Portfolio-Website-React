import weatherAppLogo from "../../images/weatherAppLogo.png";
import toDoAppLogo from "../../images/to-do-app.jpg";
import calculatorAppLogo from "../../images/calc-image.jpg";
import { useState, useEffect } from "react";
import { WeatherApp } from "../weather app/WeatherApp";
import { Link } from "react-router-dom";
import("../../styles/styleProjects.css");

export function Projects(props) {
  const [currentSlide, changeSlide] = useState(0);
  const [currentApp, changeApp] = useState("appSlider");

  const AppSlider = (props) => {
    const appsImage = [weatherAppLogo, toDoAppLogo, calculatorAppLogo];
    const appsImageNames = ["weatherApp", "toDoApp", "calculatorApp"];

    if (props.currentApp === "appSlider") {
      return (
        <div id="img">
          <Link to={appsImageNames[props.slide]}>
            <img src={appsImage[props.slide]} alt="React Image" />
          </Link>
        </div>
      );
    }
  };

  function previous(currentSlide) {
    if (currentSlide <= 0) {
      changeSlide(2);
    } else {
      changeSlide(currentSlide - 1);
    }
  }

  function next(currentSlide) {
    if (currentSlide >= 2) {
      changeSlide(0);
    } else {
      changeSlide(currentSlide + 1);
    }
  }

  return (
    <section id="projectSection">
      <h1>PROJECTS</h1>
      <div id="mainContainerProjects">
        <div>
          <button id="previous" onClick={() => previous(currentSlide)}>
            &lt;
          </button>
        </div>
        <div id="img-box">
          <AppSlider slide={currentSlide} currentApp={currentApp}></AppSlider>
        </div>
        <div>
          <button id="next" onClick={() => next(currentSlide)}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
