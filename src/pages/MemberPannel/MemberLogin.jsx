import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './MemberPannel_Styles/MemberLogin.css';

const MemberLogin = () => {
  const [seniorityId, setSeniorityId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response=await axios.post('https://memberpanel.defencehousingsociety.com/mlogin'
      const response = await axios.post('http://localhost:5000/mlogin', {
        seniority_id: seniorityId,
        password: password
      });

      if (response.data.seniority_id) {
        // Store seniority_id in session storage
        sessionStorage.setItem('seniority_id', response.data.seniority_id);

        // Redirect to the dashboard
        window.location.href = response.data.redirectUrl;
      } else {
        // Handle validation errors
        alert(response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };


  return (
    <Container fluid className="memberlogin">
      <div className="banner-member">
        <div className="banner-content-member">
          <h1 style={{ color: 'white' }}>Member Login</h1>
        </div>
      </div>
      <div className="tabs-content">
        <div className="tab active-tab" id="tab-1">
          <div className="inner-box-member">
            <form
              action="verify-member-login" // Modify the action URL if needed
              encType="multipart/form-data"
              method="post"
              className="default-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Seniority ID*</label>
                <input
                  type="text"
                  name="seniority_id"
                  required
                  value={seniorityId}
                  onChange={(e) => setSeniorityId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="theme-btn btn-one">
                  Login
                </button>
              </div>
            </form>
            {/* <div className="othre-text">
              <p>
                Have not any account?
                <a href="signup.html">Register Now</a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MemberLogin;