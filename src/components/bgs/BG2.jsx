import React, { useState, useRef, useEffect } from "react";
// import Dot from "./BG2__Dot";

const BG2 = () => {
  // const cnv = document.querySelector("bg2_canvas");
  // const ctx = cnv.getContext("2d");
  // const ctxBG2 = canvasBG2.getContext("2d");
  // window.addEventListener(`resize`, resizeCanvas);
  // const [canvasWidth, setCanvasWidth] = useState(window.width);
  // const [canvasHeight, setCanvasHeight] = useState(window.height);
  // let cw, ch, cx, cy;
  const canvasBG2 = useRef({});
  const [context, setContext] = useState({});
  console.log(context);
  useEffect(() => {
    // canvasBG2.current.height = window.outerHeight;
    setContext(canvasBG2.current.getContext("2d"));
    // cw = canvasBG2.width = window.width;
    // cx = cw / 2;
    // ch = canvasBG2.height = window.height;
    console.log(canvasBG2.current.width);
    // cy = ch / 2;
  }, [canvasBG2.current.width]);
  console.log(canvasBG2.current);

  //   const resizeCanvas = () => {
  //     cw = cnv.width = innerWidth;
  //     ch = cnv.height = innerHeight;
  //     cx = cw / 2;
  //     cy = ch / 2;
  //   };
  //   resizeCanvas();

  //   const config = {
  //     hue: 0,
  //     bgFillColor: `rgba(50, 50, 50, .05)`,
  //     dirsCount: 6,
  //     stepToTurn: 12,
  //     dotSize: 4,
  //     dotsCount: 300,
  //     dotVelocity: 2,
  //     distance: 70,
  //     gradientLen: 5,
  //   };

  //   const drawRect = (color, x, y, w, h, shadowColor, shadowBlur, gco) => {
  //     ctx.globalCompositeOperation = gco;
  //     ctx.shadowColor = shadowColor || `black`;
  //     ctx.shadowBlur = shadowBlur || 1;
  //     ctx.fillStyle = color;
  //     ctx.fillRect(x, y, w, h);
  //   };

  /*  const drawRect = (color, x, y, w, h, shadowColor, shadowBlur, gco) => {
    ctxBG2.globalCompositeOperation = gco;
    ctxBG2.shadowColor = shadowColor || `black`;
    ctxBG2.shadowBlur = shadowBlur || 1;
    ctxBG2.fillStyle = color;
    ctxBG2.fillRect(x, y, w, h);
  };
  */
  //   class Dot {
  //     constructor() {
  //       this.pos = { x: cx, y: cy };
  //       this.dir = ((Math.random() * 3) | 0) * 2;
  //       this.step = 0;
  //     }

  //     redrawDot() {
  //       let xy = Math.abs(this.pos.x - cx) + Math.abs(this.pos.y - cy);
  //       let makeHue = (config.hue + xy / config.gradientLen) % 360;
  //       let color = `hsl(${makeHue}, 100%, 50%)`;
  //       let blur = config.dotSize - Math.sin(xy / 8) * 2;
  //       let size = config.dotSize - Math.sin(xy / 9) * 2 + Math.sin(xy / 2);
  //       let x = this.pos.x - size / 2;
  //       let y = this.pos.y - size / 2;

  //       drawRect(color, x, y, size, size, color, blur, `lighter`);
  //     }

  //     moveDot() {
  //       this.step++;
  //       this.pos.x += dirsList[this.dir].x * config.dotVelocity;
  //       this.pos.y += dirsList[this.dir].y * config.dotVelocity;
  //     }

  //     changeDir() {
  //       if (this.step % config.stepToTurn === 0) {
  //         this.dir =
  //           Math.random() > 0.5
  //             ? (this.dir + 1) % config.dirsCount
  //             : (this.dir + config.dirsCount - 1) % config.dirsCount;
  //       }
  //     }

  //     killDot(id) {
  //       let percent = Math.random() * Math.exp(this.step / config.distance);
  //       if (percent > 100) {
  //         dotsList.splice(id, 1);
  //       }
  //     }
  //   }

  //   let dirsList = [];

  //   const createDirs = () => {
  //     for (let i = 0; i < 360; i += 360 / config.dirsCount) {
  //       let x = Math.cos((i * Math.PI) / 180);
  //       let y = Math.sin((i * Math.PI) / 180);
  //       dirsList.push({ x: x, y: y });
  //     }
  //   };

  //   createDirs();

  /*  const createDirs = () => {
    for (let i = 0; i < 360; i += 360 / config.dirsCount) {
      let x = Math.cos((i * Math.PI) / 180);
      let y = Math.sin((i * Math.PI) / 180);
      dirsList.push({ x: x, y: y });
    }
  };

  createDirs();
*/
  //   let dotsList = [];

  //   const addDot = () => {
  //     if (dotsList.length < config.dotsCount && Math.random() > 0.8) {
  //       dotsList.push(new Dot());
  //       config.hue = (config.hue + 1) % 360;
  //     }
  //   };

  /*  let dotsList = [];

  const addDot = () => {
    if (dotsList.length < config.dotsCount && Math.random() > 0.8) {
      dotsList.push(new Dot(config));
      config.hue = (config.hue + 1) % 360;
    }
  };
  
  */

  //   const refreshDots = () => {
  //     dotsList.forEach((i, id) => {
  //       i.redrawDot();
  //       i.moveDot();
  //       i.changeDir();
  //       i.killDot(id);
  //     });
  //   };

  /*  const refreshDots = () => {
    dotsList.forEach((i, id) => {
      i.redrawDot();
      i.moveDot();
      i.changeDir();
      i.killDot(id);
    });
  }; */

  //   const loop = () => {
  //     drawRect(config.bgFillColor, 0, 0, cw, ch, 0, 0, `normal`);
  //     addDot();
  //     refreshDots();

  //     requestAnimationFrame(loop);
  //   };

  //   loop();

  console.log("render");
  return (
    <div className="bg">
      <canvas ref={canvasBG2} className="bg2__canvas"></canvas>
    </div>
  );
};

export default BG2;
