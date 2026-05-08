import React from "react";
import './Table.css'

function Table({ tableHeads, tabledata, color }) {

  return (
    <div className="table-responsive market-depth-popup">
      
      <table className={`table align-middle market-depth-table ${color}`}>
        
        <thead>
          <tr>
            {tableHeads.map((head, i) => (
              <th key={i}>{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tabledata.map((item, i) => (
            <tr key={i}>
              <td>{item.price}</td>
              <td>{item.orders}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Table;