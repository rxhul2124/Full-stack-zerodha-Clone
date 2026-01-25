import React from 'react';
import './Stats.css'

function Stats() {
    return ( 
        <div className='container mb-5'>
            <div className='row m-3 p-4 StatsSection'>
                <div className='col-md-6 mt-5'>
                    <h4>Trust with confidence</h4>
                    &nbsp;
                    <h5>Customer-first always</h5>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h5>No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h5>The Zerodha universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5>Do better with money</h5>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-md-6 mt-5'>
                    <img className='w-100' src='media/images/ecosystem.png' alt='ecosystem image'/>
                </div>
                <img className='w-75 mx-auto mt-5' src='media/images/pressLogos.png'/>
            </div>
       </div>
     );
}

export default Stats;