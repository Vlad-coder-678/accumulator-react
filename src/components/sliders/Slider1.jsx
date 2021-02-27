import React from "react";

const Slider1 = () => {
  return (
    <div className="slider__wrapper">
      <div className="slider1">
        <input type="radio" name="slide" id="section1" defaultChecked />
        <input type="radio" name="slide" id="section2" />
        <input type="radio" name="slide" id="section3" />
        <input type="radio" name="slide" id="section4" />

        <nav>
          <label htmlFor="section1"></label>
          <label htmlFor="section2"></label>
          <label htmlFor="section3"></label>
          <label htmlFor="section4"></label>
        </nav>

        <section>
          <h2>First Page</h2>
        </section>
        <section>
          <h2>Second Page</h2>
        </section>
        <section>
          <h2>Third Page</h2>
        </section>
        <section>
          <h2>Four Page</h2>
        </section>

        <div className="cover"></div>
      </div>
    </div>
  );
};

export default Slider1;
