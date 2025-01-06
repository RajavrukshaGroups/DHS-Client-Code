import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MemberPannel_Styles/dashboard.css';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [sid, setId] = useState('');
  const [img, setImg] = useState('');
  const [userId, setUserid] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const seniorityId = sessionStorage.getItem('seniority_id');

      if (!seniorityId) {
        setError('No seniority ID found in session');
        alert('Please login');
        navigate('/memberlogin');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/dashboard', {
        // const response = await axios.get('https://memberpanel.defencehousingsociety.com/dashboard', {
          params: { seniority_id: seniorityId }
        });
        const userData = response.data;
        console.log("userdata",userData);
        if (userData.length > 0) {
          setName(userData[0].username);
          setId(userData[0].senior_id);
          const imageBase64 = userData[0].user_photo;
          setImg(imageBase64)
          setUserid(userData[0].user_pk)

          // Log base64 data to console for debugging
          console.log('Base64 Image Data:', imageBase64);

          // Validate base64 data
          // if (imageBase64.startsWith('data:image/jpeg;base64,')) {
          //   setImg(imageBase64);
          // } else {
          //   setImg(`data:image/jpeg;base64,${imageBase64}`);
          // }
        } else {
          setError('User data not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);
  const handleViewConfirmation = (userId) => {
    window.location.href = `http://adminpanel.defencehousingsociety.com/confirmationletterviewonly?user_pk=${userId}`;
  };

  const handleViewShareCert = (userId) => {
    window.location.href = `http://adminpanel.defencehousingsociety.com/viewonlysharecer?user_pk=${userId}`;
  };



  if (loading) return <p>Loading...</p>;
  const handleResetPasswordClick = () => {
    navigate('/reset-password');
  };

  if (loading) return;
  const handleContactAdminClick = () => {
    navigate('/ContactAdmin');
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className="dashboard-left-content">
          <h2 className="dashboard-heading">Quick Information</h2>
          <ul>
            <li className="dashboard-item"><a href="/my-project">My Project</a></li>
            <li className="dashboard-item"><a href="/project-paid-amount">Project Paid Amount</a></li>
            <li className="dashboard-item"><a href="/transferproject">Number of Transferred Project</a></li>
            <li className="dashboard-item"><a
              style={{ color: '#24457b', cursor: 'pointer' }}
              onClick={() => handleViewConfirmation(userId)}>View Site Confirmation</a></li>
            <li className="dashboard-item"><a href="/extra-charges-amount">Extra Charges Amount</a></li>
            {/* <li className="dashboard-item"><a href="/view-receipt">View Receipt</a></li> */}
            <li className="dashboard-item"><a
              style={{ color: '#24457b', cursor: 'pointer' }}
              onClick={() => handleViewShareCert(userId)}>View Share Certificate</a></li>
            <li className="dashboard-item"><a href="/view-project-status">View Project Status</a></li>
          </ul>
        </div>
      </div>
      <div className="dashboard-right">
        <div className="user-card">
          {img ? (
            <img src={img} alt="User Photo" className="user-photo" />
          ) : (
            <p>No photo available</p>
          )}
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Seniority ID:</strong> {sid}</p>

          {/* . <button className="user-button">View Your Application</button> */}
          <button className="user-button" onClick={handleResetPasswordClick} >Reset Password</button>
          <button className="user-button" onClick={handleContactAdminClick}>Contact Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
