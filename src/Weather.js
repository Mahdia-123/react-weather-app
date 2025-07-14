import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Kabul</h1>

      <ul>
        <li>Monday 08:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly-cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">7</span>
              <span className="unit">℃</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 26%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
