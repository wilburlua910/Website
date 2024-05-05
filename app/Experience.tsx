import React from "react";
import Image from "next/image";
import WorkExperienceCard from "./components/WorkExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center mt-5">
        <p className="text-slate-500 text-5xl mt-5 mb-20 font-extrabold">
          Experience & Tech Stack
        </p>
      </div>

      <div className="flex-1 container mx-auto grid grid-cols-2 gap-5 mb-10">
        <div className="w-full h-full border-2 rounded bg-gray-800">
          <p className="flex justify-center mt-10 font-bold text-xl text-white"></p>
          <WorkExperienceCard></WorkExperienceCard>
        </div>

        <div className="container flex flex-col justify-between">
          <div className="w-full h-1/4 border-2 rounded bg-gray-800">
            <p className="flex justify-center mt-10 font-bold text-xl text-white">
              Programming Languages
            </p>
          </div>
          <div className="w-full h-1/4 border-2 rounded bg-gray-800">
            <p className="flex justify-center mt-10 font-bold text-xl text-white">
              Frameworks
            </p>
          </div>

          <div className="w-full h-1/3 border-2 rounded bg-gray-800">
            <p className="flex justify-center mt-5 mb-5 font-bold text-xl text-white">
              Certifications (I'm working on it!)
            </p>

            <div className="flex justify-evenly">
              <a
                target="_blank"
                href="https://www.credly.com/badges/159d9efc-7317-4850-924b-fe0e2badb188/public_url"
              >
                <Image
                  src={"/assets/badges/SA.png"}
                  height={100}
                  width={100}
                  alt="Solution Architect"
                ></Image>
              </a>
              <a
                target="_blank"
                href="https://www.credly.com/badges/8d4133e8-0b4d-45f7-aedd-da7cd9b21f72/public_url"
              >
                <Image
                  src={"/assets/badges/Developer.png"}
                  height={100}
                  width={100}
                  alt="Solution Architect"
                ></Image>
              </a>
              <a
                target="_blank"
                href="https://www.credly.com/badges/8b380ab5-d2d8-46e9-a27b-09641c722e58/public_url"
              >
                <Image
                  src={"/assets/badges/SysOps.png"}
                  height={100}
                  width={100}
                  alt="Solution Architect"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
