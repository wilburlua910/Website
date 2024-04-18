import React from "react";

const RoundButton = ({ text, subtitle }: RoundButton) => {
  return (
    <button className="w-36 rounded-3xl border border-none bg-slate-700 p-3 m-3">
      <h1 className="text-white">{text}</h1>
    </button>
  );
};

export default RoundButton;
