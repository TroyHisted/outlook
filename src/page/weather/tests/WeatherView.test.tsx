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
						generatedAt: '2020-01-01T00:00:00+0',
						units: 'us',
						updateTime: '2020-01-01T00:00:00+0',
						periods: [
							{
								number: 0,
								name: 'Tonight',
								startTime: '2020-01-01T00:00:00+0',
								endTime: '2020-01-01T00:00:00+0',
								isDaytime: true,
								temperature: {
									value: 72,
									unitCode: 'wmoUnit:degC',
								},
								TemperatureTrend: null,
								probabilityOfPrecipitation: {
									unitCode: 'wmoUnit:percent',
									value: 45,
								},
								relativeHumidity: {
									unitCode: 'wmoUnit:percent',
									value: 75,
								},
								windDirection: 'E',
								windSpeed: {
									maxValue: 15,
									minValue: 5,
									unitCode: 'wmoUnit:km_h-1',
								},
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
