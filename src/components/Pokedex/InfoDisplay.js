import React from "react";

const InfoDisplay = (props) => {
	const { name, height, weight, base, type } = props.pokemon;
	console.log(props, "props");
	return (
		<div>
			<section className="screen">
				<h4>Name: {props.pokemon.name}</h4>
				<p>Height: {height}</p>
				<p>Weight:{weight}</p>
				<p>Base experience:{base}</p>
				<p>Types: {type}</p>
			</section>
		</div>
	);
};

export default InfoDisplay;
