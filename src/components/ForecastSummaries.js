import "../styles/ForecastSummaries.css";

import React from "react";

import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries(props) {
  const { forecasts, setSelectedDate } = props;
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          temperature={forecast.temperature}
          description={forecast.description}
          icon={forecast.icon}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
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
      icon: PropTypes.string,
    })
  ).isRequired,
  setSelectedDate: PropTypes.bool.isRequired,
};

export default ForecastSummaries;
