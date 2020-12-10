import React from "react";
import Search from "./Search";
import DarkBlueBar from "./DarkBlueBar";
import LargeLights from "./LargeLights";
import SmallColoredLights from "./SmallColoredLights";
import PhotoDisplay from "./PhotoDisplay";
import Gamepad from "./GamePad";
import RandomGenerator from "./RandomGenerator";
import InfoDisplay from "./InfoDisplay";
import Buttons from "./Buttons";

const Pokedex = () => {
  return (
    <div>
      <div className="box">
        <div className="pokedex">
          <div className="outer">
            <DarkBlueBar />
            <LargeLights />
            <SmallColoredLights />

            <div className="main-border">
              <div className="display d1"></div>
              <PhotoDisplay />

              <RandomGenerator />
              <Gamepad />
              {/* <!-- end of main-border --> */}
            </div>
            <div className="main-border3"></div>
            <div className="main-border2"></div>

            <div className="cylinder-before"></div>
            <div className="cylinder"></div>

            {/* <!-- end of outer --> */}
          </div>
          <div className="cylinder-after"></div>
          <div className="flip">
            <div className="main-border">
              <InfoDisplay />
              <button className="screen"></button>

              <Search />
              <Buttons />

              {/* <!-- end of main border --> */}
            </div>
            <div className="main-border3"></div>
            <div className="main-border2"></div>
            {/* <!-- end of flip --> */}
            <div className="flip3"></div>
            <div className="flip2"></div>
          </div>

          {/* <!-- end of pokedex --> */}
        </div>

        {/* <!-- end of box --> */}
      </div>
    </div>
  );
};

export default Pokedex;
