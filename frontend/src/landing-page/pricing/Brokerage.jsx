import React, { useState } from 'react';
import Table from './Table';
import './Brokerage.css'


import {
  EquityCostData,
  CurrencyCostData,
  CommodityCostData,
} from "../../data/costData";


function Brokerage() {
    const [activeTable, setActiveTable] = useState("Equity");
    return ( 
        <>
            <div className="container">
                <div className="d-flex gap-4 border-bottom border-1 mt-5">
                    <a className={`brokerageLink fs-2 fs-md-5 fs-sm-6  ${activeTable === "Equity" ? "border-bottom border-primary border-4 text-body-secondary": ""} `}
                    onClick={()=>setActiveTable("Equity")} >
                        Equity
                    </a>
                    <hr />
                    <a className={`brokerageLink fs-2 fs-md-5 fs-sm-6  ${activeTable === "Currency" ? "border-bottom border-primary border-4 text-body-secondary": ""} `}
                    onClick={()=>setActiveTable("Currency")} >
                        Currency
                    </a>
                    <hr />
                    <a className={`brokerageLink fs-2 fs-md-5 fs-sm-6  ${activeTable === "Commodity" ? "border-bottom border-primary border-4 text-body-secondary": ""} `}
                    onClick={()=>setActiveTable("Commodity")} >
                        Commodity
                    </a>
                    <hr />
                    <div className="col-md-6"></div>
                </div>
            </div>

            {
                activeTable === "Equity" && 
                <Table 
                name={EquityCostData.name} 
                tableHeads={EquityCostData.tableHeads} 
                rows={EquityCostData.rows}/>
            }
            {
                activeTable === "Currency" && 
                <Table 
                name={CurrencyCostData.name} 
                tableHeads={CurrencyCostData.tableHeads} 
                rows={CurrencyCostData.rows}/>
            }
            {
                activeTable === "Commodity" && 
                <Table 
                name={CommodityCostData.name} 
                tableHeads={CommodityCostData.tableHeads} 
                rows={CommodityCostData.rows}/>
            }
            <p className='text-center fs-4 mt-4'><a href="#">Calculate your costs upfront</a> using our brokerage calculator</p>
        </>
     ); 
}

export default Brokerage;