import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { Poppins } from "next/font/google";
import NewSectionText from "./components/NewSectionText";
import CustomIcons from "./components/CustomIcons";
import About from "./about";
import Experience from "./Experience";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>

      <NewSectionText text={"About Me"}></NewSectionText>
      <About></About>

      <NewSectionText text={"Check out my Experiences!"}></NewSectionText>
      <Experience />

      
    </div>
  );
};

export default Home;
