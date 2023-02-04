import React, { FunctionComponent, useEffect, useState } from "react";

type LocationProps = {
  latitude: number;
  longitude: number;
};

type Points = {
  id: string;
  type: string;
  properties: {
    /** A geometry represented in Well-Known Text (WKT) format. */
    geometry: string;
    /** url */
    "@id": string;
    "@type": string;
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

type Forecast = {
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
        temperatureUnit: "F" | "C";
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

// https://weather-gov.github.io/api/general-faqs

export const Weather: FunctionComponent<LocationProps> = ({
  latitude,
  longitude,
}) => {
  const [weatherDescription, setWeatherDescription] = useState("unknown");
  const [forecastUrl, setForecastUrl] = useState("");
  const [forecast, setForecast] = useState<Forecast>();

  const fetchPointData = async () => {
    setWeatherDescription("loading...");

    const response = await fetch(
      `https://api.weather.gov/points/${latitude.toFixed(
        4
      )},${longitude.toFixed(4)}`
    );
    if (response.status === 200) {
      const points: Points = await response.json();
      setForecastUrl(points.properties.forecast);
    } else {
      setWeatherDescription("Failed lookup");
    }
  };

  const fetchForecast = async () => {
    const response = await fetch(forecastUrl);
    if (response.status === 200) {
      const f: Forecast = await response.json();
      setWeatherDescription(f.properties.periods[0].detailedForecast);
      setForecast(forecast);
    } else {
      setWeatherDescription("Failed lookup");
    }
  };

  useEffect(() => {
    fetchForecast();
  }, [forecastUrl]);

  useEffect(() => {
    fetchPointData();
  }, [latitude, longitude]);

  return (
    <>
      <p>Current Weather: {weatherDescription}</p>
      {forecast && (
        <img
          src={forecast.properties.periods[0].icon}
          title={forecast.properties.periods[0].shortForecast}
        />
      )}
    </>
  );
};
