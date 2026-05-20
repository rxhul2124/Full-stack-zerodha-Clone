import React from 'react';
import './IPO.css'
import Table from '../../../Table';
import ipoData from '../../../data/ipo-data';

function IPO() {
    return ( 
        <>
            <div className="bids-ipo">
                <div className="bids-ipo-head">
                    <p className='ipo-heading'>IPO ({
                    ipoData.filter(
                        item => item.status === "APPLY"
                    ).length
                    })</p>
                    <input className='ipo-input' type="text" placeholder='search'/>
                </div>
                <Table
                    tableHeads={[
                        "Instrument",
                        "Date",
                        "Price",
                        "Mim. Amount",
                        ""
                    ]}

                    tableData={ipoData}
                />
            </div>
        </>
     );
}

export default IPO;