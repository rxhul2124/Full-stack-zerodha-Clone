import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from './kite/dashboard/Dashboard.jsx';
import Navbar from './kite/topbar/Navbar.jsx';
import Sidebar from './kite/sidebar/Sidebar.jsx';
import Order from './kite/dashboard/Order.jsx';
import Holdings from './kite/dashboard/holding/Holding.jsx'
import Positions from './kite/dashboard/Positions.jsx'
import Bids from './kite/dashboard/bids/Bids.jsx';
import Funds from './kite/dashboard/funds/Funds.jsx'
import BuySellComponenet from './BuySellComponent.jsx';

import Alerts from './kite/dashboard/Alerts.jsx';
import SIP from './kite/dashboard/SIP.jsx';
import GTT from './kite/dashboard/GTT.jsx';
import Basket from './kite/dashboard/Basket.jsx';
import Orders from './kite/dashboard/Orders.jsx';

import Auctions from './kite/dashboard/bids/Auctions.jsx';
import CorporateActions from './kite/dashboard/bids/CorporateActions.jsx';
import GovtSecurities from './kite/dashboard/bids/GovtSecurities.jsx'
import IPO from './kite/dashboard/bids/IPO.jsx'
import SSE from './kite/dashboard/bids/SSE.jsx'

import All from './kite/dashboard/holding/All.jsx'
import Equity from './kite/dashboard/holding/Equity.jsx'
import MutualFunds from './kite/dashboard/holding/MutualFunds.jsx'

function App() {
  const [privacy , setPrivacy] = useState("off");
  const [theme, setTheme] = useState("light")
  const [action, setAction] = useState({ item: "", type: "", exchange:"NSE" });

  return (
    <>
        <div className={`kite ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
          <div className="kite-navbar">
            <Navbar privacy={privacy} setPrivacy={setPrivacy} theme={theme} setTheme={setTheme}/>
          </div>
        </div>
        <div className={`kite-dashbboard-sidebar ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
            <div className="kite-sidebar">
              <Sidebar action={action} setAction={setAction}/>
            </div> 
            <div className="kite-dashboard">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard theme={theme} setTheme={setTheme}/>} />
                <Route path="/holdings" element={<Holdings theme={theme}/>} >
                  <Route index element={<Navigate to="all" replace />}/>
                  <Route path="all" element={<All theme={theme}/>} />
                  <Route path="equity" element={<Equity theme={theme} />} />
                  <Route path="mutual-funds" element={<MutualFunds theme={theme} />} />
                </Route>
                <Route path="/positions" element={<Positions theme={theme} />}/>
                <Route path="/bids" element={<Bids theme={theme}/>} > 
                  <Route index element={<Navigate to="ipo" replace />}/>
                  <Route path="ipo" element={<IPO theme={theme} />} />
                  <Route path="auctions" element={<Auctions theme={theme}/>} />
                  <Route path="govt-securities" element={<GovtSecurities theme={theme}/>} />
                  <Route path="corporate-actions" element={<CorporateActions theme={theme} />} />
                  <Route path="sse-ipo" element={<SSE theme={theme}/>} />
                </Route>
                <Route path="/funds" element={<Funds theme={theme}/>} />
                <Route path="/orders" element={<Order theme={theme} />}>
                  <Route index element={<Orders theme={theme}/>} />
                  <Route path="gtt" element={<GTT theme={theme}/>} />
                  <Route path="sip" element={<SIP theme={theme}/>} />
                  <Route path="basket" element={<Basket theme={theme}/>} />
                  <Route path="alerts" element={<Alerts theme={theme}/>} />
                </Route>
              </Routes>
            </div>
            <div
              className={`buy-component ${
                action.type === "BUY" || action.type === "SELL"
                  ? "d-block"
                  : "d-none"
              }`}
            >
                <BuySellComponenet action={action} setAction={setAction} theme={theme}/>
            </div>
        </div>
    </>
  )
}

export default App
