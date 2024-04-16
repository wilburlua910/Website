import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { Poppins } from "next/font/google";
import NewSectionText from "./components/NewSectionText";
import CustomIcons from "./components/CustomIcons";
import About from "./About";

import Experience from "./Experience";
const Home = () => {
  return (
    <div className="flex flex-row" id="SideNavBarMenu">
      <div className="w-32 h-screen bg-black">
        <ul>
          <li className="flex justify-center text-white pt-10 pb-10">
            <h2 className="text-3xl">WL.</h2>
          </li>
          <li className="flex justify-center text-white">About Me</li>
          <li className="flex justify-center text-white">Experience</li>
          <li className="flex justify-center text-white">Portfolio</li>
        </ul>

        {/* <Hero></Hero>
      <NewSectionText text={"About Me"}></NewSectionText>
      <About></About>

      <NewSectionText text={"Check out my Experiences!"}></NewSectionText>

      <Experience /> */}
      </div>

      {/*Using flex-1 to allow my div */}

      <div className="flex-1 bg-slate-900" id="HomePage">
        <h1 className="text-white">Hello!</h1>
      </div>
    </div>
  );
};

export default Home;
