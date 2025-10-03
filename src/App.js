import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar setWeather={setWeather} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
