import React from 'react';
import Table from './Table';
import {ChargesForOpening, OptionalServices, DematAMC} from '../../data/DematData';

function DematAccount() {
    return ( 
        <>
            <div className="container">
                <div className="row mt-5">
                    <h3 style={{marginBottom:"-1.5rem", marginTop:"3rem" }}>{ChargesForOpening.name}</h3>
                    <Table 
                    name={ChargesForOpening.name} 
                    tableHeads={ChargesForOpening.tableHeads} 
                    rows={ChargesForOpening.rows}/>
                    <h3 style={{marginBottom:"-1.5rem", marginTop:"3rem" }}>{DematAMC.name}</h3>
                    <Table 
                    name={DematAMC.name} 
                    tableHeads={DematAMC.tableHeads} 
                    rows={DematAMC.rows}/>
                    <h3 style={{marginBottom:"-1.5rem", marginTop:"3rem" }}>{OptionalServices.name}</h3>
                    <Table 
                    name={OptionalServices.name} 
                    tableHeads={OptionalServices.tableHeads} 
                    rows={OptionalServices.rows}/>
                </div>
            </div>
        </>
     );
}

export default DematAccount;