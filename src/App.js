import React from "react";
import "./App.css";
import "./style/pokedex.css";
import Pokedex from "./components/Pokedex/Pokedex";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //Things to do
  //Make starting call via search bar
  //set the data coming in

  return (
    <>
      <Pokedex />
    </>
  );
};

export default App;
