import React from "react";

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 flex">
      <div className="container m-5">
        <p className="text-3xl">WL.</p>
      </div>

      <div className="container flex justify-end">
        <ul>
          <li className="inline-block m-5">
            <p className="font-light text-lg">About</p>
          </li>
          <li className="inline-block m-5">
            <p className="font-light text-lg">Experience</p>
          </li>

          <li className="inline-block m-5">
            <p className="font-light text-lg">Project</p>
          </li>

          <li className="inline-block m-5">
            <p className="font-light text-lg">Contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
