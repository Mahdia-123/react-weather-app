import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.main.temp_max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.main.temp_min);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      {" "}
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="weatherForecast-temperature">
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
