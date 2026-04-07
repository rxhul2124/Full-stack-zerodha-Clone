import React from 'react';
import './App.css';

import Dashboard from './kite/dashboard/Dashboard.jsx';
import Navbar from './kite/topbar/Navbar.jsx';
import Sidebar from './kite/sidebar/Sidebar.jsx';
import BuyComponent from './BuyComponent.jsx';

function App() {
  return (
    <>
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-8">
          <Dashboard />
        </div>
      </div>
      <div className='row'>
        <BuyComponent />
      </div>
    </>
  )
}

export default App
