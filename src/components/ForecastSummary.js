import "../styles/App.css";

import React from "react";

import PropTypes from "prop-types";

function ForecastSummary(props) {
  const { date, temperature, description, icon } = props;
  return (
    <div className="ForecastSummary">
      <div className="forecastSummary__date">{date}</div>
      <div className="forecastSummary__temperature">{`${temperature.max}°C`}</div>
      <div className="forecastSummary__description">{description}</div>
      <div className="forecastSummary__icon" data-testid="forecast-icon">
        {icon}
      </div>
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
};

export default ForecastSummary;
