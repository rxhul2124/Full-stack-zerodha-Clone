import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import DematAccount from './DematAccount';
import ChargesExplained from './ChargesExplained';

function PricingPage() {
    return ( 
        <>
            <Hero />
            <Brokerage/>
            <DematAccount />
            <ChargesExplained />
        </>
     );
}

export default PricingPage;