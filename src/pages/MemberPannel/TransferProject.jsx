import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MemberPannel_Styles/TransferProject.css';

const TransferProject = () => {
  const navigate = useNavigate();
  const [transferData, setTransferData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransferData = async () => {
      const seniorityId = sessionStorage.getItem('seniority_id');

      if (!seniorityId) {
        setError('No seniority ID found in session');
        setLoading(false);
        return;
      }

      try {
        // const response = await axios.get('https://memberpanel.defencehousingsociety.com/transferproject', {
          const response = await axios.get('http://localhost:5000/transferproject', {

          params: { seniority_id: seniorityId }
        });
        setTransferData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransferData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="container">
      <div className="header">
        <i className="bi bi-arrow-left-circle tback-icon" onClick={() => navigate('/dashboard')}></i>
        <h1 className="ttitle">Transfer Project</h1>
      </div>
      <div className="separator"></div>
      <div className="separator"></div>
      <div className="table-responsive">

        <table className="transfer-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>From</th>
              <th>To</th>
              <th>Project Name</th>
              <th>Seniority ID</th>
              <th>Transfer Date</th>
              <th>Transfer Reason</th>
            </tr>
          </thead>
          <tbody>
            {transferData.length > 0 ? (
              transferData.map((data, index) => (
                <tr key={data.transfer_id}>
                  <td>{index + 1}</td>
                  <td>{data.username_from}</td>
                  <td>{data.username_to}</td>
                  <td>{data.pro_name}</td>
                  <td>{data.seniority_id}</td>
                  <td>{formatDate(data.transferdate)}</td>
                  <td>{data.reason}</td>
                </tr>
              ))
            ) : (
              <tr className="no-records">
                <td colSpan="7">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransferProject;
