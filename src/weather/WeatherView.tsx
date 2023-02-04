import React from 'react';
import type { Forecast } from './types/Forecast';

// https://weather-gov.github.io/api/general-faqs
export default (props: { weatherDescription: string; forecast: Forecast }) => (
	<>
		<p>Current Weather: {props.weatherDescription}</p>
		{props.forecast && (
			<img
				src={props.forecast.properties.periods[0].icon}
				title={props.forecast.properties.periods[0].shortForecast}
			/>
		)}
	</>
);
