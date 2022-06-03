/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
import "../styles/DetailedForecast.css";

import React from "react";
import PropTypes from "prop-types";



function DetailedForecast({ forecasts, selectedDate }) {
  // const { selectedDate } = props;
  console.log(`THIS IS selectedDate ----> ${selectedDate}`);
  // const forecasts = props.forecast
  const formattedDate = new Date(selectedDate).toDateString();

  // problem:
  console.log(`THIS IS FORECASTS ----> ${forecasts}`);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="detailed-forecast">
      <div className="forecastSummary__date">{formattedDate}</div>
      <div className="forecastSummary__temperature">{`${selectedForecast.temperature.max}°C`}</div>
      <div className="forecastSummary__description">
        {selectedForecast.description}
      </div>
    </div>
  );
}

DetailedForecast.propTypes = {
  selectedDate: PropTypes.number.isRequired,
};
// ForecastSummaries.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       temperature: PropTypes.shape({
//         max: PropTypes.number,
//         min: PropTypes.number,
//       }),
//       wind: PropTypes.shape({
//         speed: PropTypes.number,
//         direction: PropTypes.string,
//       }),
//       humidity: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string,
//     })
//   ).isRequired,
// };

export default DetailedForecast;
