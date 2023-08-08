import { useEffect } from 'react';
import type { Points } from './types/Points';
import useApi from '../../api/useApi';

// https://weather-gov.github.io/api/general-faqs
export default function usePoints(props: {
	/** Latitude in degrees. */
	latitude: number;
	/** Longitude in degrees. */
	longitude: number;
}) {
	const pointsApi = useApi<Points, { latitude: string; longitude: string }>(
		'https://api.weather.gov/points/{latitude},{longitude}'
	);

	useEffect(() => {
		if (props.latitude && props.longitude) {
			pointsApi.get({
				latitude: props.latitude.toFixed(3),
				longitude: props.longitude.toFixed(3),
			});
		}
	}, [props.latitude, props.longitude]);

	return {
		loadingStatus: pointsApi.loadingStatus,
		error: pointsApi.error,
		points: pointsApi.data,
	};
}
