import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const navbar = () => {
  return (
        <section className='footer'>
        <div className='footer-top'>
            Anushoopy
            <ScrollToTop smooth/>
        </div>
        <div className='footer-main'>
            <div className='footer-card'>
                <h1>Get to know Us</h1>
                <h4>About</h4>
                <h4>Careers</h4>
                <h4>Press Release</h4>
                <h4>Anushoopy Sciences</h4>
            </div>
            <div className='footer-card'>
                <h1>Connect with Us</h1>
                <h4>Instagram</h4>
                <h4>Twitter</h4>
                <h4>Facebook</h4>
                <h4>Github</h4>
            </div>
            <div className='footer-card'>
                <h1>Make Money with Us</h1>
                <h4>Sell on Anushoopy</h4>
                <h4>Become an Affiliate</h4>
                <h4>Advertise Your Products</h4>
                <h4>Anushoopy Pay on Merchants</h4>
            </div>
            <div className='footer-card'>
                <h1>Let Us Help You</h1>
                <h4>Sell on Anushoopy</h4>
                <h4>Your Account</h4>
                <h4>Anushoopy App Download</h4>
                <h4>Help</h4>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='bottom-card'>
            <p>Conditions of Use & Sale &nbsp;&nbsp; Privacy Notice &nbsp;&nbsp; Interest-Based Ads</p>
            <p> © 2002-2023, AnuShoopy.com, Inc. or its affiliates</p>
            </div>
        </div>
        </section>
  )
}

export default navbar