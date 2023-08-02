import { Forecast } from './types/Forecast';

type SinglePeriodForecast = {
	timeOfDay: string;
	timeSuffix: string;
	dayOfWeek: string;
	isDaytime: boolean;
	temperature: string;
	temperatureUnit: string;
	precipitation: string;
	humidity: string;
	wind: string;
	windUnit: string;
	icon: string;
	summary: string;
};

export default function useCurrently(forecast: Forecast) {
	const hourlyForecast: SinglePeriodForecast[] =
		forecast.properties.periods.map((period) => {
			let temp = period.temperature.value;
			if (period.temperature.unitCode === 'wmoUnit:degC') {
				temp = (temp * 9) / 5 + 32;
			}

			const precipitation = period.probabilityOfPrecipitation.value;

			let wind;
			if (period.windSpeed.minValue) {
				wind = `${period.windSpeed.minValue.toFixed(
					0
				)}-${period.windSpeed.maxValue.toFixed(0)}`;
			} else if (period.windSpeed.value) {
				wind = `${period.windSpeed.value.toFixed(0)}`;
			} else {
				wind = '--';
			}

			const startTime = new Date(period.startTime);
			const startTimeHour = startTime.getHours();

			return {
				timeOfDay: `${startTimeHour % 12}`,
				timeSuffix: startTimeHour > 11 ? 'pm' : 'am',
				dayOfWeek: startTime.toLocaleDateString('en-us', {
					weekday: 'long',
				}),
				isDaytime: period.isDaytime,
				humidity: `${period.relativeHumidity.value}`,
				icon: '',
				precipitation:
					precipitation === null ? '--' : `${precipitation}`,
				summary: period.shortForecast,
				temperature: `${temp.toFixed(0)}`,
				temperatureUnit: '°F',
				wind,
				windUnit: 'mph',
			};
		});

	return { hourlyForecast };
}
