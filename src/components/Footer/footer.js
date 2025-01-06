import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter , faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './footer.css'; // Custom CSS for additional styling

import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container" style={{ color: 'white' }}>
                <div className="row">
                    <div className='col-md-4'>
                        {/* <h4 style={{ fontWeight: '900' }}>Defence Habitat Housing Co-Operative Society Ltd.</h4> */}
                        <img src={logo} alt="logo" style={{ height: '162px', width: '162px' }} />
                    </div>
                    <div className='col-md-4' style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontWeight: '900' }}>Contact Us</h4>
                        <p style={{ marginTop: '1rem', color: 'white' }}><FontAwesomeIcon icon={faMapMarkerAlt} /> Behind Swathi Garden Hotel, E Block, Sahakarnagar, Bangalore - 560092, Karnataka</p>
                        <p style={{ marginTop: '1rem', color: 'white' }}><FontAwesomeIcon icon={faPhone} /> <a href="tel:+918884735735" style={{ color: 'white' }}> +91-8884 735 735 </a></p>
                        <p style={{ marginTop: '1rem', color: 'white' }}><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@defencehabitat.com" style={{ color: 'white' }}>info@defencehousingsociety.com</a></p>
                    </div>
                    <div className='col-md-4' style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontWeight: '900' }}>Office Timings</h4>
                    <p style={{ marginTop: '1rem', color: 'white' }}>Wednesday to Monday</p>
                    <p style={{  color: 'white' }}>09:30 am : 06:30 pm</p>
                    <div>
                    <h6 style={{ fontWeight: '900', marginTop: '1rem'}}>Weekly Off</h6>
                    <p style={{  color: 'white' }}>Tuesday</p>



                    </div>


                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <p className="copyright" style={{ marginTop: '0rem', marginBottom: '1rem' }}>Designed by Rajavruskha Groups.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <p className="copyright" style={{ marginTop: '0rem', marginBottom: '1rem' }}>© 2024 DEFENCE HABITAT ALL RIGHT RESERVED.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12" style={{ marginTop: '-1rem' }}>
                        <a href='/PrivacyPolicy' className="copyright"> Privacy Policy</a>
                    </div>
                </div>
                {/* Social Media Icons */}
                <div className="social-media">
                    <a href="https://www.facebook.com/defencehabitat" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://twitter.com/DefenceSociety" target="_blank" rel="noopener noreferrer" className="social-icon twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="https://www.instagram.com/accounts/login/?next=/defence_habitat/" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://api.whatsapp.com/send/?phone=918884413931&text&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;