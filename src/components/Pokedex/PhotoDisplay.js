import React, { useEffect } from "react";
import PhotoScreen from "./PhotoScreen";

const PhotoDisplay = (props) => {
	useEffect(() => {
		console.log({ props });
	}, []);
	return (
		<>
			<div className="display">
				<div className="indicators">
					<div className="light"></div>
					<div className="light"></div>
				</div>
				{/* <p>{props.url}</p> */}
				<PhotoScreen url={props.url} />
				{/* <PhotoScreen url={props.url} /> */}
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
