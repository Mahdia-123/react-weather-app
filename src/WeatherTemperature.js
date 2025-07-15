import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displyFahrenhiet(event) {
    event.preventDefault();
    setUnit("fahrenhiet");
  }
  function displayCesius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ |{" "}
          <a href="\" onClick={displyFahrenhiet}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenhiet = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenhiet)}</span>
        <span className="unit">
          <a href="\" onClick={displayCesius}>
            ℃{" "}
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
