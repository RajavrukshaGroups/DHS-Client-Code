import React from 'react';
import Marquee from 'react-fast-marquee';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import './styles/privacypolicy.css';


const PrivacyPolicy = () => {

  return (

    <Container fluid className="contactus">
      <div className="banner-privacy">
        <div className="banner-content-contact">
          <h1 style={{ color: 'white' }}>Privacy Policy </h1>
        </div>
      </div>

      <section className="privacy-policy-section sec-pad-2"  >
        <div className="auto-container autoc centered">
          <div className="sec-titless centered">
            {/* <h2>Privacy Policy</h2> */}
          </div>
          <div className="privacy-policy-content">
            <h3 className="privacy-policy-header">1. Introduction</h3>
            <p>We at Defence Habitat Housing Co-Operative Society Ltd are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you disagree with the terms of this privacy policy, please do not access the site.</p>

            <h3 className="privacy-policy-header">2. Information We Collect</h3>
            <p><strong>Personal Data</strong> We may collect personally identifiable information ("Personal Data") about you when you voluntarily provide this information to us. This may include:</p>
            <ul className="privacy-policy-list">
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Mailing address</li>
              <li>Location</li>
              <li>Any other information you provide to us directly</li>
            </ul>

            <h3 className="privacy-policy-header">3. How We Use Your Information</h3>
            <p>We use the information we collect in the following ways:</p>
            <ul className="privacy-policy-list">
              <li>To provide, operate, and maintain our Site</li>
              <li>To improve, personalize, and expand our Site</li>
              <li>To understand and analyze how you use our Site</li>
              <li>To develop new products, services, and features</li>
            </ul>

            <h3 className="privacy-policy-header">4. Sharing Your Information</h3>
            <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.</p>

            <h3 className="privacy-policy-header">5. Protecting Your Information</h3>
            <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.</p>

            <h3 className="privacy-policy-header">6. Changes to This Privacy Policy</h3>
            <p>Defence Habitat Housing Co-Operative Society Ltd has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. By using this Site, you signify your acceptance of this policy. If you do not agree to our above policies, please refrain from using our website. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;