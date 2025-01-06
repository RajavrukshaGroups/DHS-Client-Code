import React from "react";
import './mainheader.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhone, faUser, faDesktop } from '@fortawesome/free-solid-svg-icons';

// functional components
const MainHeader = () => {
    return (
        <> 
            <div className="header-top sticky">
                <div className="top-inner clearfix">
                    <div className="left-column pull-left">
                        <ul className="info clearfix">
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Bangalore, Karnataka, India</li>
                            <li><FontAwesomeIcon icon={faClock} /> Wed - Mon | 9.30AM - 6.30PM</li>
                            <li><FontAwesomeIcon icon={faPhone} /> 080 - 29903931</li>
                        </ul>
                    </div>
                    <div className="right-column pull-rights">
                        <div className="sign-box" style={{ borderRight: '1px solid grey', paddingRight: '10px' }}>
                            <a href="/memberlogin"><FontAwesomeIcon icon={faUser} /> Member Login</a>
                        </div>
                        <div className="sign-box" style={{ paddingLeft: '10px' }}>
                            <a href="/online_application"><FontAwesomeIcon icon={faDesktop} /> Online Application</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainHeader;
