import { Forecast } from './types/Forecast';

export default function useSinglePeriodForecast(forecast: Forecast) {
	return { forecast };
}
