import React from "react";

function Table({ name, tableHeads, rows }) {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table align-middle mt-5 border">
          {/* HEAD */}
          <thead>
            <tr>
              {tableHeads.map((head, index) => (
                <th key={index} scope="col">
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                
                {/* label */}
                <th scope="row" className="fw-normal text-muted">
                  {row.label}
                </th>

                {/* values */}
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex}>
                    {value=== "FREE" ?(
                      <h5 className="badge text-bg-success">{value}</h5>
                    ):value === "500" ? (
                    <span>
                      ₹{value}
                    </span>
                  ):(
                    value
                  )}
                  </td>
                ))}


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
