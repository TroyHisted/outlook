import { useState } from 'react';
import LocationView from './LocationView';

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

	return LocationView({
		locationDescription,
		getLocation,
		latitude,
		longitude,
	});
}
