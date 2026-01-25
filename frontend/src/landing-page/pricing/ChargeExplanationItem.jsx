import React from 'react';


function ChargeExplanationItem({ item }) {
    return (
        <div className="mb-4 mt-5 text-muted">
            <h6>{item.title}</h6>

            {item.type === "L" ? (
                <ul>
                    {item.descriptionLines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            ) : (
                item.descriptionLines.map((line, index) => (
                    <p key={index}>
                        {line}
                        {item.type === "Link" && (
                            <a
                                href="#"
                                className="ms-1"
                                onClick={(e) => e.preventDefault()}
                            >
                                Click here
                            </a>
                        )}
                    </p>
                ))
            )}
        </div>
    );
}

export default ChargeExplanationItem;