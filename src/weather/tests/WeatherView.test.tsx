import renderer from 'react-test-renderer';
import WeatherView from '../WeatherView';

test('renders correctly with no forecast', () => {
	const tree = renderer
		.create(<WeatherView forecast={undefined} weatherDescription="" />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

test('renders correctly with a forecast', () => {
	const tree = renderer
		.create(
			<WeatherView
				forecast={{
					properties: {
						updated: '2020-01-01T00:00:00+0',
						periods: [
							{
								number: 0,
								name: 'Tonight',
								startTime: '2020-01-01T00:00:00+0',
								endTime: '2020-01-01T00:00:00+0',
								isDaytime: true,
								temperature: 72,
								temperatureUnit: 'F',
								TemperatureTrend: 'steady',
								windSpeed: '10 mph',
								windDirection: 'e',
								icon: 'clouds.png',
								shortForecast: 'Partly Cloudy',
								detailedForecast:
									'Partly Cloudy with a chance of meatballs.',
							},
						],
					},
				}}
				weatherDescription="Partly Cloudy"
			/>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
