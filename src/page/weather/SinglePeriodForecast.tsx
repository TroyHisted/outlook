import { Forecast } from './types/Forecast';
import useSinglePeriodForecast from './useSinglePeriodForecast';

export default (props: { forecast: Forecast }) => {
	const { forecast: f } = useSinglePeriodForecast(props.forecast);
	console.log('f', f);
	return (
		<div className="grid">
			<article>
				<header className="headings">
					<h2>
						Today 55
						<dfn>°F</dfn>
					</h2>
					<h3>
						<i className="rain-cloud" /> Rain
					</h3>
				</header>
				<div className="grid">
					<div>
						<h6>
							<i className="rain-cloud" /> 90% precipitation
						</h6>
					</div>
					<div>
						<h6>
							<i className="humidity" /> 74% Humidity
						</h6>
					</div>
					<div>
						<h6>
							<i className="wind" /> 9 to 14 mph wind
						</h6>
					</div>
				</div>
				Rain. Cloudy, with a high near 55. East northeast wind 9 to 14
				mph, with gusts as high as 30 mph. Chance of precipitation is
				90%. New rainfall amounts between a quarter and half of an inch
				possible.
			</article>
			<article>
				<header className="headings">
					<h2>
						Tonight 46
						<dfn>°F</dfn>
					</h2>
					<h3>
						<i className="rain-cloud" /> Rain Likely
					</h3>
				</header>
				<div className="grid">
					<div>
						<h6>
							<i className="rain-cloud" /> 60% precipitation
						</h6>
					</div>
					<div>
						<h6>
							<i className="humidity" /> 89% Humidity
						</h6>
					</div>
					<div>
						<h6>
							<i className="wind" /> 9 to 16 mph wind
						</h6>
					</div>
				</div>
				Rain likely. Mostly cloudy, with a high near 61. West southwest
				wind around 12 mph. Chance of precipitation is 60%. New rainfall
				amounts between a tenth and quarter of an inch possible.
			</article>
		</div>
	);
};
