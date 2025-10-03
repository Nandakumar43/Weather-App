import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].main}</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
