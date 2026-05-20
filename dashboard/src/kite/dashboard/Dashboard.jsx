import React from 'react';
import './Dashboard.css'

function Dashboard({theme, setTheme}) {
    return ( 
        <>
            <div className="kite-dashboard">
                <div >
                    <p className='kite-name'>Hi, Rahul</p>
                </div>
                <hr />
                <div className="dashboard-equity-commodity">
                    <div className="equity">
                        <p className='heading'><i className="fa-solid fa-chart-pie heading-icon"></i> Equity</p>
                        <div className="info">
                            <div className="available">
                                <p className='zero'>0</p>
                                <p>Margin Available</p>
                            </div>
                            <div className="used">
                                <p>Margin used</p>
                                <p>Opening balance</p>
                                <p>View Statement</p>
                            </div>
                        </div>
                    </div>
                    <div className="commodity">
                        <p className='heading'><i className="fa-solid fa-droplet heading-icon"></i> Commodity</p>
                        <div className="info">
                            <div className="available">
                                <p className='zero'>0</p>
                                <p>Margin Available</p>
                            </div>
                            <div className="used">
                                <p>Margin used 0</p>
                                <p>Opening balance</p>
                                <p>View Statement</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="investment">
                    <div className='investment-body'>
                        <img className='investment-img' src={`media/image/holdings${theme === "light"?"":"-dark"}.svg`} alt="" />
                        <p>You don't have any stocks in your DEMAT yet. Get started <br />with absolutely free equity investments.</p>
                        <button className='button'>Start investing</button>
                    </div>
                </div>
                <hr />
                <div className="market-view">
                    <div className="market-graph">
                        <p className='heading'><i className="fa-solid fa-arrow-trend-up market-icon"></i>Market overview</p>
                        <div className="graph">
                            <img className='market-image' src={`media/image/graph${theme === "dark"?"-dark":""}.png`} alt="" />
                        </div>
                    </div>
                    <div className="positions">
                        <div className="positions-body">
                            <img src={`media/image/positions${theme === "light"?"":"-dark"}.svg`} alt="" />
                            <p>You don't have any positions yet</p>
                            <button className='button'>Get started</button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
     );
}

export default Dashboard;