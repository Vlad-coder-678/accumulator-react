import React from "react";

import { accumulator, energy } from "../assets/images";

const HomePage = () => {
  return (
    <div className="page home__page">
      <h1>Accumulator</h1>
      <img className="background__image" src={energy} alt="energy" />
      <img className="accum__image" src={accumulator} alt="accum" />
    </div>
  );
};

export default HomePage;
