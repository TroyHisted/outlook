import React from 'react';
import Weather from '../weather/Weather';

export default (props: {
	getLocation: () => void;
	locationDescription: string;
	latitude: number;
	longitude: number;
}) => (
	<>
		<button
			onClick={props.getLocation}
			className="pure-button pure-button-primary"
		>
			Get Current Location
		</button>
		<p>Current location: {props.locationDescription}</p>
		{props.latitude !== 0 && props.longitude !== 0 && (
			<Weather latitude={props.latitude} longitude={props.longitude} />
		)}
	</>
);
