import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
