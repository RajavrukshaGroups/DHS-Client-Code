// src/pages/MarasandraPage/MarasandraPage.js

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Card, Container, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { FaUserTie, FaAddressCard, FaBuilding, FaMoneyCheckAlt } from 'react-icons/fa';
import './styles/OnlineApplication.css';




const OnlineApplication = () => {

  const navigate = useNavigate();

  const [referenceName, setReferenceName] = useState('');
  const [referenceRank, setReferenceRank] = useState('');
  const [referenceServiceId, setReferenceServiceId] = useState('');
  const [referenceRelationship, setReferenceRelationship] = useState('');

  // State variables for Personal Details
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [personalName, setPersonalName] = useState('');
  const [fatherSpouseName, setFatherSpouseName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paddress, setpAddress] = useState('');
  const [caddress, setcAddress] = useState('');
  const [waddress, setwAddress] = useState('');
  const [remark, setRemark] = useState('');
  const [propertyName] = useState('DEFENCE HABITAT');
  const [propertyType, setPropertyType] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [projectNames, setProjectNames] = useState([]);
  const [plotDimensions, setPlotDimensions] = useState([]);



  // nominee credentials 

  const [nomineeName, setnomineeName] = useState('');
  const [nomineeAge, setnomineeAge] = useState('');
  const [nomineeRelationship, setnomineeRelationship] = useState('');
  const [nomineeAddress, setnomineeAddress] = useState('');



  // Membership payment Details
  const [mempaymentMode, setmempaymentMode] = useState('');
  const [memBankname, setmemBankname] = useState('');
  const [memBranch, setmemBranch] = useState('');
  const [memPaydate, setmemPaydate] = useState('');
  const [memAmount] = useState('2500')
  const [memRefnum, setmemRefnum] = useState('');



  // State variables for Payment Details
  const [paymentMode, setPaymentMode] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [amount, setAmount] = useState('');
  const [amountInWords, setAmountInWords] = useState('');
  const [ddChequeRefNumber, setDdChequeRefNumber] = useState('');
  const [paymentType, setPaymentType] = useState('');


  // otp setup 
  const [otp, setOtp] = useState('');
  const [formId, setFormId] = useState('');
  const [step, setStep] = useState(1); // 1: Form, 2: OTP Verification
  const [otpError, setOtpError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [showErrorModal, setShowErrorModal] = useState(false); // State for error modal visibility
  const [errorMessage, setErrorMessage] = useState(''); // State for error message



  // captcha 
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(null);


  const [formData, setFormData] = useState({
    referenceName: '',
    referenceRank: '',
    referenceServiceId: '',
    referenceRelationship: '',
    personalName: '',
    dob: '',
    age: '',
    fatherSpouseName: '',
    phone: '',
    email: '',
    paddress: '',
    caddress: '',
    waddress: '',
    remark: '',
    propertyName: '',
    propertyType: '',
    propertySize: '',
    nomineeName: '',
    nomineeAge: '',
    nomineeRelationship: '',
    nomineeAddress: '',
    mempaymentMode: '',
    memBankname: '',
    memBranch: '',
    memPaydate: '',
    memAmount: '',
    memRefnum: '',
    paymentType: '',
    paymentMode: '',
    bankName: '',
    branchName: '',
    amount: '',
    amountInWords: '',
    ddChequeRefNumber: '',
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    let generatedCaptcha = '';
    for (let i = 0; i < 6; i++) {
      generatedCaptcha += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    setCaptcha(generatedCaptcha);
    setCaptchaInput('');
    setIsCaptchaValid(null);
  };

  //  const generateCaptcha = () => {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   let result = '';
  //   const length = 6; // Length of the CAPTCHA
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   return result;
  // };


  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);




  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setIsCaptchaValid(null);
  };

  const validateCaptcha = () => {
    if (captchaInput === captcha) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  useEffect(() => {
    // Fetch project names from API
    axios.get('https://memberpanel.defencehousingsociety.com/api/projectNames')

      // axios.get('http://localhost:5000/api/projectNames')
      .then(response => {
        setProjectNames(response.data);
      })
      .catch(error => {
        console.error('Error fetching project names:', error);
      });
  }, []);


  useEffect(() => {
    axios.get('https://memberpanel.defencehousingsociety.com/api/plotDimensions')
      // axios.get('http://localhost:5000/api/plotDimensions')
      .then(response => {
        setPlotDimensions(response.data);
      })
      .catch(error => {
        console.error('Error fetching plot dimensions:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };




  const CaphandleInputChange = (e) => {
    setCaptchaInput(e.target.value);
    setIsCaptchaValid(null);
  };







  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner



    if (step === 1) {
      // Submit form data and request OTP
      const formData = {
        referenceName,
        referenceRank,
        referenceServiceId,
        referenceRelationship,
        personalName,
        dob,
        age,
        fatherSpouseName,
        phone,
        email,
        paddress,
        caddress,
        waddress,
        remark,
        propertyName,
        propertyType,
        propertySize,
        nomineeName,
        nomineeAge,
        nomineeRelationship,
        nomineeAddress,
        mempaymentMode,
        memBankname,
        memBranch,
        memPaydate,
        memAmount,
        memRefnum,
        paymentType,
        paymentMode,
        bankName,
        branchName,
        amount,
        amountInWords,
        ddChequeRefNumber
      };

      try {
        // const response = await axios.post('http://localhost:5000/api/submit', formData);
        const response = await axios.post('https://memberpanel.defencehousingsociety.com/api/submit', formData);

        setFormId(response.data.formId);
        setOtpSent(true); // Show OTP input field
        setStep(2); // Move to OTP verification step
      } catch (error) {
        console.error('Error submitting form', error);
        setErrorMessage('Error submitting form. Please try again.');
        setShowErrorModal(true); // Show error modal
      } finally {
        setLoading(false); // Hide the loading spinner
      }
    } else if (step === 2) {
      // Verify OTP and complete form submission
      try {
        // const response = await axios.post('http://localhost:5000/api/verify-otp-and-submit', { formId, otp });
        const response = await axios.post('https://memberpanel.defencehousingsociety.com/api/verify-otp-and-submit', { formId, otp });

        if (response.data.success) {
          setShowModal(true); // Show the success modal
        } else {
          setOtpError('Invalid OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error verifying OTP', error);
        setErrorMessage('Error verifying OTP. Please try again.');
        setShowErrorModal(true); // Show error modal
      } finally {
        setLoading(false); // Hide the loading spinner
      }
    }
  };



  const handleResendOtp = async () => {
    setLoading(true); // Show loading spinner while OTP is being resent

    try {
      const formData = {
        referenceName,
        referenceRank,
        referenceServiceId,
        referenceRelationship,
        personalName,
        dob,
        age,
        fatherSpouseName,
        phone,
        email,
        paddress,
        caddress,
        waddress,
        remark,
        propertyName,
        propertyType,
        propertySize,
        nomineeName,
        nomineeAge,
        nomineeRelationship,
        nomineeAddress,
        mempaymentMode,
        memBankname,
        memBranch,
        memPaydate,
        memAmount,
        memRefnum,
        paymentType,
        paymentMode,
        bankName,
        branchName,
        amount,
        amountInWords,
        ddChequeRefNumber
      };

      // const response = await axios.post('http://localhost:5000/api/submit', formData);
      const response = await axios.post('https://memberpanel.defencehousingsociety.com/api/submit', formData);

      if (response.data.formId) {
        setFormId(response.data.formId); // Update formId
        alert('OTP has been resent to your email.');
      } else {
        alert('Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error resending OTP', error);
      alert('Error resending OTP');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };


  const handleCloseModal = () => {
    setShowModal(false);
    // Redirect to home screen or reset form
    window.location.href = '/'; // Redirects to the home screen
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };




  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);

    // Convert amount to words (Indian numbering system)
    setAmountInWords(convertAmountToWords(amount));
  };


  const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  const scales = [
    "", "thousand", "lakh", "crore"
  ];

  const getHundreds = (num) => {
    let hundredPart = Math.floor(num / 100);
    let remainder = num % 100;
    let result = "";

    if (hundredPart > 0) {
      result += ones[hundredPart] + " hundred";
      if (remainder > 0) {
        result += " and ";
      }
    }

    if (remainder > 0) {
      if (remainder < 20) {
        result += ones[remainder];
      } else {
        result += tens[Math.floor(remainder / 10)];
        if (remainder % 10 > 0) {
          result += "-" + ones[remainder % 10];
        }
      }
    }

    return result;
  };

  const convertAmountToWords = (amount) => {
    if (amount === 0) return "zero";

    let result = "";
    let scaleIndex = 0;

    if (amount >= 10000000) {
      result += getHundreds(Math.floor(amount / 10000000)) + " crore ";
      amount = amount % 10000000;
    }

    if (amount >= 100000) {
      result += getHundreds(Math.floor(amount / 100000)) + " lakh ";
      amount = amount % 100000;
    }

    if (amount >= 1000) {
      result += getHundreds(Math.floor(amount / 1000)) + " thousand ";
      amount = amount % 1000;
    }

    if (amount > 0) {
      result += getHundreds(amount);
    }

    return result.trim();
  };

  const handleDobChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const calculatedAge = today.getFullYear() - selectedDate.getFullYear();
    setDob(e.target.value);
    setAge(calculatedAge);
  };

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handleReload = () => {
    generateCaptcha();
  };



  return (
    <Container fluid className="online-application">
      <div className="banner">
        <div className="banner-content">
          <h1 style={{ color: 'white' }}>ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.</h1>
          <h1 style={{ color: 'white' }}>DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD. </h1>
          <h3>Reg. No.:- HSG-3/64/HHS/53744.</h3>
        </div>
      </div>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}


      <Form onSubmit={handleSubmit}>
        {/* Form Details */}
        {step === 1 && (
          <>
            <Card className="property-card shadow-sm">
              <Card.Body>
                <div className="card-title application">
                  <FaUserTie size={24} className="title-icon" />
                  <h2>REFERENCE DETAILS :</h2>
                </div>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formReferenceName">
                      <Form.Label className='form-fields'>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name"
                        value={referenceName}
                        onChange={(e) => setReferenceName(e.target.value)}
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formReferenceRank">
                      <Form.Label className='form-fields'>Rank/Designation</Form.Label>
                      <Form.Control type="text" value={referenceRank} onChange={(e) => setReferenceRank(e.target.value)} placeholder="Enter rank/designation" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formReferenceServiceId">
                      <Form.Label className='form-fields'>Service/ID No</Form.Label>
                      <Form.Control type="text" value={referenceServiceId} onChange={(e) => setReferenceServiceId(e.target.value)} placeholder="Enter service/ID no" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formReferenceRelationship">
                      <Form.Label className='form-fields'>Relationship With Applicant</Form.Label>
                      <Form.Control type="text"
                        value={referenceRelationship}
                        onChange={(e) => setReferenceRelationship(e.target.value)}
                        placeholder="Enter relationship" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="property-card shadow-sm">
              <Card.Body>
                <div className="card-title application">
                  <FaAddressCard size={24} className="title-icon" />
                  <h2>PERSONAL DETAILS :</h2>
                </div>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formPersonalName">
                      <Form.Label className='form-fields'>Name</Form.Label>
                      <Form.Control type="text"
                        value={personalName}
                        onChange={(e) => setPersonalName(e.target.value)}
                        placeholder="Enter name" required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPersonalDob">
                      <Form.Label className='form-fields'>Date of Birth</Form.Label>
                      <Form.Control type="date" value={dob}
                        onChange={handleDobChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPersonalAge">
                      <Form.Label className='form-fields'>Age</Form.Label>
                      <Form.Control type="text" value={age} readOnly />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formPersonalFatherSpouse">
                      <Form.Label className='form-fields'>Father's/Spouse Name</Form.Label>
                      <Form.Control type="text"
                        value={fatherSpouseName}
                        onChange={(e) => setFatherSpouseName(e.target.value)}

                        placeholder="Enter father's/spouse name"
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPersonalPhone">
                      <Form.Label className='form-fields'>Phone No</Form.Label>
                      <Form.Control type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPersonalEmail">
                      <Form.Label className='form-fields'>Email ID</Form.Label>
                      <Form.Control type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPersonalPermanentAddress">
                      <Form.Label className='form-fields'>Permanent Address</Form.Label>
                      <Form.Control as="textarea" rows={3}
                        value={paddress}
                        onChange={(e) => setpAddress(e.target.value)}
                        style={{ resize: 'none' }}

                        placeholder="Enter permanent address"
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPersonalCorrespondenceAddress">
                      <Form.Label className='form-fields'>Correspondence Address</Form.Label>
                      <Form.Control as="textarea" rows={3}
                        value={caddress}
                        onChange={(e) => setcAddress(e.target.value)}
                        style={{ resize: 'none' }}
                        placeholder="Enter correspondence address"
                        required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPersonalWorkingAddress">
                      <Form.Label className='form-fields'>Working Address</Form.Label>
                      <Form.Control as="textarea" rows={3}
                        value={waddress}
                        onChange={(e) => setwAddress(e.target.value)}
                        style={{ resize: 'none' }}
                        placeholder="Enter working address" required />

                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPersonalRemark">
                      <Form.Label className='form-fields'>Remark, If Any</Form.Label>
                      <Form.Control as="textarea" rows={3}
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                        style={{ resize: 'none' }}
                        placeholder="Enter remark" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPersonalPhoto">
                      <Form.Label className='form-fields'>Member Photo</Form.Label>
                      <Form.Control type="file" accept="image/*" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPersonalSignaturePhoto">
                      <Form.Label className='form-fields'>Member Signature Photo</Form.Label>
                      <Form.Control type="file" accept="image/*" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Property Details  */}

            <Card className="property-card shadow-sm">
              <Card.Body>
                <div className="card-title application">
                  <FaBuilding size={26} className="title-icon" />
                  <h2>PROPERTY DETAILS :</h2>
                </div>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formPropertyName">
                      <Form.Label className='form-fields'>Property Name</Form.Label>
                      <Form.Control type="text" value="DEFENCE HABITAT" readOnly />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPropertyType">
                      <Form.Label className='form-fields'>Property Type</Form.Label>
                      <div className="dropdown-input">
                        <Form.Control as="select" defaultValue="">
                          <option value="" disabled>Select property type</option>
                          {projectNames.map((project) => (
                            <option key={project.project_id} value={project.pro_name}>
                              {project.pro_name}
                            </option>
                          ))}
                        </Form.Control>
                        <div className="dropdown-symbol">
                          <span>&#9660;</span>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPropertyLocation">
                      <Form.Label className='form-fields'>Property Location</Form.Label>
                      <div className="dropdown-input">
                        <Form.Control as="select" defaultValue="">
                          <option value="" disabled>Select property location</option>
                          {plotDimensions.map(plot => (
                            <option key={plot.plotsize_pk} value={plot.plotsize_pk}>
                              {plot.dimension}
                            </option>
                          ))}
                        </Form.Control>
                        <div className="dropdown-symbol">
                          <span>&#9660;</span>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>


            <Card className="property-card shadow-sm">
              <Card.Body>
                <div className="card-title application">
                  <FaUserTie size={24} className="title-icon" />
                  <h2>NOMINEE PARTICULARS :</h2>
                </div>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formnomineeName">
                      <Form.Label className='form-fields'>Name</Form.Label>
                      <Form.Control type="text"
                        value={nomineeName}
                        onChange={(e) => setnomineeName(e.target.value)}

                        placeholder="Enter name"
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formnomineeAge">
                      <Form.Label className='form-fields'>Age</Form.Label>
                      <Form.Control type="text"
                        value={nomineeAge}
                        onChange={(e) => setnomineeAge(e.target.value)}
                        placeholder="Enter Age"
                        required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formnomineeRelationship">
                      <Form.Label className='form-fields'>Relationship </Form.Label>
                      <Form.Control
                        type="text"
                        value={nomineeRelationship}
                        onChange={(e) => setnomineeRelationship(e.target.value)}
                        placeholder="Enter Relationship"
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formnomineeAddress">
                      <Form.Label className='form-fields'>Address </Form.Label>
                      <Form.Control type="text"
                        value={nomineeAddress}
                        onChange={(e) => setnomineeAddress(e.target.value)}
                        placeholder="Enter Address "
                        required />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* membership payment details  */}
            <Card className="property-card shadow-sm">
              <Card.Body>
                <div className="card-title application">
                  <FaMoneyCheckAlt size={26} className="title-icon" />
                  <h2>MEMBERSHIP PAYMENT DETAILS :</h2>
                </div>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formPaymentMode">
                      <Form.Label className='form-fields'>Payment Mode</Form.Label>
                      <div className="dropdown-input">
                        <Form.Control as="select"
                          value={mempaymentMode}
                          onChange={(e) => setmempaymentMode(e.target.value)}
                          required>
                          <option value="" disabled>Select payment mode</option>
                          <option value="DD">DD</option>
                          <option value="Cheque">Cheque</option>
                          <option value="Online">Online</option>
                        </Form.Control>
                        <div className="dropdown-symbol">
                          <span>&#9660;</span>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formBankName">
                      <Form.Label className='form-fields'>Bank Name</Form.Label>
                      <Form.Control type="text"
                        placeholder="Enter bank name"
                        value={memBankname}
                        onChange={(e) => setmemBankname(e.target.value)}
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formBranch">
                      <Form.Label className='form-fields'>Branch</Form.Label>
                      <Form.Control type="text"
                        placeholder="Enter branch"
                        value={memBranch}
                        onChange={(e) => setmemBranch(e.target.value)}
                        required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formPaymentDate">
                      <Form.Label className='form-fields'>Payment Date</Form.Label>
                      <Form.Control type="date"
                        value={memPaydate}
                        onChange={(e) => setmemPaydate(e.target.value)}
                        required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formAmount">
                      <Form.Label className='form-fields'>Amount</Form.Label>
                      <Form.Control type="text" value={2500} readOnly />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formReferenceNumber">
                      <Form.Label className='form-fields'>DD/Cheque/Reference Number</Form.Label>
                      <Form.Control type="text"
                        placeholder="Enter DD/Cheque/Reference number"
                        value={memRefnum}
                        onChange={(e) => setmemRefnum(e.target.value)}
                        required />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="property-card shadow-sm">
              <Card.Body>
                <div className="card-title application">
                  <FaMoneyCheckAlt size={26} className="title-icon" />
                  <h2>PURCHASE OF SITE PAYMENT DETAILS :</h2>
                </div>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formPaymentType">
                      <Form.Label className='form-fields'>Payment Type</Form.Label>
                      <div className="dropdown-input">
                        <Form.Control
                          as="select"
                          value={paymentType}
                          onChange={(e) => setPaymentType(e.target.value)}
                          required
                        >
                          <option>Select payment type</option>
                          <option>Site Advance</option>
                          <option>1st Installment</option>
                          <option>2nd Installment</option>
                          <option>3rd Installment</option>
                        </Form.Control>
                        <div className="dropdown-symbol">
                          <span>&#9660;</span>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formPaymentMode">
                      <Form.Label className='form-fields'>Payment Mode</Form.Label>
                      <div className="dropdown-input">
                        <Form.Control
                          as="select"
                          value={paymentMode}
                          onChange={(e) => setPaymentMode(e.target.value)}
                          required
                        >
                          <option>Select Payment</option>
                          <option>DD</option>
                          <option>Cheque</option>
                          <option>Online</option>
                        </Form.Control>
                        <div className="dropdown-symbol">
                          <span>&#9660;</span>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formBankName">
                      <Form.Label className='form-fields'>Bank Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter bank name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId="formBranchName">
                      <Form.Label className='form-fields'>Branch Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter branch name"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formAmount">
                      <Form.Label className='form-fields'>Enter Amount</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={handleAmountChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="formAmountInWords">
                      <Form.Label className='form-fields'>Amount in Words</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Amount in words"
                        value={amountInWords}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formDdChequeRefNumber">
                      <Form.Label className='form-fields'>DD/Cheque/Reference Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter DD/Cheque/Reference number"
                        value={ddChequeRefNumber}
                        onChange={(e) => setDdChequeRefNumber(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>

              {/* captcha */}



              <div className="captchaBox card">
                <div className="captcha-box">
                  <p className="captcha-text">{captcha}</p>
                  <button className="reload-btn" onClick={handleReload}>
                    <FontAwesomeIcon icon={faSyncAlt} />
                  </button>
                </div>
                <input
                  type="text"
                  className={`inputBox ${isCaptchaValid === false && 'is-invalid'}`}
                  placeholder="Enter CAPTCHA text"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  required
                />
                {isCaptchaValid === true && (
                  <div className="valid-feedback">
                    <FontAwesomeIcon icon={faCheckCircle} /> CAPTCHA matched!
                  </div>
                )}
                {isCaptchaValid === false && (
                  <div className="invalid-feedback">
                    <FontAwesomeIcon icon={faTimesCircle} /> CAPTCHA does not match.
                  </div>
                )}
                <button className="submitBtn" onClick={validateCaptcha}>
                  Submit
                </button>
              </div>

              <Row className="mt-3">
                <Col md={6} className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="submit">Preview</Button>
                </Col>
              </Row>
            </Card>

          </>
        )}



        {step === 2 && (
          <Card className="property-card shadow-sm">
            <Card.Body>
              <div className="card-title application">
                <h2>We've sent an OTP to {email}. Please input the code to continue.</h2>
              </div>
              <Form.Group controlId="formOtp">
                <Form.Label className='form-fields'>OTP</Form.Label>
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                />
                {otpError && <p className="text-danger">{otpError}</p>}
              </Form.Group>
              <Button variant="primary" type="submit">Verify OTP</Button>
              <Button
                variant="link"
                className="mt-2"
                onClick={handleResendOtp}
                disabled={loading}
              >
                Resend OTP
              </Button>
            </Card.Body>
          </Card>
        )}

        {/* <Button variant="primary" type="submit">Submit</Button> */}
        {loading && <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>}
      </Form>
      {/* Success Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for submitting the form. Our team will be in touch with you shortly.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Back to Home
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default OnlineApplication;