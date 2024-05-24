// src/components/Weather.js

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Weather.css';

const Weather = ({ weatherData }) => {
  return (
    <div className="weather-container">
      <h2>Weather Updates</h2>
      {weatherData.map(({ id, weather }) => (
        <div key={id} className="weather-card">
          <p><strong>Flight ID:</strong> {id}</p>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
          <p><strong>Description:</strong> {weather.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      weather: PropTypes.shape({
        main: PropTypes.shape({
          temp: PropTypes.number.isRequired
        }),
        wind: PropTypes.shape({
          speed: PropTypes.number.isRequired
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string.isRequired
          })
        ).isRequired
      }).isRequired
    })
  ).isRequired
};

export default Weather;
