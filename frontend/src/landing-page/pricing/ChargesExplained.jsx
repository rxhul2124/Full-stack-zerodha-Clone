import React from 'react';
import { ChargesExplainedData, disclaimer } from '../../data/chargesExplainedData';
import ChargeExplanationItem from './ChargeExplanationItem';

function ChargesExplained() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3 className='text-muted'>Charges explained</h3>
      </div>

      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          {ChargesExplainedData
            .filter(item => item.side === "Left")
            .map((item, index) => (
              <ChargeExplanationItem key={index} item={item} />
            ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6">
          {ChargesExplainedData
            .filter(item => item.side === "Right")
            .map((item, index) => (
              <ChargeExplanationItem key={index} item={item} />
            ))}
        </div>
      </div>
      <div className="row mb-5 text-muted">
            <h5 className='mt-4 mb-4'>{disclaimer.title}</h5>
            <p>{disclaimer.description}</p>
      </div>
    </div>
  );
}

export default ChargesExplained;
