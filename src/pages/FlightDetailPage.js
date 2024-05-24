import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlightDetails } from '../services/apiService';
import FlightDetails from '../components/FlightDetails';
import RiskAssessment from '../components/RiskAssessment';
import '../styles/FlightDetailPage.css';

const FlightDetailPage = ({ showNotification }) => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFlightDetails(id);
        setFlight(data);
        showNotification(`Flight ${id} details loaded successfully`, 'info');
      } catch (error) {
        console.error('Error fetching flight details', error);
        showNotification('Error fetching flight details', 'error');
      }
    };

    fetchData();
  }, [id, showNotification]);

  return (
    <div className="flight-detail-page">
      {flight ? (
        <>
          <FlightDetails flight={flight} />
          <RiskAssessment flightId={id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FlightDetailPage;
