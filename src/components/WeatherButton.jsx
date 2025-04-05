import React from "react";
import { Button } from "react-bootstrap";
import "./WeatherButton.css";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="weather-button mt-3">
      <Button
        className="weather-btn"
        variant="primary"
        onClick={() => setCity("")}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          className="weather-btn"
          key={index}
          variant="primary"
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
