import React from 'react';

export default () => (
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
);
