import React from "react";
import "./App.css";
import "./style/pokedex.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      {" "}
      <div class="box">
        <div class="pokedex">
          <div class="outer">
            <div class="top-layer1">
              <div class="layer1"></div>
              <div class="layer2"></div>
              <div class="layer3"></div>
            </div>
            <div class="top-layer">
              <div class="layer1"></div>
              <div class="layer2"></div>
              <div class="layer3"></div>
            </div>

            <div class="top-lights">
              <div class="inner-light"></div>
            </div>

            <div class="lights">
              <button class="red-light"></button>
              <button class="yellow-light"></button>
              <button class="green-light"></button>
            </div>

            <div class="main-border">
              <div class="display d1"></div>
              <div class="display">
                <div class="indicators">
                  <div class="light"></div>
                  <div class="light"></div>
                </div>
                <div class="screen"></div>
                <div class="power-light"></div>
                <div class="stripes">
                  <div class="stripe"></div>
                  <div class="stripe"></div>
                  <div class="stripe"></div>
                  <div class="stripe"></div>
                  <div class="stripe"></div>
                </div>
                {/* <!-- end of display --> */}
              </div>

              <div class="power-button"></div>
              <div class="lights">
                <div class="light-indi red"></div>
                <div class="light-indi blue"></div>
              </div>
              <button class="green-box">Search</button>
              {/* Game pad */}
              <div class="movement">
                <div class="left">
                  <div class="triangle"></div>
                </div>
                <div class="right">
                  <div class="triangle"></div>
                </div>
                <div class="up">
                  <div class="triangle"></div>
                </div>
                <div class="down">
                  <div class="triangle"></div>
                </div>
                <div class="circle">
                  <div class="small-circle"></div>
                </div>
              </div>
              {/* <!-- end of main-border --> */}
            </div>
            <div class="main-border3"></div>
            <div class="main-border2"></div>

            <div class="cylinder-before"></div>
            <div class="cylinder"></div>

            {/* <!-- end of outer --> */}
          </div>
          <div class="cylinder-after"></div>
          <div class="flip">
            <div class="main-border">
              <div class="screen"></div>
              <div class="screen"></div>
              <div class="screen"></div>
              <div class="blue-buttons under">
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
              </div>
              <div class="blue-buttons">
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
                <div class="btn"></div>
              </div>

              <div class="white-button under2">
                <div class="btn"></div>
                <div class="btn"></div>
              </div>
              <div class="white-button">
                <div class="btn"></div>
                <div class="btn"></div>
              </div>
              <div class="lights">
                <div class="light-indi"></div>
                <div class="light-indi"></div>
              </div>

              <div class="golden-button"></div>
              {/* <!-- end of main border --> */}
            </div>
            <div class="main-border3"></div>
            <div class="main-border2"></div>
            {/* <!-- end of flip --> */}
            <div class="flip3"></div>
            <div class="flip2"></div>
          </div>

          {/* <!-- end of pokedex --> */}
        </div>

        {/* <!-- end of box --> */}
      </div>
    </>
  );
};

export default App;
