import "../styles/DetailedForecast.css";

import React from "react";
import WeatherIcon from "react-icons-weather";

import PropTypes from "prop-types";

function DetailedForecast({ forecasts, selectedDate }) {
  const formattedDate = new Date(selectedDate).toDateString();
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="detailed-forecast">
      <b>
        <div className="detailedForecast__date">{`Details for ${formattedDate}`}</div>
      </b>
      <div className="forecastSummary__icon" data-testid="forecast-icon">
        <WeatherIcon
          name="owm"
          iconId={`${selectedForecast.icon}`}
          flip="horizontal"
          rotate="90"
        />{" "}
        {selectedForecast.description}
      </div>
      <div className="detailedForecast__maxTemperature">{`Max: ${selectedForecast.temperature.max}°C`}</div>
      <div className="detailedForecast__minTemperature">{`Min: ${selectedForecast.temperature.min}°C`}</div>
      <div className="detailedForecast__humidity">{`Humidity: ${selectedForecast.humidity}%`}</div>
      <div className="detailedForecast__windSpeed">{`Wind Speed: ${selectedForecast.wind.speed}mph`}</div>
      <div className="detailedForecast__windDirection">{`Wind Direction: ${selectedForecast.wind.direction}`}</div>
    </div>
  );
}

DetailedForecast.propTypes = {
  selectedDate: PropTypes.number.isRequired,
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }),
      humidity: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
    })
  ).isRequired,
};

export default DetailedForecast;
