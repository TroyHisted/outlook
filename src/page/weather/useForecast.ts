import { useEffect, useState } from 'react';
import type { Forecast } from './types/Forecast';
import type { Points } from './types/Points';
import { LoadingStatus } from './types/LoadingStatus';

// https://weather-gov.github.io/api/general-faqs
export default function useForecast(props: { points?: Points }) {
	const [loadingStatus, setLoadingStatus] =
		useState<LoadingStatus>('NotLoaded');
	const [error, setError] = useState<string>();
	const [forecast, setForecast] = useState<Forecast>();

	const fetchForecast = async (points: Points) => {
		setLoadingStatus('Loading');
		const forecastUrl = points.properties.forecast;
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
		fetchForecast(props.points);
	}, [props.points]);

	return {
		loadingStatus,
		error,
		forecast,
	};
}
