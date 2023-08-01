import Location from './Location';
import Currently from './Currently';
import useLocation from './useLocation';
import useForecast from './useForecast';
import SevenDayForecast from './SevenDayForecast';
import SinglePeriodForecast from './SinglePeriodForecast';
import usePoints from './usePoints';

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

	if (locationLoadingStatus !== 'Loaded') {
		return (
			<Location
				getLocation={getLocation}
				error={locationError}
				loadingStatus={locationLoadingStatus}
			/>
		);
	}

	if (forecastLoadingStatus === 'Loaded') {
		return (
			<>
				<Currently />
				<SinglePeriodForecast forecast={forecast} />
				<SevenDayForecast forecast={forecast} />
			</>
		);
	}
};
