import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import './MemberPannel_Styles/Receipt.css';

const ReceiptList = () => {
  const navigate = useNavigate();
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatNumber = (number) => {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
  };

  console.log("receipts",receipts);


  useEffect(() => {
    const fetchReceipts = async () => {
      const seniorityId = sessionStorage.getItem('seniority_id');

      if (!seniorityId) {
        setError('No seniority ID found in session');
        setLoading(false);
        return;
      }

      try {
        // https://memberpanel.defencehousingsociety.com/fetchReceipts
        const response = await axios.get('http://localhost:5000/fetchReceipts', {
          params: { seniority_id: seniorityId }
        });
        setReceipts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReceipts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleViewReceipt = (receiptId) => {
    console.log("receiptId",receiptId);
    // http://adminpanel.defencehousingsociety.com/viewonlyrec?receiptId=${receiptId}
    window.location.href = `http://adminpanel.defencehousingsociety.com/viewonlyrec?receiptId=${receiptId}`;
  };

  return (
    <div className="container">
      <div className='header'>
        <i
          className="bi bi-arrow-left-circle rback-icon"
          onClick={() => navigate('/dashboard')}
          title="Back to Dashboard"
        ></i>
        <h1 className="title">Receipt Details</h1>

      </div>

      <div className="separator"></div>
      <div className="separator"></div>
      <div className="table-responsive">

        <table className="receipt-table">
          <thead>
            <tr>
              <th>Receipt Date</th>
              <th>Receipt No</th>
              <th>Payment Mode</th>
              <th>Cheque/DD/Transaction ID</th>
              <th>Paid Amount</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt, index) => (
              <tr key={index}>
                <td>{formatDate(receipt.receipt_date)}</td>
                <td>{receipt.receipt_no}</td>
                <td>{receipt.payment_mode}</td>
                <td>{receipt.cheque_dd_transaction_id}</td>
                <td>{formatNumber(receipt.payment_amnt)}/-</td>
                <td>
                  <button
                    onClick={() => handleViewReceipt(receipt.receipt_pk)}
                    className="view-receipt-button"
                  >
                    View Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceiptList;
