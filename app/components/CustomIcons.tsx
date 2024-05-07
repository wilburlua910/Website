import React from "react";
import { SocialIcon } from "react-social-icons";

//Import all these for Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the FontAwesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

const CustomIcons = () => {
  return (
    <div className="m-5">
      <a href="https://www.google.com" target="_blank">
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="3x"
          color="white"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default CustomIcons;
