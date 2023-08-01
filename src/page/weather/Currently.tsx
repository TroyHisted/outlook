export default () => (
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
);