import axios from 'axios';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = '2c77ce91a1778e9c862213ded1cb6bcd2'; // Replace with your OpenWeatherMap API key

export const getFlightData = async () => {
  // Mocking global flight data
  return [
    {
      id: '1',
      icao24: 'abc123',
      callsign: 'Flight 1',
      origin_country: 'USA',
      latitude: 40.7128,
      longitude: -74.0060,
      path: [
        [40.7128, -74.0060],
        [51.5074, -0.1278]
      ],
      tooltip: 'Flight 1 from USA'
    },
    {
      id: '2',
      icao24: 'def456',
      callsign: 'Flight 2',
      origin_country: 'India',
      latitude: 28.6139,
      longitude: 77.2090,
      path: [
        [28.6139, 77.2090],
        [35.6895, 139.6917]
      ],
      tooltip: 'Flight 2 from India'
    },
    {
      id: '3',
      icao24: 'ghi789',
      callsign: 'Flight 3',
      origin_country: 'Brazil',
      latitude: -23.5505,
      longitude: -46.6333,
      path: [
        [-23.5505, -46.6333],
        [34.0522, -118.2437]
      ],
      tooltip: 'Flight 3 from Brazil'
    }
  ];
};

export const getFlightDetails = async (icao24) => {
  // Mocking flight details
  return {
    id: icao24,
    details: `Details for flight ${icao24}`
  };
};

export const getRiskAssessmentData = async (flightId) => {
  // Mocking risk assessment data
  return {
    id: flightId,
    riskLevel: 'low', // Example risk level
    details: 'No significant risks detected'
  };
};

export const getWeatherData = async (lat, lon) => {
    try {
      console.log(`Fetching weather data for latitude: ${lat}, longitude: ${lon}`);
      const response = await axios.get(WEATHER_API_URL, {
        params: {
          lat,
          lon,
          appid: WEATHER_API_KEY,
          units: 'metric'
        }
      });
      console.log('Weather data fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data', error);
      throw error;
    }
  };