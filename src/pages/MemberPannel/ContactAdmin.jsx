import React, { useState, useEffect } from 'react';
import './MemberPannel_Styles/ContactAdmin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ContactAdmin = () => {

  const navigate = useNavigate();

  const [seniorityId, setSeniorityId] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    const storedSeniorityId = sessionStorage.getItem('seniority_id');
    if (storedSeniorityId) {
      setSeniorityId(storedSeniorityId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // https://memberpanel.defencehousingsociety.com/contactadmin
      const response = await axios.post(`http://localhost:5000/contactadmin`, {
        seniorityId,
        subject,
        message,
      });

      setResponseMessage('Message sent successfully');
    } catch (error) {
      setResponseMessage('Failed to send message');
      console.error('Error sending message', error);
    }
  };

  return (
    <div className="contact-admin">
      <i className="bi bi-arrow-left-circle back-icon1"
        onClick={() => navigate('/dashboard')}
        title="Back to Dashboard"></i>
      <h2>Contact Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seniority ID:</label>
          <input
            type="text"
            value={seniorityId}
            readOnly
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactAdmin;