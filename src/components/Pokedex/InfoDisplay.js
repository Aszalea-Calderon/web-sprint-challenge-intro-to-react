import React from "react";

const InfoDisplay = (props) => {
  console.log(props, "props");
  return (
    <div>
      <section className="screen">
        <h4>Name: {props.name}</h4>
        <p>Height: {props.height}</p>
        <p>Weight:{props.weight}</p>
        <p>Base experience:{props.base}</p>
        <p>Types: {props.type}</p>
      </section>
    </div>
  );
};

export default InfoDisplay;
