import React from "react";

const GamePad = () => {
  return (
    <div>
      <div className="movement">
        <div className="left">
          <div className="triangle"></div>
        </div>
        <div className="right">
          <div className="triangle"></div>
        </div>
        <div className="up">
          <div className="triangle"></div>
        </div>
        <div className="down">
          <div className="triangle"></div>
        </div>
        <div className="circle">
          <div className="small-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default GamePad;
