import React from "react";

const RoundButton = ({
  text,
  subtitle,
}: {
  text: string;
  subtitle?: string;
}) => {
  return (
    <div className="container">
      <button className="text-red rounded-lg">{text}</button>
    </div>
  );
};

export default RoundButton;
