import React from "react";
import PropTypes from "prop-types";

function CitySearch({ searchTerm, getForecast, setSearchTerm, setFirstLine }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getForecast(
      `https://mcr-codes-weather-app-alt.herokuapp.com/forecast?city=${searchTerm}`
    );
    setSearchTerm("");
    setFirstLine("");
  };

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city"
          onChange={handleChange}
          value={searchTerm}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

CitySearch.propTypes = {
  getForecast: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setFirstLine: PropTypes.func.isRequired,
};

export default CitySearch;
