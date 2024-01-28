import { Forecast } from './types/Forecast';
import useCurrently from './useCurrently';

export default (props: { hourlyForecast: Forecast }) => {
	const { hourlyForecast } = useCurrently(props.hourlyForecast);
	console.log(props.hourlyForecast);
	return (
		<article>
			<header className="headings">
				<h2>
					Currently 49
					<dfn>°F</dfn>
				</h2>
				<h3>
					<i className="rain-cloud" /> Rain
				</h3>
			</header>
			<div className="grid">
				<dl>
					<dt>Humidity</dt>
					<dd>
						92<dfn>%</dfn>
					</dd>
					<dt>Dewpoint</dt>
					<dd>
						69<dfn>°F</dfn>
					</dd>
					<dt>Barometer</dt>
					<dd>
						29.91<dfn>in</dfn>
					</dd>
				</dl>
				<dl>
					<dt>Visibility</dt>
					<dd>
						10.00<dfn>mi</dfn>
					</dd>
					<dt>Wind</dt>
					<dd>
						7<dfn>mph</dfn>
					</dd>
					<dt>Direction</dt>
					<dd>
						<i className="compass-w" title="West" />
					</dd>
				</dl>
			</div>
			<div className="grid">
				<div>
					<table>
						<thead>
							<tr>
								<th scope="col" colSpan={2}>
									<div>Hourly</div>
									<sub>
										<small>
											{hourlyForecast[0].dayOfWeek}
										</small>
									</sub>
								</th>
								<th scope="col">
									<small>Temperature</small>
									<div>
										<i className="thermometer" />
									</div>
								</th>
								<th scope="col">
									<small>Precipitation</small>
									<div>
										<i className="rain-cloud" />
									</div>
								</th>
								<th scope="col">
									<small>Humidity</small>
									<div>
										<i className="humidity" />
									</div>
								</th>
								<th scope="col">
									<small>Wind</small>
									<div>
										<i className="wind" />
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr></tr>
							{hourlyForecast.map((forecast) => (
								<>
									{forecast.timeOfDay === '1' &&
										forecast.timeSuffix === 'am' && (
											<tr>
												<th scope="row" colSpan={2}>
													<strong>
														{forecast.dayOfWeek}
													</strong>
												</th>
												<th scope="col">
													<small>
														<i className="thermometer" />
													</small>
												</th>
												<th scope="col">
													<small>
														<i className="rain-cloud" />
													</small>
												</th>
												<th scope="col">
													<small>
														<i className="humidity" />
													</small>
												</th>
												<th scope="col">
													<small>
														<i className="wind" />
													</small>
												</th>
											</tr>
										)}
									<tr>
										<th scope="row">
											{(forecast.timeOfDay === '0' &&
												forecast.timeSuffix ===
													'am' && (
													<small>midnight</small>
												)) ||
												(forecast.timeOfDay === '0' &&
													forecast.timeSuffix ===
														'pm' && (
														<small>noon</small>
													)) || (
													<>
														{forecast.timeOfDay}
														<dfn>
															{
																forecast.timeSuffix
															}
														</dfn>
													</>
												)}
										</th>
										<td></td>
										<td>
											{forecast.temperature}
											<dfn>
												{forecast.temperatureUnit}
											</dfn>
										</td>
										<td>
											{forecast.precipitation}
											{forecast.precipitation !==
												'--' && <dfn>%</dfn>}
										</td>
										<td>
											{forecast.humidity}
											<dfn>%</dfn>
										</td>
										<td>
											{forecast.wind}
											<dfn>{forecast.windUnit}</dfn>
										</td>
									</tr>
								</>
							))}
						</tbody>
					</table>
				</div>
				<div>
					<figure>
						<img src="https://radar.weather.gov/ridge/standard/KGRR_0.gif" />
						<label htmlFor="range">
							Time
							<input
								type="range"
								min="1"
								max="5"
								value="1"
								id="range"
								name="range"
							/>
						</label>
					</figure>
				</div>
			</div>
		</article>
	);
};
