import React from "react";

const PhotoScreen = (props) => {
	return (
		<div>
			<section className="screen">


				<img src={props.url ?? props.backup} alt={props.url ? "primary" : "backup"} />

			</section>
		</div>
	);
};

export default PhotoScreen;
