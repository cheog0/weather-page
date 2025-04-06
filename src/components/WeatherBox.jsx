import React from "react";
import "./WeatherBox.css";
import { ClipLoader } from "react-spinners";

const WeatherBox = ({ weather }) => {
  console.log(weather);

  if (!weather || !weather.main) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        <ClipLoader
          color="#000000"
          loading={true}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  // 섭씨 → 화씨 변환 함수
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9) / 5 + 32).toFixed(2);
  };

  const celsius = weather.main.temp;
  const fahrenheit = celsiusToFahrenheit(celsius);

  return (
    <div className="weather-box">
      <div className="weather-city">{weather.name}</div>
      <h2 className="weather-temp">
        {celsius}℃ ({fahrenheit}℉)
      </h2>
      <h3 className="weather-desc">{weather.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
