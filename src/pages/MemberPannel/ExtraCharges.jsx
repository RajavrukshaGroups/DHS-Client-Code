import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './MemberPannel_Styles/ExtraCharges.css'

const ExtraCharges = () => {
  const navigate = useNavigate();
  const [transferData, setTransferData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatNumber = (number) => {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
  };

  useEffect(() => {
    const fetchTransferData = async () => {
      const seniorityId = sessionStorage.getItem('seniority_id');
      if (!seniorityId) {
        setError('No seniority ID found in session');
        setLoading(false);
        return;
      }

      try {
        // https://memberpanel.defencehousingsociety.com/extracharges
        const response = await axios.get('https://memberpanel.defencehousingsociety.com/extracharges', {
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
        <i className="bi bi-arrow-left-circle eback-icon" onClick={() => navigate('/dashboard')}></i>
        <h1 className="etitle">Extra Charges</h1>
      </div>
      <div className="eseparator"></div>
      <div className="eseparator"></div>
      <div className="table-responsive">
        <table className="extra-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Paid Date</th>
              <th>Paid Amount</th>
              <th>Cheque/DD/Transaction ID</th>
              <th>Seniority ID</th>
              {/* <th>Transfer Date</th> */}
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {transferData.length > 0 ? (
              transferData.map((data, index) => (
                <tr key={data.transfer_id}>
                  <td>{index + 1}</td>
                  <td>{formatDate(data.paid_date)}</td>
                  {/* <td>{data.paid_date}</td> */}
                  <td>{formatNumber(data.cheque_amnt)}/-</td>
                  <td>{data.cheque_no}</td>
                  <td>{data.user_seniority_id}</td>
                  {/* <td>{formatDate(data.transferdate)}</td> */}
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
}

export default ExtraCharges