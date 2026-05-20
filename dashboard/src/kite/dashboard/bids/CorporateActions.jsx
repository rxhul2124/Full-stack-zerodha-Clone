import React from 'react';
import './CorporateActions.css'
import corporateActionsData from '../../../data/corporateActionsData ';
import Table from '../../../Table';

function CorporateActions() {
    return ( 
        <>
            <div className="corporate-ipo">
                <div className="corporate-ipo-head">
                    <p className='ipo-heading'>Corporate Auctions ({corporateActionsData.length})</p>
                    <input className='ipo-input' type="text" placeholder='search'/>
                </div>
                <Table
                    tableHeads={[
                        "Type",
                        "Symbol",
                        "Starts at",
                        "Ends on",
                        "Offer price",
                        ""
                    ]}

                    tableData={corporateActionsData}
                />
            </div>
        </>
     );
}

export default CorporateActions;