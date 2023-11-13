import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { Poppins } from "next/font/google";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>

    </div>
  );
};

export default Home;
