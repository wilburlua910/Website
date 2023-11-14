import React from "react";

const NewSectionText = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center">
      <p className="text-3xl mt-5">{text}</p>
    </div>
  );
};

export default NewSectionText;
