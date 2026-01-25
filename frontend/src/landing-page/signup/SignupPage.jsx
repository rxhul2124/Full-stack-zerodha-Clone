import React from 'react';
import SignUp from './SignUp';
import InvestmentOptions from './InvestmentOptions';
import Steps from './Steps';
import Benefits from './Benefits';

import OpenAccount from '../OpenAccount';

function SignUpPage() {
    return ( 
        <>
            <SignUp />
            <InvestmentOptions />
            <Steps/>
            <Benefits />
            <OpenAccount />
        </>
     );
}

export default SignUpPage;