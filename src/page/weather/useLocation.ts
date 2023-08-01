import { useEffect, useState } from 'react';
import { LoadingStatus } from './types/LoadingStatus';

type Geolocation = {
	coords: {
		latitude: number;
		longitude: number;
	};
};

const StorageKey = {
	latitude: 'latitude',
	longitude: 'longitude',
};

export default function useLocation() {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatus>('NotLoaded');
	const [error, setError] = useState<string>();
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	const locationFound = (position: Geolocation) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		setLatitude(lat);
		setLongitude(lon);
		localStorage.setItem(StorageKey.latitude, `${lat}`);
		localStorage.setItem(StorageKey.longitude, `${lon}`);
		setLoadingStatus('Loaded');
		setError(undefined);
	};

	const locationNotFound = () => {
		setLoadingStatus('NotLoaded');
		setError('Could not determine location');
	};

	const getLocation = () => {
		setLoadingStatus('Loading');
		navigator.geolocation.getCurrentPosition(
			locationFound,
			locationNotFound
		);
	};

	useEffect(() => {
		const storedLatitude = localStorage.getItem(StorageKey.latitude);
		const storedLongitude = localStorage.getItem(StorageKey.longitude);
		if (storedLatitude && storedLongitude) {
			locationFound({
				coords: {
					latitude: Number.parseFloat(storedLatitude),
					longitude: Number.parseFloat(storedLongitude),
				},
			});
		}
	}, []);

	return {
		loadingStatus,
		error,
		getLocation,
		latitude,
		longitude,
	};
}
