import React from 'react';

export default () => (
	<>
		<article>
			<div className="grid">
				{/* <form>
					<input
						type="search"
						id="location"
						name="location"
						placeholder="Lookup by Zip / City"
					/>
				</form> */}
				<div>
					<button>Use Current Location</button>
				</div>
			</div>
		</article>
		<section>
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
										Hourly
									</th>
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
											<i className="humidity" />
										</div>
										<sub>
											<small>Humid</small>
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
								<tr>
									<th scope="row">
										10
										<dfn>am</dfn>
									</th>
									<td>
										<i className="cloud" />
									</td>
									<td>
										46
										<dfn>°F</dfn>
									</td>
									<td>
										80<dfn>%</dfn>
									</td>
									<td>
										89<dfn>%</dfn>
									</td>
									<td>9-16</td>
								</tr>
								<tr>
									<th scope="row">
										10
										<dfn>am</dfn>
									</th>
									<td>
										<i className="cloud" />
									</td>
									<td>
										55
										<dfn>°F</dfn>
									</td>
									<td>
										90<dfn>%</dfn>
									</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
								<tr>
									<th scope="row">
										11
										<dfn>am</dfn>
									</th>
									<td>
										<i className="sun-cloud" />
									</td>
									<td>
										56
										<dfn>°F</dfn>
									</td>
									<td>
										20<dfn>%</dfn>
									</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
								<tr>
									<th scope="row">
										12
										<dfn>am</dfn>
									</th>
									<td>
										<i className="sun" />
									</td>
									<td>
										56
										<dfn>°F</dfn>
									</td>
									<td>--</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
								<tr>
									<th scope="row">
										1<dfn>pm</dfn>
									</th>
									<td>
										<i className="rain-cloud" />
									</td>
									<td>
										56
										<dfn>°F</dfn>
									</td>
									<td>--</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
								<tr>
									<th scope="row">
										2<dfn>pm</dfn>
									</th>
									<td>
										<i className="rain-cloud" />
									</td>
									<td>
										56
										<dfn>°F</dfn>
									</td>
									<td>
										20<dfn>%</dfn>
									</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
								<tr>
									<th scope="row">
										3<dfn>pm</dfn>
									</th>
									<td>
										<i className="rain-cloud" />
									</td>
									<td>
										56
										<dfn>°F</dfn>
									</td>
									<td>
										20<dfn>%</dfn>
									</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
								<tr>
									<th scope="row">
										4<dfn>pm</dfn>
									</th>
									<td>
										<i className="rain-cloud" />
									</td>
									<td>
										56
										<dfn>°F</dfn>
									</td>
									<td>
										20<dfn>%</dfn>
									</td>
									<td>
										59<dfn>%</dfn>
									</td>
									<td>5-10</td>
								</tr>
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
		</section>

		<section className="grid">
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
		</section>
		<section>
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
									<i className="humidity" />
								</div>
								<sub>
									<small>Humid</small>
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
						<tr>
							<th scope="row" rowSpan={2}>
								Sat
							</th>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Light Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<th scope="row" rowSpan={2}>
								Sun
							</th>
							<td>Party Cloudy</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<th scope="row" rowSpan={2}>
								Mon
							</th>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<th scope="row" rowSpan={2}>
								Tue
							</th>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<th scope="row" rowSpan={2}>
								Wed
							</th>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<th scope="row" rowSpan={2}>
								Thu
							</th>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<th scope="row" rowSpan={2}>
								Fri
							</th>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
						<tr>
							<td>Rain</td>
							<td>
								46
								<dfn>°F</dfn>
							</td>
							<td>
								80<dfn>%</dfn>
							</td>
							<td>
								89<dfn>%</dfn>
							</td>
							<td>9-16</td>
						</tr>
					</tbody>
				</table>
			</article>
		</section>
	</>
);
