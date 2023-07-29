import { Period } from './Period';

export type Forecast = {
	properties: {
		/** Denotes the units used in the textual portions of the forecast. */
		units: 'us' | 'si';
		/** The time this forecast data was generated. */
		generatedAt: string;
		/** The last update time of the data this forecast was generated from. */
		updateTime: string;
		/** Segments of the forecast. */
		periods: Period[];
	};
};
