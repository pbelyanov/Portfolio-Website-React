import { useEffect, useState } from "react";
import {
  getWeather,
  getLocation,
  getCityName,
  SearchComp,
  getCity,
} from "./util";
import { WeatherIcon } from "./WeatherIcon";
import Autocomplete from "react-google-autocomplete";

import("./weatherStyle.css");

export function WeatherApp(props) {
  const [weather, changeWeather] = useState([]);
  const [cityName, changeCityName] = useState([]);
  const [coords, changeCoords] = useState(null);

  getLocation(changeCoords);

  useEffect(() => {
    getWeather(changeWeather, coords);
    getCity(changeCityName, coords);
  }, [coords]);

  if (weather.current_weather) {
    const forecastArray = [];
    for (let i = 0; i <= 6; i++) {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const d = new Date(weather.daily.time[i]);
      let dayOfWeek = weekday[d.getDay()];
      let day = {
        date: dayOfWeek,
        tempMax: weather.daily.temperature_2m_max[i],
        tempMin: weather.daily.temperature_2m_min[i],
        weatherCode: weather.daily.weathercode[i],
      };
      forecastArray.push(day);
    }

    function FutureWeatherIcon(props) {
      return (
        <div className="futureForecastCard">
          <p>
            <b>{props.forecast.date}</b>
          </p>
          <WeatherIcon weatherCode={props.forecast.weatherCode.toString()} />
          <p className="forecastTemp">Max: {props.forecast.tempMax}&#176;</p>
          <p className="forecastTemp">Min: {props.forecast.tempMin}&#176;</p>
        </div>
      );
    }

    function searchCityCorrds(place) {
      const lat = place.geometry.location.lat();
      const lon = place.geometry.location.lng();

      sessionStorage.setItem("lat", lat);
      sessionStorage.setItem("lon", lon);

      changeCoords([lat, lon]);
    }

    let finalName = "Sofia";

    try {
      const nameOfCurrentCity = cityName.plus_code.compound_code
        .split(",")[0]
        .split(" ");
      const nameOfCity = nameOfCurrentCity.shift();
      finalName = nameOfCurrentCity.join(" ");
    } catch {
      return <div>Error</div>;
    }

    return (
      <div id="weatherApp">
        <div id="appContainer">
          <Autocomplete
            id="search"
            apiKey={"AIzaSyB0n8gzIoTQy5GhbGiWZfO_aszOqWcLxY8"}
            onPlaceSelected={searchCityCorrds}
          />

          {weather.current_weather.temperature ? (
            <div id="currentWeather">
              <WeatherIcon
                weatherCode={weather.current_weather.weathercode.toString()}
              />
              <div id="currentWeatherTextBox">
                <p id="textTodayCurentWeather">Today</p>

                <p id="currentLocation">{finalName}</p>

                <div id="currentTemperature">
                  Temperature: {weather.current_weather.temperature}&#176;
                </div>
              </div>
            </div>
          ) : null}
          <div id="forecast">
            {forecastArray.map((x) => (
              <FutureWeatherIcon forecast={x} key={x.date}></FutureWeatherIcon>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
