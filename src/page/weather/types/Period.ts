export type Period = {
	/** Index */
	number: number;
	/** Human description of the period, e.g. 'Tonight' or 'Friday' */
	name: string;
	/** Time in yyy-mm-ddTHH:MM:ss+offset */
	startTime: string;
	/** Time in yyy-mm-ddTHH:MM:ss+offset */
	endTime: string;
	/** Indicates whether this period is daytime or nighttime. */
	isDaytime: boolean;
	/** The temperature in degrees */
	temperature: {
		/** http://codes.wmo.int/common/unit */
		unitCode: 'wmoUnit:degC';
		/** Temperature value. */
		value: number;
	};
	/** Description of temperature change, e.g. falling, rising. */
	TemperatureTrend: 'rising' | 'falling' | null;
	/** Precipitation probability information. */
	probabilityOfPrecipitation: {
		/** The units. */
		unitCode: 'wmoUnit:percent';
		/** The value. */
		value: number;
	};
	relativeHumidity: {
		/** The units. */
		unitCode: 'wmoUnit:percent';
		/** The value. */
		value: number;
	};
	/** Wind speed information. */
	windSpeed: {
		/** The unit of measure. */
		unitCode: 'wmoUnit:km_h-1';
		/** Min wind speed. */
		minValue?: number;
		/** Max wind speed. */
		maxValue?: number;
		/** value if there is no min/max? */
		value?: number;
	};
	/** The prevailing direction of the wind for the period, using a 16-point compass. */
	windDirection:
		| 'N'
		| 'NNE'
		| 'NE'
		| 'ENE'
		| 'E'
		| 'ESE'
		| 'SE'
		| 'SSE'
		| 'S'
		| 'SSW'
		| 'SW'
		| 'WSW'
		| 'W'
		| 'WNW'
		| 'NW'
		| 'NNW';
	/** Url */
	shortForecast: string;
	/** A long description of the expected weather over this time period */
	detailedForecast: string;
};
