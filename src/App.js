// import "./App.css";
import "./styles/styles.css"
import React from "react";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { HomeView } from "./components/views/HomeView";
import { Route, Routes } from "react-router-dom";
import { AboutMeView } from "./components/views/AboutMeView";
import { PrevExp } from "./components/views/PrevExp";
import { Projects } from "./components/views/Projects";
import { ContactView } from "./components/views/ContactView";
import { WeatherApp } from "./components/weather app/WeatherApp";



function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeView />}></Route>
        <Route path='/aboutMe' element={<AboutMeView></AboutMeView>}></Route>
        <Route path='/prevExp' element={<PrevExp></PrevExp>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path="/projects/weatherApp" element={<WeatherApp></WeatherApp>}></Route>
        <Route path='/contacts' element={<ContactView></ContactView>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
