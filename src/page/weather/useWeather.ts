import { useState } from 'react';

export default function useWeather() {
	const [forecastUrl, setForecastUrl] = useState('');

	return { forecastUrl, setForecastUrl };
}
