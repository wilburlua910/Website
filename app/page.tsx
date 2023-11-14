import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { Poppins } from "next/font/google";
import NewSectionText from "./components/NewSectionText";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>

      <NewSectionText text={"About Me"}></NewSectionText>

      {/* <div className="h-96 w-96 rounded-full bg-blue-400"></div>
      <div className="h-96 w-96 rounded-full bg-blue-400"></div> */}
    </div>
  );
};

export default Home;
