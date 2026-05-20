import React from 'react';
import './Funds.css'
import Table from '../../../Table'
import {commodityFundsData, equityFundsData} from '../../../data/Funds'
 
function Funds() {
    return ( 
        <>
            <div className="Funds">
                <div className="Funds-payment-options">
                    <p className='Funds-upi'>Instant, zero-cost fund transfers with </p>
                    <img src="/media/image/UPI.svg" alt="" />
                    <button className='Funds-button' style={{backgroundColor:"#4DAE50", color:"#F9FDF8"}}>Add funds</button>
                    <button className='Funds-button' style={{backgroundColor:"#4184F3", color:"#F9FDF8"}}>Withdraw</button>
                </div>
                <div className="Funds-explanation">
                    <div className="Funds-equity">
                        <Table 
                            tableHeads={[
                                "",
                                ""
                            ]}
                            tableData={equityFundsData}
                        /> 
                    </div>
                    <div className="Funds-commodity">
                        <Table 

                            tableHeads={[
                                "",
                                ""
                            ]}
                            tableData={commodityFundsData}
                        />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Funds;