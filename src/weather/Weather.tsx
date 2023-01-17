import React, { FunctionComponent, useEffect, useState } from 'react';

type LocationProps = {
    latitude: number;
    longitude: number;
}

type Points = {
    properties: {
        forecast: string;
    },
}

type Forecast = {
    properties: {
        periods: [
            {
                number: number;
                name: string;
                temperature: number;
                temperatureUnit: 'F' | 'C';
                detailedForecast: string;
            }
        ]
    }
}


// https://weather-gov.github.io/api/general-faqs


export const Weather:FunctionComponent<LocationProps> = ({ latitude, longitude }) => {

  const [weatherDescription, setWeatherDescription] = useState('unknown');
  const [forecastUrl, setForecastUrl ] = useState("");

  const fetchPointData = async () => {
    setWeatherDescription('loading...');

    const response = await fetch(`https://api.weather.gov/points/${latitude.toFixed(4)},${longitude.toFixed(4)}`)
    if (response.status === 200) {
        const points: Points = await response.json();
        setForecastUrl(points.properties.forecast);
    } else {
        setWeatherDescription('Failed lookup');
    }
  };

  const fetchForecast = async () => {
    const response = await fetch(forecastUrl);
    if (response.status === 200) {
        const forecast: Forecast = await response.json();
        setWeatherDescription(forecast.properties.periods[0].detailedForecast);
    } else {
        setWeatherDescription('Failed lookup');
    }
  }

  useEffect(() => {
    fetchForecast();
  }, [forecastUrl])

  useEffect(() => {
    fetchPointData();
  }, [latitude, longitude])

  return <>
    <p>Current Weather: {weatherDescription}</p>
  </>
};
