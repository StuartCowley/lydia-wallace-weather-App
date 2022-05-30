import "../styles/App.css";

import React from "react";

import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country } = props;
  return <h1 className="locationDetails">{`${city}, ${country}`}</h1>;
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
