import React from 'react';

import Education from "./Education.jsx";
import Awards from './Awards.jsx';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Hero from './Hero.jsx';  

import OpenAccount from '../OpenAccount';

function HomePage() {
    return (    
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;