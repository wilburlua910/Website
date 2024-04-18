import React from "react";

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
            <p className="flex justify-center mt-10 font-bold text-xl text-white">
              Certifications (I'm working on it!)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
