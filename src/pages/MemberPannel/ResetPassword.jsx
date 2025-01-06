import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MemberPannel_Styles/ResetPassword.css';
import { useNavigate } from 'react-router-dom';


const ResetPassword = () => {
  const navigate = useNavigate();

  const [seniorityId, setSeniorityId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Retrieve the seniority ID from session storage
    const storedSeniorityId = sessionStorage.getItem('seniority_id');
    if (storedSeniorityId) {
      setSeniorityId(storedSeniorityId);
    }
  }, []);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return false;
    }
    if (password.length < 3) {
      setError('Password must be at least 3 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword()) {
      const fromData = {
        seniorityId,
        password
      }

      try {
        const response = await axios.post('http://localhost:5000/resetpassword', fromData);
        // const response = await axios.post('https://memberpanel.defencehousingsociety.com/resetpassword', fromData);

        console.log(response.data);
        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form', error);
        alert('Error submitting form');
      }
    }
  };

  return (

    <div className="rscontainer">
      <i className="bi bi-arrow-left-circle back-icon1"
        onClick={() => navigate('/dashboard')}
        title="Back to Dashboard"></i>

      <div className="formWrapper">



        <h2 className="title">Reset Password</h2>
        {error && <div className="error">{error}</div>}
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="seniorityId" className="label">Seniority ID</label>
          <input
            type="text"
            id="seniorityId"
            className="input"
            value={seniorityId}
            readOnly
          />
          <label htmlFor="password" className="label">New Password</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirmPassword" className="label">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
