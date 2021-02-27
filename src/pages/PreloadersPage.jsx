import React from "react";
import {
  Preloader1,
  Preloader2,
  Preloader3,
  Preloader4,
  Preloader5,
  Preloader6,
} from "../components/preloaders";

const PreloadersPage = () => {
  return (
    <div className="page">
      <Preloader1 />
      <Preloader2 />
      <Preloader3 />
      <Preloader4 />
      <Preloader5 />
      <Preloader6 />
    </div>
  );
};

export default PreloadersPage;
