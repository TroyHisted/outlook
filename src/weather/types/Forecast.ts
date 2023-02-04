export type Forecast = {
	properties: {
		/** The time when the forecast was generated */
		updated: string;
		periods: [
			{
				/** Index */
				number: number;
				/** Human description of the period, e.g. 'Tonight' or 'Friday' */
				name: string;
				/** Time in yyy-mm-ddTHH:MM:ss+offset */
				startTime: string;
				/** Time in yyy-mm-ddTHH:MM:ss+offset */
				endTime: string;
				isDaytime: boolean;
				/** The temperature in degrees */
				temperature: number;
				/** Temperature unit */
				temperatureUnit: 'F' | 'C';
				/** Description of temperature change, e.g. falling, rising */
				TemperatureTrend: string;
				/** Description of the wind speed, e.g. 10 mph */
				windSpeed: string;
				/** Compass direction of wind origin e.g. W, NW, WSW, etc... */
				windDirection: string;
				/** Url */
				icon: string;
				/** Brief description of the weather pattern, e.g. Mostly Cloudy */
				shortForecast: string;
				/** A long description of the expected weather over this time period */
				detailedForecast: string;
			}
		];
	};
};
