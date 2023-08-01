import Location from './Location';
import Currently from './Currently';
import useLocation from './useLocation';
import useForecast from './useForecast';
import SevenDayForecast from './SevenDayForecast';
import SinglePeriodForecast from './SinglePeriodForecast';

export default () => {
	const {
		loadingStatus: locationLoadingStatus,
		latitude,
		longitude,
		getLocation,
		error: locationError,
	} = useLocation();
	const { loadingStatus: forecastLoadingStatus, forecast } = useForecast({
		latitude,
		longitude,
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
