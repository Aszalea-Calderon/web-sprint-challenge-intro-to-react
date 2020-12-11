import React, { useState, useEffect } from "react";
import DarkBlueBar from "./DarkBlueBar";
import LargeLights from "./LargeLights";
import SmallColoredLights from "./SmallColoredLights";
import PhotoDisplay from "./PhotoDisplay";
import Gamepad from "./GamePad";
import RandomGenerator from "./RandomGenerator";
import InfoDisplay from "./InfoDisplay";
import Buttons from "./Buttons";
import axios from "axios";

const initialState = {
	name: "",
	height: -1,
	weight: -1,
	base: -1,
	type: "",
	urlToUse: "",
}



const Pokedex = () => {
	const [name, setName] = useState([]);
	const [height, setHeight] = useState([]);
	const [weight, setWeight] = useState([]);
	const [base, setBase] = useState([]);
	const [type, setType] = useState([]);

	const [search, setSearch] = useState("pikachu");
	const [pokemon, setPokemon] = useState(initialState);
	const [loading, setLoading] = useState(true);

	// const [types, setTypes] = useState([]);
	// const [photo, setPhoto] = useState[[]];

	const change = (event) => {
		const { value } = event.target;
		setSearch(value.toLowerCase());
		// console.log(search);
	};

	const hgmToLbs = (hectograms) => {
		return hectograms / 4.536;
	}
	const dmToFt = (decimeters) => {
		return decimeters / 3.048;
	}


	const findUrlToUse = (sprites) => {
		let urlToUse;
		if (sprites.versions["generation-v"]["black-white"].animated["front_default"]) {
			urlToUse = sprites.versions["generation-v"]["black-white"].animated["front_default"];
		} else {
			urlToUse = sprites["front_default"];
		}
		return urlToUse;
	}

	useEffect(() => {
		if (loading) {
			axios
				// .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
				.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
				.then((res) => {
					// const { forms, sprites, height, weight, base_experience, types } = res.data;
					const { data } = res;
					setPokemon({
						...pokemon,
						name: data.forms[0].name,
						height: dmToFt(data.height),
						weight: hgmToLbs(data.weight),
						base: data["base_experience"],
						type: data.types[0].type.name,
						urlToUse: findUrlToUse(data.sprites)
					});
				})
				.catch((err) => {
					console.error(err, "error");
				});
		}
		setLoading(false);
	}, [loading]);

	//onSubmit we are preventing the default reload of the page, setting
	const submit = (e) => {
		e.preventDefault();
		setLoading(true);
	}

	// const submit = (e) => {
	// 	e.preventDefault();
	// 	// setDidSearch(true);
	// 	console.log("submitted!");

	// 	axios
	// 		.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
	// 		.then((res) => {
	// 			setName(res.data.forms[0].name);
	// 			setHeight(res.data.height);
	// 			setWeight(res.data.weight);
	// 			setBase(res.data.base_experience);
	// 			setType(res.data.types[0].type.name);
	// 			// setPhoto(
	// 			//   res.data.sprites.versions["generation-v"]["black-white"].animated
	// 			//     .front_default
	// 			// );
	// 		})
	// 		.catch((err) => {
	// 			console.error(err, "error");
	// 		});
	// };

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
							<PhotoDisplay url={pokemon.urlToUse} /> {/*photo={photo} />*/}
							{/*
							 <PhotoDisplay url={someState} /> 
							*/}
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
								pokemon={pokemon}
							// name={name}
							// height={height}
							// weight={weight}
							// base={base}
							// type={type}
							/>
							<button className="screen"></button>

							<div>
								{/* <form onSubmit={submit}> */}
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
