import React from 'react';
import './Hero.css';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 heroSection text-center'>
                <img src='media/images/homeHero.png' alt='heroImage' className='heroImage'/>
                <h2 className='mt-5'>Invest in everything</h2>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary' style={{backgroundColor:"#387dd1"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;