import React from 'react';
import { createRoot } from 'react-dom/client';
import Location from './location/Location';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import './style.css';

function App() {
	return (
		<div className="pure-g">
			<div className="pure-u-lg-15-24 pure-u-md-15-24 pure-u-1">
				<div className="pure-g">
					<div className="pure-u-lg-1-2 pure-u-md-1-2 pure-u-1-2">
						<div className="box">
							<h2>Today 55° F</h2>
							<p>🌧 Light Rain</p>
							<p>90% 🌢</p>
							<p>74% Humidity</p>
							<p>9 to 14 mph wind</p>
							<p>
								Rain. Cloudy, with a high near 55. East
								northeast wind 9 to 14 mph, with gusts as high
								as 30 mph. Chance of precipitation is 90%. New
								rainfall amounts between a quarter and half of
								an inch possible.
							</p>
						</div>
					</div>
					<div className="pure-u-lg-1-2 pure-u-md-1-2 pure-u-1-2">
						<div className="box">
							<h2>🌧 Tonight</h2>
							<p>46° F</p>
							<p>precipitation: 80%</p>
							<p>humidity: 89%</p>
							<p>wind: 9 to 16 mph</p>
							<p>Rain</p>
							<p>
								Rain likely. Mostly cloudy, with a high near 61.
								West southwest wind around 12 mph. Chance of
								precipitation is 60%. New rainfall amounts
								between a tenth and quarter of an inch possible.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pure-u-lg-9-24 pure-u-md-9-24 pure-u-1">
				<div className="pure-g">
					<div className="pure-u-lg-1-2 pure-u-1">
						<div className="box">
							<h3>Saturday</h3>
							<p>46° F</p>
							<p>precipitation: 80%</p>
							<p>humidity: 89%</p>
							<p>wind: 9 to 16 mph</p>
							<p>Rain</p>
						</div>
					</div>
					<div className="pure-u-lg-1-2 pure-u-1">
						<div className="box">
							<h3>Saturday Night</h3>
							<p>46° F</p>
							<p>precipitation: 80%</p>
							<p>humidity: 89%</p>
							<p>wind: 9 to 16 mph</p>
							<p>Rain</p>
						</div>
					</div>
					<div className="pure-u-lg-1-2 pure-u-1">
						<div className="box">
							<h3>Sunday</h3>
							<p>46° F</p>
							<p>precipitation: 80%</p>
							<p>humidity: 89%</p>
							<p>wind: 9 to 16 mph</p>
							<p>Rain</p>
						</div>
					</div>
					<div className="pure-u-lg-1-2 pure-u-1">
						<div className="box">Day 4</div>
					</div>
					<div className="pure-u-lg-1-2 pure-u-1">
						<div className="box">Day 5</div>
					</div>
					<div className="pure-u-lg-1-2 pure-u-1">
						<div className="box">Day 6</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-8">
				<div className="box box-hourly">
					<div className="pure-g">
						<div className="pure-u-1-2 pure-u-md-1">
							☁ 10 AM Sunday
						</div>
						<div className="pure-u-1-4 pure-u-md-1-2">55° F</div>
						<div className="pure-u-1-4 pure-u-md-1-2">90% 🌢</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-8">
				<div className="box box-hourly">
					<div className="pure-g">
						<div className="pure-u-1-3">🌤 11 AM Sunday</div>
						<div className="pure-u-1-3">56° F</div>
						<div className="pure-u-1-3">20% 🌢</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-8">
				<div className="box box-hourly">
					<div className="pure-g">
						<div className="pure-u-1-3">☀ 12 AM Sunday</div>
						<div className="pure-u-1-3">56° F</div>
						<div className="pure-u-1-3">20% 🌢</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-8">
				<div className="box box-hourly">
					<div className="pure-g">
						<div className="pure-u-1-3">🌧 1 PM Sunday</div>
						<div className="pure-u-1-3">56° F</div>
						<div className="pure-u-1-3">20% 🌢</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-8">
				<div className="box box-hourly">
					<div className="pure-g">
						<div className="pure-u-1-3">🌧 1 PM Sunday</div>
						<div className="pure-u-1-3">56° F</div>
						<div className="pure-u-1-3">20% 🌢</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1 pure-u-md-1-8">
				<div className="box box-hourly">
					<div className="pure-g">
						<div className="pure-u-1-3">🌧 1 PM Sunday</div>
						<div className="pure-u-1-3">56° F</div>
						<div className="pure-u-1-3">20% 🌢</div>
					</div>
				</div>
			</div>
			<div className="pure-u-1">
				<div className="box">Monday</div>
			</div>
			<div className="pure-u-1">
				<div className="box">Tuesday</div>
			</div>
			<div className="pure-u-1">
				<div className="box">Wednesday</div>
			</div>
			<div className="pure-u-1">
				<div className="box">Thursday</div>
			</div>
			<div className="pure-u-1">
				<div className="box">Friday</div>
			</div>
			<div className="pure-u-1">
				Generated at: 2023-04-28T14:03:56+00:00
			</div>
		</div>
	);
}

const root = createRoot(document.body);
root.render(<App />);
