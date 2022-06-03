import "../styles/App.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedForecast from "./DetailedForecast";

function App(props) {
  const { location, forecasts } = props;
  const initialDate = forecasts[0];
  const [selectedDate, setSelectedDate] = useState(initialDate.date);
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        setSelectedDate={setSelectedDate}
      />
      <DetailedForecast selectedDate={selectedDate} forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
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
};

export default App;
