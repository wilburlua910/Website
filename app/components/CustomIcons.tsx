import React from "react";
import { SocialIcon } from "react-social-icons";

const CustomIcons = () => {
  return (
    <div className="m-5">
      <SocialIcon url="https://www.linkedin.com/in/wilbur-lua/" />
      <SocialIcon className="ml-5" url="https://github.com/wilburlua910" />
      <SocialIcon className="ml-5" url="https://medium.com/@wilburlua910" />
    </div>
  );
};

export default CustomIcons;
