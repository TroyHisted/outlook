import type { Forecast } from './types/Forecast';

// https://weather-gov.github.io/api/general-faqs
export default (props: { weatherDescription: string; forecast: Forecast }) => (
	<>
		<p>Current Weather: {props.weatherDescription}</p>
		{props.forecast && (
			<div>
				{props.forecast.properties.periods.map((period) => (
					<div key={period.startTime}>
						{period.startTime}
						{period.endTime}
						{period.detailedForecast}
					</div>
				))}
			</div>
		)}
	</>
);
