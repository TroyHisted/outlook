import Location from './Location';
import Currently from './Currently';
import useLocation from './useLocation';
import useForecast from './useForecast';
import SevenDayForecast from './SevenDayForecast';
import SinglePeriodForecast from './SinglePeriodForecast';
import usePoints from './usePoints';
import useHourlyForecast from './useHourlyForecast';

export default () => {
	const {
		loadingStatus: locationLoadingStatus,
		latitude,
		longitude,
		getLocation,
		error: locationError,
	} = useLocation();
	const { points } = usePoints({
		latitude,
		longitude,
	});
	const { loadingStatus: forecastLoadingStatus, forecast } = useForecast({
		points,
	});
	const { loadingStatus: hourlyForecastLoadingStatus, hourlyForecast } =
		useHourlyForecast({ points });

	if (locationLoadingStatus !== 'Loaded') {
		return (
			<Location
				getLocation={getLocation}
				error={locationError}
				loadingStatus={locationLoadingStatus}
			/>
		);
	}

	return (
		<>
			{hourlyForecastLoadingStatus === 'Loading' && (
				<p>Loading Hourly Forecast</p>
			)}
			{hourlyForecastLoadingStatus === 'Loaded' && (
				<Currently hourlyForecast={hourlyForecast} />
			)}
			{forecastLoadingStatus === 'Loaded' && (
				<>
					<SinglePeriodForecast forecast={forecast} />
					<SevenDayForecast forecast={forecast} />
				</>
			)}
		</>
	);
};
