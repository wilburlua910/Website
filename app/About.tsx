import React from "react";
import Image from "next/image";
import Card from "./components/Card";

const About = () => {
  return (
    <div className="container mx-auto flex justify-evenly">
      <div>
        <Image
          className="rounded-3xl"
          src={"/assets/about1.jpeg"}
          width={600}
          height={400}
          alt="Fun Pic"
        ></Image>
      </div>

      <div className="container flex-2 grid grid-cols-2 grid-rows-2">
        <div>
          <Card />
        </div>

        <div>
          <Card />
        </div>

        <div className="col-span-full">
          <p className="ml-20 mr-20 mt-10 text-xl">
            Hey! I am Wilbur, currently Application Developer in IBM!
            <br />
            <br /> I graduated back in 2022 with a Bachelor of Science in
            Computer Science. I have been in the Software Industry for over a
            year and have experiences in Full-stack development, Artificial
            Intelligence , Cloud Computing and DevSecOps.
            <br />
            <br /> My goal is to develop and ship Software that improves
            people's quality of live! If you are on the same mission as me, I'd
            love to connect with you! I'm sure we'll have tons to talk about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
