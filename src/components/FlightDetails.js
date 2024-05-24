import React from 'react';
import '../styles/FlightDetails.css';

const FlightDetails = ({ flight }) => {
  return (
    <div className="flight-details">
      <h2>Flight Details</h2>
      <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
      <p><strong>Status:</strong> {flight.status}</p>
      <p><strong>Altitude:</strong> {flight.altitude} ft</p>
      <p><strong>Speed:</strong> {flight.speed} mph</p>
    </div>
  );
};

export default FlightDetails;
