import React from 'react';
import './CreateTicket.css'
import Accordian from './Accordian';
import { supportData } from '../../data/supportData.js';

function CreateTicket() {
    return (
        <div className="container">
        <div className="row mt-5">
            {/* Accordion */}
            <div className="col-12 col-md-8 order-2 order-md-1">
            <div className="accordion" id="supportAccordion">
                {supportData.map(item => (
                <Accordian
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    icon={item.icon}
                    links={item.links}
                />
                ))}
            </div>
            </div>

            {/* Right sidebar */}
            <div className="col-12 col-md-4 order-1 order-md-2">

            <ul className="w-100 createBorder mb-3">
                <li>
                <a href="#">Current Takeovers and Delisting – January 2026</a>
                </li>
                <li>
                <a href="#">Surveillance measure on scrips – January 2026</a>
                </li>
            </ul>

            <table className="table border">
                <thead>
                <tr>
                    <th>Quick links</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>1. Track account opening</td></tr>
                <tr><td>2. Track segment activation</td></tr>
                <tr><td>3. Intraday margins</td></tr>
                <tr><td>4. Kite user manual</td></tr>
                <tr><td>5. Learn how to create a ticket</td></tr>
                </tbody>
            </table>

            </div>

  </div>
</div>
    );
}

export default CreateTicket;
