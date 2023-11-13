import React from "react";

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 flex">
      <div className="container m-5">
        <p className="text-xl">WL.</p>
      </div>

      <div className="container flex justify-end">
        <ul>
          <li className="inline-block m-5">
            <p>About</p>
          </li>
          <li className="inline-block m-5">
            <p>Experience</p>
          </li>

          <li className="inline-block m-5">
            <p>Project</p>
          </li>

          <li className="inline-block m-5">
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
