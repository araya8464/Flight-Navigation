import React, { useEffect, useState } from 'react';
import { getFlightData, getRiskAssessmentData, getWeatherData } from '../services/apiService';
import FlightMap from '../components/FlightMap';
import Alerts from '../components/Alerts';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Notification from '../components/Notification';
import Weather from '../components/Weather'; // New Weather component
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [flightData, setFlightData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const flights = await getFlightData();
        console.log('Flight data:', flights);
        setFlightData(flights);
  
        const weatherPromises = flights.map(async (flight) => {
          const weather = await getWeatherData(flight.latitude, flight.longitude);
          console.log(`Weather for flight ${flight.id}:`, weather);
          return {
            id: flight.id,
            weather,
          };
        });
  
        const weatherResults = await Promise.all(weatherPromises);
        console.log('All weather data:', weatherResults);
        setWeatherData(weatherResults);
  
        const alertPromises = flights.map(async (flight) => {
          const risk = await getRiskAssessmentData(flight.id);
          const weather = weatherResults.find((w) => w.id === flight.id).weather;
          return {
            id: flight.id,
            message: `Alert for flight ${flight.callsign}: ${risk.details}. Weather: ${weather.weather[0].description}`,
          };
        });
  
        const alertResults = await Promise.all(alertPromises);
        setAlerts(alertResults);
  
        setNotification({ message: 'Flight data loaded successfully', type: 'success' });
        setTimeout(() => {
          setNotification({ message: '', type: '' });
        }, 3000);
      } catch (error) {
        console.error('Error fetching flight data', error);
        setNotification({ message: 'Error fetching flight data', type: 'error' });
        setTimeout(() => {
          setNotification({ message: '', type: '' });
        }, 3000);
      }
    };
  
    fetchData();
  }, []);

  const flightRoutes = flightData.map((flight) => ({
    id: flight.id,
    path: flight.path,
    tooltip: `Flight ${flight.callsign} from ${flight.origin_country}`,
  }));

  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <FlightMap flightRoutes={flightRoutes} />
          <Weather weatherData={weatherData} />
          <Alerts alerts={alerts} />
        </div>
      </div>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
    </div>
  );
};

export default Dashboard;
