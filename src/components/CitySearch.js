import "../styles/CitySearch.css";

import React from "react";
import PropTypes from "prop-types";

function CitySearch({ searchTerm, getForecast, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getForecast(
      `https://mcr-codes-weather-app-alt.herokuapp.com/forecast?city=${searchTerm}`
    );
  };

  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Search for a city"
        onChange={handleChange}
        value={searchTerm}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

CitySearch.propTypes = {
  getForecast: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default CitySearch;
