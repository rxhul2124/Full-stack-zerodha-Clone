import React from 'react';
import NoRecord from '../NoRecord'
import govtSecuritiesData from '../../../data/govt-securities'
import Table from '../../../Table';
import './GovtSecurities.css'

function GovtSecurities() {
    return ( 
        <>
            <div className="govt-ipo">
                <div className="govt-ipo-head">
                        <p className='ipo-heading'>Corporate Auctions ({govtSecuritiesData.length})</p>
                        <input className='ipo-input' type="text" placeholder='search'/>
                </div>
                {
                    govtSecuritiesData ? 
                        <Table
                            tableHeads={[
                                "Type",
                                "Instrument",
                                "Yield*",
                                "Ends on",
                                "Order value",
                                ""
                            ]}

                            tableData={govtSecuritiesData}
                        />
                    :
                    <NoRecord 
                        imageURL={'/media/image/orderbook.svg'}  
                        description1={"No securities available for bidding currently."} 
                        description2={""} 
                        description3={""} 
                        button={""}
                        />

                }
            </div>    
        </>
     );
}

export default GovtSecurities;