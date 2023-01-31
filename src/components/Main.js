import { useState } from "react";
import { AboutMeView } from "./views/AboutMeView";
import { ContactView } from "./views/ContactView";
import { HomeView } from "./views/HomeView";
import { PrevExp } from "./views/PrevExp";
import { Projects } from "./views/Projects";
import { WeatherApp } from "./weather app/WeatherApp";

export function Main(props) {
  return (
    <div id="main">
      <HomeView state={props.state} onChange={props.onChange}></HomeView>
      <AboutMeView state={props.state}></AboutMeView>
      <PrevExp state={props.state}></PrevExp>
      <Projects state={props.state} onChange={props.onChange}></Projects>
      <ContactView state={props.state}></ContactView>
    </div>
  );
}
