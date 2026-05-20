import React from 'react';
import './Table.css';

function Table({ tableHeads, tableData }) {

    return(

        <table className='table-body'>

            <thead>

                <tr>

                    {
                        tableHeads.map((head, index)=>(

                            <th key={index}>
                                {head}
                            </th>
                        ))
                    }

                </tr>

            </thead>

            <tbody>

                {
                    tableData.map((item)=>(

                        <tr key={item.id}>

                            {
                                Object.entries(item)

                                    .filter(([key]) => key !== "id")

                                    .map(([key, value]) =>(

                                        <td key={key}>

                                            {
                                                key === "status"

                                                ? (

                                                    <button
                                                        className={
                                                            value == "PLACE BID"? "apply-button":
                                                            value === "APPLY"
                                                            ? "apply-button"
                                                            : "closed-button"
                                                        }
                                                    >
                                                        {value}
                                                    </button>
                                                )

                                                : value === null

                                                ? "—"

                                                : value
                                            }

                                        </td>
                                    ))
                            }

                        </tr>
                    ))
                }

            </tbody>

        </table>
    );
}

export default Table;