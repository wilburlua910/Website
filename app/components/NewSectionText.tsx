import React from "react";

const NewSectionText = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center">
      <p className="text-slate-500 text-5xl mt-5 mb-20 font-extrabold">
        {text}
      </p>
    </div>
  );
};

export default NewSectionText;
