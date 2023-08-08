import { useEffect } from 'react';
import type { Forecast } from './types/Forecast';
import type { Points } from './types/Points';
import useApi from '../../api/useApi';

// https://weather-gov.github.io/api/general-faqs
export default function useForecast(props: { points?: Points }) {
	const forecastApi = useApi<Forecast, { units: 'us' }>('', {
		headers: {
			'Feature-Flags': 'forecast_temperature_qv,forecast_wind_speed_qv',
		},
	});

	useEffect(() => {
		if (props.points?.properties?.forecast) {
			forecastApi.getUrl(props.points.properties.forecast, {
				units: 'us',
			});
		}
	}, [props.points]);

	return {
		loadingStatus: forecastApi.loadingStatus,
		error: forecastApi.error,
		forecast: forecastApi.data,
	};
}
