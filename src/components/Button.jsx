import "../styles/scss/main.scss";
import React from "react";

const Button = ({ children, variant, size = "medium", fullWidth, className = "", ...props }) => {
  const buttonClasses = ["btn"];

  if (variant) {
    buttonClasses.push(`btn--${variant}`);
  }

  buttonClasses.push(`btn--${size}`);

  if (fullWidth) {
    buttonClasses.push("btn--full-width");
  }

  if (className) {
    buttonClasses.push(className);
  }

  return (
    <button type="button" className={buttonClasses.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
