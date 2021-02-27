// import { useState } from "react";

class BG2__Dot {
  constructor(pos) {
    this.pos = pos;
    const dir = ((Math.random() * 3) | 0) * 2;
    const step = 0;
  }
  // const [pos, setPos] = useState([
  // { x: window.outerWidth / 2, y: window.outerHeight / 2 },
  // ]);
  // const dir = ((Math.random() * 3) | 0) * 2;
  // const step = 0;
  // const redrawDot = () => {
  //   let xy = Math.abs(pos.x - window.width) + Math.abs(pos.y - window.height);
  //   let makeHue = (cfg.hue + xy / cfg.gradientLen) % 360;
  //   let color = `hsl(${makeHue}, 100%, 50%)`;
  //   let blur = cfg.dotSize - Math.sin(xy / 8) * 2;
  //   let size = cfg.dotSize - Math.sin(xy / 9) * 2 + Math.sin(xy / 2);
  //   let x = pos.x - size / 2;
  //   let y = pos.y - size / 2;
  // drawRect(color, x, y, size, size, color, blur, `lighter`);
  // };
  // const moveDot = () => {
  //   step++;
  //   // pos.x += dirsList[dir].x * cfg.dotVelocity;
  //   // pos.y += dirsList[dir].y * cfg.dotVelocity;
  // };
  // const changeDir = () => {
  //   if (step % cfg.stepToTurn === 0) {
  //     dir =
  //       Math.random() > 0.5
  //         ? (dir + 1) % cfg.dirsCount
  //         : (dir + cfg.dirsCount - 1) % cfg.dirsCount;
  //   }
  // };
  // const killDot = (id) => {
  //   let percent = Math.random() * Math.exp(step / cfg.distance);
  //   if (percent > 100) {
  //     // dotsList.splice(id, 1);
  //   }
  // };
}

export default BG2__Dot;
