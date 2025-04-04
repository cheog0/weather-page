import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f236e94953310d8437ba15866038dba3&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f236e94953310d8437ba15866038dba3&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city !== "") {
      getWeatherByCity();
    } else {
      getCurrentLocation();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#000000"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
