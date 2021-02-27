import React from "react";

const Preloader6 = () => {
  return (
    <div className="preloader preloader6">
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SpurceGraphik" stdDeviation="10" />
          <feColorMatrix
            values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
          />
        </filter>
      </svg>
      <div className="preloader6__inner">
        <span className="prel6__i1"></span>
        <span className="prel6__i2"></span>
        <span className="prel6__i3"></span>
        <span className="prel6__i4"></span>
        <span className="prel6__i5"></span>
        <span className="prel6__i6"></span>
        <span className="prel6__i7"></span>
        <span className="prel6__i8"></span>
        <span className="prel6__j0"></span>
        <span className="prel6__j1"></span>
        <span className="prel6__j2"></span>
        <span className="prel6__j3"></span>
        <span className="prel6__j4"></span>
      </div>
    </div>
  );
};

export default Preloader6;
