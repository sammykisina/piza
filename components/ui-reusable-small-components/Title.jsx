import React from "react";

const Title = ({ title, titleStyles, lineStyles }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <span
        className={`text-lg font-semibold text-shadow-lg capitalize ${titleStyles}`}
      >
        {title}
      </span>

      {lineStyles && <span className={`w-8 h-[0.1rem] ${lineStyles}`} />}
    </div>
  );
};

export default Title;
