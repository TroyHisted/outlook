import { useEffect } from 'react';
import type { Forecast } from './types/Forecast';
import type { Points } from './types/Points';
import useApi from '../../api/useApi';

// https://weather-gov.github.io/api/general-faqs
export default function useHourlyForecast(props: { points?: Points }) {
	const forecastApi = useApi<Forecast, { units: 'us' }>('', {
		headers: {
			'Feature-Flags': 'forecast_temperature_qv,forecast_wind_speed_qv',
		},
	});

	useEffect(() => {
		if (props.points?.properties?.forecastHourly) {
			forecastApi.getUrl(props.points.properties.forecastHourly, {
				units: 'us',
			});
		}
	}, [props.points]);

	return {
		loadingStatus: forecastApi.loadingStatus,
		error: forecastApi.error,
		hourlyForecast: forecastApi.data,
	};
}
