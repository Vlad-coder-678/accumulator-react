import React from "react";

const Button1 = () => {
  return (
    <div className="button__container button1__wrapper">
      <button className="button1">
        <span className="button1__hover__out">
          <span className="button1__hover__out__text">VIEW BUTTON</span>
        </span>
        <span className="button1__hover">
          <span className="button1__hover__text">VIEW BUTTON</span>
        </span>
      </button>
    </div>
  );
};

export default Button1;
