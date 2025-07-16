import React from "react";

export default function LoadingSpinner() {
  return (
    <div>
      {" "}
      <div className="spinner-container">
        <div className="spinner"></div>
        <div>Loading weather data...</div>
      </div>
    </div>
  );
}
