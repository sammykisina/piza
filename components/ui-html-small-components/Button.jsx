import React from "react";

const Button = ({
  buttonName,
  buttonStyles,
  buttonIcon,
  buttonIconWrapperStyles,
  purpose,
  buttonIconPosition = "left",
}) => {
  return (
    <button className={`${buttonStyles}`} onClick={() => purpose()}>
      {/* button icon wrapper <left>*/}
      <div
        className={`${buttonIconWrapperStyles} ${
          buttonIconPosition === "right" && "hidden"
        }`}
      >
        {buttonIcon}
      </div>

      {/* button name */}
      <span>{buttonName}</span>

      {/* button icon wrapper <right>*/}
      <div
        className={`${buttonIconWrapperStyles} ${
          buttonIconPosition === "left" && "hidden"
        }`}
      >
        {buttonIcon}
      </div>
    </button>
  );
};

export default Button;
