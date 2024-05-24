import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/flights">Flights</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
