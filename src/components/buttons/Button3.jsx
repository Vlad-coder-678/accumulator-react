import React from "react";

import {
  facebook_icon,
  pinterest_icon,
  twitter_icon,
} from "../../assets/images";

const Button3 = () => {
  return (
    <div className="button__container button3__wrapper">
      <button className="button3">
        <div className="button3__flipper">
          <div className="front">
            <img src={facebook_icon} alt="facebook" />
          </div>
          <div className="back">
            <span>Facebook</span>
          </div>
        </div>
      </button>
      <button className="button3">
        <div className="button3__flipper">
          <div className="front">
            <img src={twitter_icon} alt="twitter" />
          </div>
          <div className="back">
            <span>Twitter</span>
          </div>
        </div>
      </button>
      <button className="button3">
        <div className="button3__flipper">
          <div className="front">
            <img src={pinterest_icon} alt="pinterest" />
          </div>
          <div className="back">
            <span>Pinterest</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button3;
