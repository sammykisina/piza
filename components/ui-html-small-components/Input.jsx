import React from "react";
import { Icon } from "../";

const Input = ({
  inputWrapperStyles,
  inputStyles,
  inputValue,
  inputPlaceholder,
  inputType,
  icon,
  iconPurpose,
}) => {
  return (
    <div className={`${inputWrapperStyles}`}>
      <input
        className={`bg-transparent w-full outline-none ${inputStyles}`}
        placeholder={inputPlaceholder}
        type={inputType}
      />

      {icon && iconPurpose && <Icon icon={icon} purpose={iconPurpose} />}
    </div>
  );
};

export default Input;
