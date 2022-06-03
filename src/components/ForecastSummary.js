import "../styles/ForecastSummary.css";

import React from "react";
import WeatherIcon from "react-icons-weather";

import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, temperature, description, icon, setSelectedDate } = props;
  const formattedDate = new Date(date).toDateString();
  const handleClick = () => {
    setSelectedDate(date);
  };
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecastSummary__date">{formattedDate}</div>
      <div className="forecastSummary__temperature">{`${temperature.max}°C`}</div>
      <div className="forecastSummary__description">{description}</div>
      <div className="forecastSummary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} flip="horizontal" rotate="90" />
      </div>
      <button type="button" onClick={handleClick}>
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  setSelectedDate: PropTypes.bool.isRequired,
};

export default ForecastSummary;
