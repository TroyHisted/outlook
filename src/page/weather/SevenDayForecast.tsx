import { Forecast } from './types/Forecast';
import useSevenDayForecast from './useSevenDayForecast';

export default (props: { forecast: Forecast }) => {
	const { periodForecasts } = useSevenDayForecast(props.forecast);
	return (
		<article>
			<header className="headings">
				<h2>7 Day Forecast</h2>
				<h3>Feb 3rd - Feb 10th</h3>
			</header>

			<table role="grid">
				<thead>
					<tr>
						<th scope="col"></th>
						<th scope="col"></th>
						<th scope="col">
							<div>
								<i className="thermometer" />
							</div>
							<sub>
								<small>Temp</small>
							</sub>
						</th>
						<th scope="col">
							<div>
								<i className="rain-cloud" />
							</div>
							<sub>
								<small>Precip</small>
							</sub>
						</th>
						<th scope="col">
							<div>
								<i className="wind" />
							</div>
							<sub>
								<small>MPH</small>
							</sub>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr></tr>
					{periodForecasts.map((forecast, index) => (
						<tr>
							{(forecast.isDaytime && index < 13 && (
								<th scope="row" rowSpan={2}>
									{forecast.dayOfWeek}
								</th>
							)) ||
								((index === 0 || index === 13) && (
									<th scope="row">{forecast.dayOfWeek}</th>
								))}
							<td>{forecast.summary}</td>
							<td>
								{forecast.temperature}
								<dfn>{forecast.temperatureUnit}</dfn>
							</td>
							<td>
								{forecast.precipitation}
								{forecast.precipitation !== '--' && (
									<dfn>%</dfn>
								)}
							</td>
							<td>
								{forecast.wind}
								<dfn>{forecast.windUnit}</dfn>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	);
};
