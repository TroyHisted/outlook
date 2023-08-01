import { useEffect, useState } from 'react';
import type { Forecast } from './types/Forecast';
import type { Points } from './types/Points';
import { LoadingStatus } from './types/LoadingStatus';

// https://weather-gov.github.io/api/general-faqs
export default function useForecast(props: {
	/** Latitude in degrees. */
	latitude: number;
	/** Longitude in degrees. */
	longitude: number;
}) {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatus>('NotLoaded');
	const [error, setError] = useState<string>();
	const [forecastUrl, setForecastUrl] = useState('');
	const [forecast, setForecast] = useState<Forecast>();

	const fetchPointData = async () => {
		setLoadingStatus('Loading');
		const response = await fetch(
			`https://api.weather.gov/points/${props.latitude.toFixed(
				3
			)},${props.longitude.toFixed(3)}`
		);
		if (response.status === 200) {
			const points: Points = await response.json();
			setForecastUrl(points.properties.forecast);
		} else {
			setLoadingStatus('NotLoaded');
			setError('Failed lookup');
		}
	};

	const fetchForecast = async () => {
		const response = await fetch(`${forecastUrl}?units=us`, {
			headers: {
				'Feature-Flags':
					'forecast_temperature_qv,forecast_wind_speed_qv',
			},
		});
		if (response.status === 200) {
			const f: Forecast = await response.json();
			setForecast(f);
			setLoadingStatus('Loaded');
			setError(undefined);
		} else {
			setLoadingStatus('NotLoaded');
			setError('Failed lookup');
		}
	};

	useEffect(() => {
		fetchForecast();
	}, [forecastUrl]);

	useEffect(() => {
		if (props.latitude && props.longitude) {
			fetchPointData();
		}
	}, [props.latitude, props.longitude]);

	return {
		loadingStatus,
		error,
		forecast,
	};
}
