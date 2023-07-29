export type Points = {
	id: string;
	type: string;
	properties: {
		/** A geometry represented in Well-Known Text (WKT) format. */
		geometry: string;
		/** url */
		'@id': string;
		'@type': string;
		/** Three-letter identifier for a NWS office. */
		cwa: string;
		/** url */
		forecastOffice: string;
		/** Three-letter identifier for a NWS office. */
		gridId: string;
		gridX: number;
		gridY: number;
		/** url */
		forecast: string;
		/** url */
		forecastHourly: string;
		/** url */
		forecastGridData: string;
		/** url */
		observationStations: string;
		/** url */
		forecastZone: string;
		/** url */
		county: string;
		/** url */
		fireWeatherZone: string;
		timeZone: string;
		radarStation: string;
		relativeLocation: {
			type: string;

			properties: {
				city: string;
				/** Two character abbreviation */
				state: string;
			};
		};
	};
};
