import React, { useState } from 'react';
import Weather from '../weather/Weather';

type Geolocation = {
	coords: {
		latitude: number;
		longitude: number;
	};
};

export default function Location() {
	const [locationDescription, setLocationDescription] = useState('unknown');
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	const locationFound = (position: Geolocation) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		setLatitude(lat);
		setLongitude(lon);
		setLocationDescription(`Latitude: ${lat} °, Longitude: ${lon} °`);
	};

	const locationNotFound = () => {
		setLocationDescription('Could not determine location');
	};

	const getLocation = () => {
		setLocationDescription('loading...');
		navigator.geolocation.getCurrentPosition(
			locationFound,
			locationNotFound
		);
	};

	return (
		<>
			<button
				onClick={getLocation}
				className="pure-button pure-button-primary"
			>
				Get Current Location
			</button>
			<p>Current location: {locationDescription}</p>
			{latitude !== 0 && longitude !== 0 && (
				<Weather latitude={latitude} longitude={longitude} />
			)}
		</>
	);
}
