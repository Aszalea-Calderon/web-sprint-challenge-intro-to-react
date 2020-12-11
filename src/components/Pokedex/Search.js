import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
 
  //once you use this,
  //Set up search function, set didSearch to true when they searched, useEffect  will fire, and inside this we then set up axios  call here.. check if didSearch is true, BEFORE firing, so that it wont go forever. at the end of the call set didSearch to be false.

  //When we click search make an axios call to that name

  //option
  //filters, preset with checkboxes, to look through the data. go to react doc's as well.

  return (
   
  );
};

export default Search;

//set state using form validationesque
//The end points can be set up by pokemon name
//Set hard endpoint with https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1118
//Have list of names in my back end,

//take in data via the setstate, putting in t
// https://pokeapi.co/api/v2/pokemon/${}
