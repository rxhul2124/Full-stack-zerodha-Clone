import React from 'react';
import './Footer.css'

function Footer() {
    return ( 
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row p-4 m-2">
                        <div className="col-md-4 footerLogoSection">
                            <img src="media/images/logo.svg" alt="logo image" className='footerLogo'/>
                            <p className='footerText mt-2'><i className="fa-regular fa-copyright"></i> 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
                            <div>
                                <i className="fa-brands fa-x-twitter footerIcon"></i>
                                <i className="fa-brands fa-square-facebook footerIcon"></i>
                                <i className="fa-brands fa-instagram footerIcon"></i>
                                <i className="fa-brands fa-linkedin-in footerIcon"></i>
                            </div>
                            <hr />
                            <div>
                                <i className="fa-brands fa-youtube footerIcon"></i>
                                <i className="fa-brands fa-whatsapp footerIcon"></i>
                                <i className="fa-brands fa-telegram footerIcon"></i>
                            </div>
                        </div>
                        <div className="col-md-2 footerMainLinks">
                            <h6>Account</h6>
                            &nbsp;
                            <p>Open demat account</p>
                            <p>Minor demat account</p>
                            <p>NRI demat account</p>
                            <p>Commodity</p>
                            <p>Dematerialisation</p>
                            <p>Fund transfer</p>
                            <p>MTF</p>
                            <p>Referral program</p>
                        </div>
                        <div className="col-md-2 footerMainLinks">
                            <h6>Support</h6>
                            &nbsp;
                            <p>Contact us</p>
                            <p>Support portal</p>
                            <p>How to file a complaint?</p>
                            <p>Status of your complaints</p>
                            <p>Bulletin</p>
                            <p>Circular</p>
                            <p>Z-Connect blog</p>
                            <p>Downloads</p>
                        </div>
                        <div className="col-md-2 footerMainLinks">
                            <h6>Company</h6>
                            &nbsp;
                            <p>About</p>
                            <p>Philosophy</p>
                            <p>Press & media</p>
                            <p>Careers</p>
                            <p>Zerodha Cares (CSR)</p>
                            <p>Zerodha.tech</p>
                            <p>Open source</p>
                        </div>
                        <div className="col-md-2 footerMainLinks">
                            <h6>Quick links</h6>
                            &nbsp;
                            <p>Upcoming IPOs</p>
                            <p>Brokerage charges</p>
                            <p>Market holidays</p>
                            <p>Economic calendar</p>
                            <p>Calculators</p>
                            <p>Markets</p>
                            <p>Sectors</p>
                        </div>
                    </div>
                    <div className="row p-4 m-md-2 footerBottomText">
                        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@zerodha.com</a>, for DP related to <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                        <p>Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                        <a href="#">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                        <p>India's largest broker based on networth as per NSE. <a href="#">NSE broker factsheet</a></p>
                        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#">create a ticket here</a>.</p>
                        <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
                    </div>
                    <div className="row footerBottomLinks p-4 m-2">
                        <a className='col-1' href="#">NSE</a>
                        <a className='col-1' href="#">BSE</a>
                        <a className='col-1' href="#">MCX</a>
                        <a className='col-2' href="#">Terms & Conditions</a>
                        <a className='col-1' href="#">Procedures</a>
                        <a className='col-2' href="#">Privacy policy</a>
                        <a className='col-1' href="#">Discloser</a>
                        <a className='col-2' href="#">For investors attention</a>
                        <a className='col-1' href="#">Investor</a>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;