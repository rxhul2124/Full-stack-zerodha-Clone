import React from 'react';
import './SignUp.css'

function SignUp() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row p-4 m-3 text-center lh-1 opacity-75">
                    <h4 className='p-2'>Open a free demat and trading account online</h4>
                    <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                </div>
                <div className="row p-4 m-3">
                    <div className="col-7">
                        <img className='SignUpImage' src='media/images/account_open.svg'/>
                    </div>
                    <div className="col-5 mt-2">
                        <h4 className='opacity-75'>Signup now</h4>
                        <p className='opacity-75'>Or track your existing application</p>
                        <form class="needs-validation" novalidate>
                            <div className="input-group mt-4">
                                <span className="input-group-text" id="visible-addon"><img src="media/images/india-flag.svg" alt="" />&nbsp; +91</span>
                                <input type="tel" class="form-control" id="mobile" pattern="[6-9][0-9]{9}" maxlength="10" placeholder="Enter 10-digit mobile number" required />
                                <div class="invalid-feedback">
                                    Please enter a valid 10-digit mobile number.
                                </div>
                            </div>
                            <button className='btn btn-primary mt-4 signUpButton' type='submit'>Get OTP</button>
                        </form>
                        <div className="row mt-4 signUpCondition opacity-75">
                            <p>By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a></p>
                            <p>Looking to open NRI account? <a href="#">Click here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default SignUp;