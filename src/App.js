import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FlightDetailPage from './pages/FlightDetailPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';
import './styles/App.css';

function App() {
  const [notification, setNotification] = useState({ message: '', type: '' });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 3000);
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard showNotification={showNotification} />} />
            <Route path="/flight/:id" element={<FlightDetailPage showNotification={showNotification} />} />
          </Routes>
        </div>
      </div>
      <Notification 
        message={notification.message} 
        type={notification.type} 
        onClose={() => setNotification({ message: '', type: '' })} 
      />
    </Router>
  );
}

export default App;
