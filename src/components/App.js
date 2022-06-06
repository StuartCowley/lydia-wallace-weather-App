import "../styles/App.css";

import React, { useState } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedForecast from "./DetailedForecast";
import CitySearch from "./CitySearch";

function App() {
  // get forecasts
  const [forecasts, setForecasts] = useState([]);
  // get location
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [firstLine, setFirstLine] = useState(
    "Welcome to the weather app, search for your city to see the weather"
  );

  const getForecast = (endpoint) => {
    return axios
      .get(endpoint)
      .then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="weather-app">
      <h1>{firstLine}</h1>
      <CitySearch
        searchTerm={searchTerm}
        getForecast={getForecast}
        setSearchTerm={setSearchTerm}
        setFirstLine={setFirstLine}
      />
      {location.city && (
        <>
          <LocationDetails city={location.city} country={location.country} />
          <h3>Summary for the week</h3>
          <ForecastSummaries
            forecasts={forecasts}
            setSelectedDate={setSelectedDate}
          />
          <DetailedForecast selectedDate={selectedDate} forecasts={forecasts} />
        </>
      )}
    </div>
  );
}

export default App;
