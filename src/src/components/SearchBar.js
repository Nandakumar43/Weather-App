import React, { useState } from 'react';

function SearchBar({ setWeather }) {
  const [city, setCity] = useState('');

  const apiKey = "36aa67b655636ebb8ae7afe88e172e72";

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter city name" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <button onClick={getWeather}>Search</button>
    </div>
  );
}

export default SearchBar;
