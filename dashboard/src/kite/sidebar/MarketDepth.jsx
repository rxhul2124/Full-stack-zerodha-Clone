import React from 'react';
import './MarketDepth.css'
import Table from './table';

function MarketDepth({ depth, stats }) {
  if (!depth) return null;
  const total = stats.high + stats.low;
  const highPercent = (stats.high / total) * 100;
  const lowPercent = (stats.low / total) * 100;

  return (
    <>
      <div className="row">
        {/* BID */}
        <div className="col-6">
          <Table
            tableHeads={["Bid", "Orders", "Qty"]}
            tabledata={depth.bid}
            color="market-depth-green"
          />  
        </div>

        <div className="col-6">
          <Table
            tableHeads={["Offer", "Orders", "Qty"]}
            tabledata={depth.offer}
            color="market-depth-red"
          />
        </div>
      </div>
      <div className="box border mt-3">
        <div className="row p-3">
            <div className="col-3">
              <p>Open <span className='text-'>{stats.open}</span></p>
              <p>Low <span>{stats.low}</span></p>
            </div>
            <div className="col-5"></div>
            <div className="col-4">
              <p>Prev. Close <span>{stats.prev_close}</span></p>
              <p>High <span>{stats.high}</span></p>
            </div>
            <div className="d-flex w-100" style={{ height: "6px" }}>
              <div
                style={{
                  width: `${highPercent}%`,
                  backgroundColor: "#e0e0e0",
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
      </div>
    </>
  );
}

export default MarketDepth;
