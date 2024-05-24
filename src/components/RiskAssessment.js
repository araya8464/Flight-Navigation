import React, { useState, useEffect } from 'react';
import '../styles/RiskAssessment.css';
import { getRiskAssessmentData } from '../services/apiService';

const RiskAssessment = ({ flightId }) => {
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const data = await getRiskAssessmentData(flightId);
        setRiskData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRiskData();
  }, [flightId]);

  if (loading) {
    return <div className="risk-assessment">Loading risk assessment...</div>;
  }

  if (error) {
    return <div className="risk-assessment">Error: {error}</div>;
  }

  return (
    <div className="risk-assessment">
      <h2>Risk Assessment</h2>
      <div className="risk-details">
        <p><strong>Weather Risk:</strong> {riskData.weatherRisk}</p>
        <p><strong>Visibility Risk:</strong> {riskData.visibilityRisk}</p>
        <p><strong>System Health Risk:</strong> {riskData.systemHealthRisk}</p>
        <p><strong>Overall Risk Level:</strong> {riskData.overallRisk}</p>
      </div>
    </div>
  );
};

export default RiskAssessment;
