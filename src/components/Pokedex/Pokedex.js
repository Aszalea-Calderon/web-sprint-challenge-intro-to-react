import React, { useState } from "react";
import DarkBlueBar from "./DarkBlueBar";
import LargeLights from "./LargeLights";
import SmallColoredLights from "./SmallColoredLights";
import PhotoDisplay from "./PhotoDisplay";
import Gamepad from "./GamePad";
import RandomGenerator from "./RandomGenerator";
import InfoDisplay from "./InfoDisplay";
import Buttons from "./Buttons";
import axios from "axios";

const Pokedex = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState([]);
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);
  const [base, setBase] = useState([]);
  const [type, setType] = useState([]);
  // const [types, setTypes] = useState([]);
  // const [photo, setPhoto] = useState[[]];

  const change = (event) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
    // console.log(search);
  };

  //onSubmit we are preventing the default reload of the page, setting
  const submit = (e) => {
    e.preventDefault();
    // setDidSearch(true);
    console.log("submitted!");

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        setName(res.data.forms[0].name);
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setBase(res.data.base_experience);
        setType(res.data.types[0].type.name);
        // setPhoto(
        //   res.data.sprites.versions["generation-v"]["black-white"].animated
        //     .front_default
        // );
      })
      .catch((err) => {
        console.error(err, "error");
      });
  };

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
              <PhotoDisplay /> {/*photo={photo} />*/}
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
              <InfoDisplay
                name={name}
                height={height}
                weight={weight}
                base={base}
                type={type}
              />
              <button className="screen"></button>

              <div>
                <form onSubmit={submit}>
                  <input
                    type="text"
                    name="searchBar"
                    value={search.name}
                    onChange={change}
                    id="search"
                    placeholder="Search Pokemon"
                    className="blue-buttons"
                  ></input>
                  <button className="searchButton" type="submit">
                    Search
                  </button>
                </form>
              </div>
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
