import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../pages/styles/Popup.css";
import { FaUser } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMessage2Line } from "react-icons/ri";
import { Filter } from "bad-words";

function PopupButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const filter = new Filter();

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("formSubmitted");
    if (hasSubmitted !== "true") {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      filter.isProfane(name) ||
      filter.isProfane(message) ||
      filter.isProfane(location) ||
      filter.isProfane(email)
    ) {
      alert("Your input contains inappropriate language.");
      setName("");
      setEmail("");
      setNumber("");
      setLocation("");
      setMessage("");
      return;
    }
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      location.trim() === "" ||
      message.trim() === ""
    ) {
      return alert("please fill all the fields");
    }
    if (number !== null && number.toString().length !== 10) {
      return alert("Phone number must have exactly 10 digits");
    }
    const data = { name, email, number, location, message };
    try {
      // const response = await axios.post(
      //   "http://localhost:5000/submitPopupData",
      //   data
      // );
      const response = await axios.post('https://memberpanel.defencehousingsociety.com/submitPopupData', data);

      if (response.status === 200) {
        setFeedbackMessage(response.data.message);
        alert(response.data.message);
        localStorage.setItem("formSubmitted", "true");
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      // Handle 500 or other errors
      if (error.response && error.response.status === 500) {
        alert("Failed to send details. Please try again later.");
      } else {
        alert("An error occurred: " + error.message);
      }
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header
          style={{
            paddingLeft: "20px",
            color: "white",
            background: "linear-gradient(105deg, #6e99e6, #093c94)",
          }}
        >
          <Modal.Title style={{ fontSize: "24px", margin: "auto" }}>
            Book your site visit today
          </Modal.Title>
          <button
            type="button"
            className="custom-close-btn"
            onClick={handleClose}
          ></button>
        </Modal.Header>
        <div style={{ padding: "16px" }}>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <div className="input-icon-wrapper">
                  <FaUser className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: "35px" }}
                  />
                  <FaUser className="input-icon" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <div className="input-icon-wrapper">
                  <BsTelephoneForward className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: "35px" }}
                  />
                  <BsTelephoneForward className="input-icon" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <div className="input-icon-wrapper">
                  <MdEmail className="input-icon" />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: "35px" }}
                  />
                  <MdEmail className="input-icon" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLocation">
                <div className="input-icon-wrapper">
                  <HiOutlineLocationMarker className="input-icon" />
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: "35px" }}
                  />
                  <HiOutlineLocationMarker className="input-icon" />
                </div>
              </Form.Group>
              <Form.Group controlId="formLocation">
                <div className="input-icon-wrapper">
                  <RiMessage2Line className="input-icon" />
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input-field"
                  />
                  <RiMessage2Line className="input-icon" />
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
        </div>
        {feedbackMessage && (
          <div style={{ textAlign: "center", color: "green" }}>
            {feedbackMessage}
          </div>
        )}
        <Button
          style={{
            background: "#24457b",
            color: "white",
            border: "none",
            width: "100%",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign:"center"
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Modal>
    </>
  );
}

export default PopupButton;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import '../pages/styles/Popup.css';

// function PopupButton() {
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [nomber, setNumber] = useState("");
//   const [subject, setSubject] = useState("");
//   const [feedbackMessage, setFeedbackMessage] = useState("");

//   useEffect(() => {
//     const hasSubmitted = localStorage.getItem('formSubmitted');
//     if (hasSubmitted !== 'true') {
//             setShow(true);
//           }
//   }, []);
//   const handleClose = () => {
//     setShow(false);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = { name, email, nomber, subject} ;
//     try {
//       console.log(data, 'function clicked');
//       const response = await axios.post('https://memberpanel.defencehousingsociety.com/submitPopupData', data);
//       setFeedbackMessage(response.data.message);
//       localStorage.setItem('formSubmitted', 'true');
//       setTimeout(() => {
//         handleClose();
//       }, 2000) ;
//     } catch (error) {
//       setFeedbackMessage("Failed to send details. Please try again.");
//       console.error("Error submitting form:", error);
//     }
//   };
//   return (
//     <>
//          <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
//   <Modal.Header style={{ paddingLeft: '55px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(105deg, #6e99e6, #093c94)' }}>
//     <Modal.Title style={{ fontSize: '26px' }}>Book your site visit today.</Modal.Title>
//     <button type="button" style={{ marginLeft: 'auto' }} className="custom-close-btn" onClick={handleClose}></button>
//   </Modal.Header>
//   <Modal.Body>
//     <Form>
//       <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Your Name"
//           autoFocus
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter Your Email"
//           autoFocus
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Form.Label>Mobile Number</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Your Number"
//           value={nomber}
//           onChange={(e) =>setNumber(e.target.value)}
//           autoFocus
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Subject</Form.Label>
//         <Form.Control
//           type='text'
//           value={subject}
//           onChange={(e) =>setSubject(e.target.value)}
//           as="textarea"
//           rows={1}
//         />
//       </Form.Group>
//     </Form>
//   </Modal.Body>
//   {feedbackMessage && (
//     <div style={{ textAlign: 'center', marginTop: '6px', color: 'green' }}>
//       {feedbackMessage}
//     </div>
//   )}
//   <Button style={{ background: '#24457b', color: 'white', border:'none' }} variant="primary" onClick={handleSubmit}>
//     Submit
//   </Button>
// </Modal>
//     </>
//   );
// }
// export default PopupButton;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import '../pages/styles/Popup.css'

