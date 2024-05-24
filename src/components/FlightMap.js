import React from 'react';
import { MapContainer, TileLayer, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/FlightMap.css';

const FlightMap = ({ flightRoutes }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} className="flight-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {flightRoutes.map(route => (
        <Polyline
          key={route.id}
          positions={route.path}
          color="blue"
          weight={3}
        >
          <Tooltip>{route.tooltip}</Tooltip>
        </Polyline>
      ))}
    </MapContainer>
  );
};

export default FlightMap;
