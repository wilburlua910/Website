import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-5">
      <div className="w-full h-96 border-2 rounded-3xl">
        <p className="flex justify-center mt-10 font-bold text-xl">
          Frontend Development
        </p>
      </div>

      <div className="w-full h-96 border-2 rounded-3xl">
        <p className="flex justify-center mt-10 font-bold text-xl">
          Backend Development
        </p>
      </div>
    </div>
  );
};

export default Experience;
