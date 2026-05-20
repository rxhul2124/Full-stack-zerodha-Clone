import React from 'react';
import './MarketDepth.css'
import SidebarTable from './SidebarTable';

function MarketDepth({ depth, stats }) {
  if (!depth) return null;
  const total = stats.high + stats.low;
  const highPercent = (stats.high / total) * 100;
  const lowPercent = (stats.low / total) * 100;

  return (
    <>
      <div className="market-table-parent">
        {/* BID */}
        <div className="market-table-child">
          <SidebarTable
            tableHeads={["Bid", "Orders", "Qty"]}
            tabledata={depth.bid}
            color="market-depth-green"
          />  
        </div>

        <div className="market-table-child">
          <SidebarTable
            tableHeads={["Offer", "Orders", "Qty"]}
            tabledata={depth.offer}
            color="market-depth-red"
          />
        </div>
      </div>
      <div className="stats-box">
        <div className="stats-prev-price">
            <div className="stats-prev-price-col1">
              <p>Open <span className='text-'>{stats.open}</span></p>
              <p>Low <span>{stats.low}</span></p>
            </div>
            <div className="stats-prev-price-col2">
              <p>Prev. Close <span>{stats.prev_close}</span></p>
              <p>High <span>{stats.high}</span></p>
            </div>
        </div>
          <div className="stats-bar" style={{ height: "0.3rem" }}>
            <div
              style={{
                width: `${highPercent}%`,
                backgroundColor: "var(--border-color)",
                borderRadius: "4px 0 0 4px"
              }}
            ></div>
            <div
              style={{
                width: `${lowPercent}%`,
                backgroundColor: "#df514c",
                borderRadius: "0 4px 4px 0"
              }}
            ></div>
          </div>
      </div>
      <div className="stats-footer">
          <div className="stats-footer-col1">
            <div className="stats-footer-row">
              <p className='stats-footer-heading'>Volume</p>
              <p>{stats.volume}</p>
            </div>
            <div className="stats-footer-row">
              <p className='stats-footer-heading'>Lower circuit</p>
              <p>{stats.lower_circuit}</p>
            </div>
            <div className="stats-footer-row">
              <p className='stats-footer-heading'>LTQ</p>
              <p>{stats.ltq}</p>
            </div>
          </div>
          <div className="stats-footer-col2">
            <div className="stats-footer-row">
              <p className='stats-footer-heading'>Avg. price</p>
              <p>{stats.avg_price}</p>
            </div>
            <div className="stats-footer-row">
              <p className='stats-footer-heading'>Upper circuit</p>
              <p>{stats.upper_circuit}</p>
            </div>
            <div className="stats-footer-row">
              <p className='stats-footer-heading'>LTT</p>
              <p>{stats.ltt}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default MarketDepth;
