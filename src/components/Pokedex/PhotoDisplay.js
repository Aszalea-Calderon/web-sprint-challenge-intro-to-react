import React from "react";
import PhotoScreen from "./PhotoScreen";

const PhotoDisplay = () => {
  return (
    <>
      <div className="display">
        <div className="indicators">
          <div className="light"></div>
          <div className="light"></div>
        </div>
        <PhotoScreen />
        <div className="power-light"></div>
        <div className="stripes">
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
          <div className="stripe"></div>
        </div>
      </div>
    </>
  );
};

export default PhotoDisplay;
