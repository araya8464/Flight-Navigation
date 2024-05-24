import React from 'react';
import '../styles/Alerts.css';

const Alerts = ({ alerts }) => {
  return (
    <div className="alerts">
      <h2>Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts</p>
      ) : (
        <ul>
          {alerts.map(alert => (
            <li key={alert.id}>{alert.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts;
