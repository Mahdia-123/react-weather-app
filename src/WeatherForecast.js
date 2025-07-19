import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8tc45bb70811ad02c7716f84fe4ocbe3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="daily-weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={32} />
          <div className="weatherForecast-temperature">
            <span className="weatherForecast-temperature-max">19º</span>
            <span className="weatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
