import React from 'react';
import './Accordian.css';

function Accordian({ title, id, icon, links }) {
    return ( 
        <div className="accordion-item mb-4  ">

            <div className="accordion-header border-bottom accordianAnimation border">
                <a
                    className="accordion-button accordianButton collapsed text-muted borderPaddingNone"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls={id}
                >
                    <i className={`${icon} accordianIcon`}></i>
                    <span className="flex-grow-1">{title}</span>
                </a>
            </div>

            <div
                id={id}
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
            >
                <div className="accordion-body">
                    <ul className="mb-0">
                        {links.map((item, index) => (
                            <a href="#" key={index}  ><li className='mb-3 listItems'>{item}</li></a>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Accordian;
