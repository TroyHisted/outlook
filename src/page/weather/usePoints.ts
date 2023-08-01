import { useEffect, useState } from 'react';
import type { Points } from './types/Points';
import { LoadingStatus } from './types/LoadingStatus';

// https://weather-gov.github.io/api/general-faqs
export default function usePoints(props: {
	/** Latitude in degrees. */
	latitude: number;
	/** Longitude in degrees. */
	longitude: number;
}) {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatus>('NotLoaded');
	const [error, setError] = useState<string>();
	const [points, setPoints] = useState<Points>();

	const fetchPointData = async () => {
		setLoadingStatus('Loading');
		const response = await fetch(
			`https://api.weather.gov/points/${props.latitude.toFixed(
				3
			)},${props.longitude.toFixed(3)}`
		);
		if (response.status === 200) {
			const points: Points = await response.json();
			setPoints(points);
			setError(undefined);
			setLoadingStatus('Loaded');
		} else {
			setLoadingStatus('NotLoaded');
			setError('Failed lookup');
		}
	};

	useEffect(() => {
		if (props.latitude && props.longitude) {
			fetchPointData();
		}
	}, [props.latitude, props.longitude]);

	return {
		loadingStatus,
		error,
		points,
	};
}
