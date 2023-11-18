import React from "react";

const NewSectionText = ({ text }: { text: string }) => {
  return (
    <div className="mt-20 flex justify-center">
      <p className="text-5xl mt-5 mb-20 font-extrabold">{text}</p>
    </div>
  );
};

export default NewSectionText;
