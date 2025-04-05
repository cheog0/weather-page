import React from "react";
import "./WeatherBox.css";

const WeatherBox = ({ weather }) => {
  if (!weather || !weather.main) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div className="weather-box">
      <div className="weather-city">{weather.name}</div>
      <h2 className="weather-temp">{weather.main.temp}도</h2>
      <h3 className="weather-desc">{weather.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
