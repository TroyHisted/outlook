import React from 'react';
import Location from './Location';
import SevenDayForecast from './SevenDayForecast';
import Currently from './Currently';
import SinglePeriodForecast from './SinglePeriodForecast';

export default () => (
	<>
		<Location />
		<Currently />
		<SinglePeriodForecast />
		<SevenDayForecast />
	</>
);
