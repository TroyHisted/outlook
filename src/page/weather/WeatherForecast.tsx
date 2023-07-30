import { useEffect, useState } from 'react';
import WeatherView from './WeatherView';
import type { Forecast } from './types/Forecast';
import type { Points } from './types/Points';

// https://weather-gov.github.io/api/general-faqs
export default function Weather(props: {
	/** Latitude in degrees. */
	latitude: number;
	/** Longitude in degrees. */
	longitude: number;
}) {
	const [weatherDescription, setWeatherDescription] = useState('unknown');
	const [forecastUrl, setForecastUrl] = useState('');
	const [forecast, setForecast] = useState<Forecast>();

	const fetchPointData = async () => {
		setWeatherDescription('loading...');

		const response = await fetch(
			`https://api.weather.gov/points/${props.latitude.toFixed(
				3
			)},${props.longitude.toFixed(3)}`
		);
		if (response.status === 200) {
			const points: Points = await response.json();
			setForecastUrl(points.properties.forecast);
		} else {
			setWeatherDescription('Failed lookup');
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
			setWeatherDescription(f.properties.periods[0].detailedForecast);
			setForecast(f);
		} else {
			setWeatherDescription('Failed lookup');
		}
	};

	useEffect(() => {
		fetchForecast();
	}, [forecastUrl]);

	useEffect(() => {
		fetchPointData();
	}, [props.latitude, props.longitude]);

	return WeatherView({
		forecast,
		weatherDescription,
	});
}
