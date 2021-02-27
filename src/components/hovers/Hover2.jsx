import React from "react";

const Hover2 = () => {
  return (
    <div className="hover__border hover2">
      <div className="container">
        <div className="card">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                10 <span>%</span>
              </h2>
            </div>
            <h3>HTML</h3>
          </div>
        </div>
        <div className="card">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                25 <span>%</span>
              </h2>
            </div>
            <h3>CSS</h3>
          </div>
        </div>
        <div className="card">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                65 <span>%</span>
              </h2>
            </div>
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover2;