// function PopupButton() {
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [nomber, setNumber] = useState("");
//   const [subject, setSubject] = useState("");
//   const [feedbackMessage, setFeedbackMessage] = useState("");

//   useEffect(() => {
//     const hasSubmitted = localStorage.getItem('formSubmitted');
//     console.log(hasSubmitted, 'submitted or not submitted');
//     console.log(hasSubmitted,'hasSubmitted or not submitted');

//     if (hasSubmitted !== 'true') {
//       setShow(true);
//     }
//   }, []);
//   const handleClose = () => {
//     setShow(false);
//     setTimeout(() => {
//       setShow(true)
//     }, 1000);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = { name, email, nomber, subject };

//     try {
//       console.log(data, 'function clicked');
//       const response = await axios.post('http://localhost:5000/submitPopupData', data);
//       // const response = await axios.post('https://memberpanel.defencehousingsociety.com/submitPopupData', data);

//       // Set feedback message and store the submission status
//       setFeedbackMessage(response.data.message);
//       localStorage.setItem('formSubmitted', 'true');

//       // Log localStorage data after storing it
//       const submittedStatus = localStorage.getItem('formSubmitted');
//       console.log(submittedStatus, 'Form submission status in localStorage');  // Should log "true"

//       // Close modal after short delay
//       setTimeout(() => {
//         handleClose();
//       }, 1000);
//     } catch (error) {
//       // Handle error response
//       setFeedbackMessage("Failed to send details. Please try again.");
//       console.error("Error submitting form:", error);
//     }
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const data = { name, email, nomber, subject };

//   try {
//     console.log(data, 'function clicked');
//     const response = await axios.post('http://localhost:5000/submitPopupData', data);
//     // const response = await axios.post('https://memberpanel.defencehousingsociety.com/submitPopupData', data);
//     setFeedbackMessage(response.data.message) ;
//      localStorage.setItem('formSubmitted', 'true');
//     setTimeout(() => {
//       handleClose();
//     }, 1000);
//   } catch (error) {
//     // Handle error response
//     setFeedbackMessage("Failed to send details. Please try again.");
//     console.error("Error submitting form:", error);
//   }
// };
//   return (
//     <>
//     <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
//   <Modal.Header style={{ paddingLeft: '55px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(105deg, #6e99e6, #093c94)' }}>
//     <Modal.Title style={{ fontSize: '26px' }}>Book your site visit today.</Modal.Title>
//     <button type="button" style={{ marginLeft: 'auto' }} className="custom-close-btn" onClick={handleClose}></button>
//   </Modal.Header>
//   <Modal.Body>
//     <Form>
//       <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Your Name"
//           autoFocus
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter Your Email"
//           autoFocus
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Form.Label>Mobile Number</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Your Number"
//           value={nomber}
//           onChange={(e) =>setNumber(e.target.value)}
//           autoFocus
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Subject</Form.Label>
//         <Form.Control
//           type='text'
//           value={subject}
//           onChange={(e) =>setSubject(e.target.value)}
//           as="textarea"
//           rows={1}
//         />
//       </Form.Group>
//     </Form>
//   </Modal.Body>
//   {feedbackMessage && (
//     <div style={{ textAlign: 'center', marginTop: '6px', color: 'green' }}>
//       {feedbackMessage}
//     </div>
//   )}
//   <Button style={{ background: '#24457b', color: 'white' }} variant="primary" onClick={handleSubmit}>
//     Submit
//   </Button>
// </Modal>
//     </>
//   );
// }

// export default PopupButton;
