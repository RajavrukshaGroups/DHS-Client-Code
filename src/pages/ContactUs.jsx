import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Filter } from "bad-words";
import Loader from "../utils/loader";
import "./styles/ContactUs.css";
import location from "../images/qrcode.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Track submission status
  const [fieldErrors, setFieldErrors] = useState({});

  const filter = new Filter();

  const handleProfanityCheck = (fieldName, value) => {
    if (filter.isProfane(value)) {
      setFieldErrors((prev) => ({
        ...prev,
        [fieldName]: "Please avoid using foul language",
      }));
    } else {
      setFieldErrors((prev) => {
        const updateErrors = { ...prev };
        delete updateErrors[fieldName];
        return updateErrors;
      });
    }
  };
  
  const onSubmit = async (data) => {
    console.log("data", data);
    // if (
    //   filter.isProfane(data.name) ||
    //   filter.isProfane(data.email) ||
    //   filter.isProfane(data.subject) ||
    //   filter.isProfane(data.message)
    // ) {
    //   alert("Your input contains inappropriate language.");
    //   reset();
    //   return;
    // }
    setIsLoading(true);
    try {
      // Send form data to the backend API
        // const response = await fetch("http://localhost:5000/contact", {
      const response = await fetch(
        "https://memberpanel.defencehousingsociety.com/contact",
        {
          // Adjust the endpoint URL as needed
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        alert("Form submitted successfully!");
        reset();
      } else {
        setSubmitStatus("error");
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      alert("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [showMore, setShowMore] = useState(false);

  return (
    <Container fluid className="contactus">
      {isLoading && <Loader />}
      <div className="banner-contact">
        <div className="banner-content-contact">
          <h1 style={{ color: "white", fontWeight: "bold" }}>Contact Us</h1>
        </div>
      </div>

      <Container fluid className="contact-content">
        <h2 style={{ textAlign: "center", fontSize: "25px" }}>
          "Get in touch with us today to find out how we can help you with all
          your real estate needs."
        </h2>
        <Row className="contact-form-details-row">
          <Col md={6} className="contact-form-col">
            <div className="contact-form-container">
              <p style={{ textAlign: "center", fontSize: "25px" }}>
                Get in Contact with Our Team
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      {...register("name", {
                        required: "Name is required",
                        // validate: validateNoProfanity,
                      })}
                      onChange={(e) =>
                        handleProfanityCheck("name", e.target.value)
                      }
                    />
                    {errors.name && (
                      <p className="error-message">{errors.name.message}</p>
                    )}
                    {fieldErrors.name && (
                      <p className="error-message">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Phone number must be exactly 10 digits",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="error-message">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                        // validate:validateNoProfanity
                      })}
                      onChange={(e) =>
                        handleProfanityCheck("email", e.target.value)
                      }
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email.message}</p>
                    )}
                    {fieldErrors.email && (
                      <p className="error-message">{fieldErrors.email}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                        // validate: validateNoProfanity,
                      })}
                      onChange={(e) =>
                        handleProfanityCheck("subject", e.target.value)
                      }
                    />
                    {errors.subject && (
                      <p className="error-message">{errors.subject.message}</p>
                    )}
                    {fieldErrors.subject && (
                      <p className="error-message">{fieldErrors.subject}</p>
                    )}
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    style={{ resize: "none" }}
                    id="message"
                    name="message"
                    {...register("message", {
                      required: "Message is required",
                      // validate:validateNoProfanity
                    })}
                    onChange={(e) =>
                      handleProfanityCheck("message", e.target.value)
                    }
                  ></textarea>
                  {errors.message && (
                    <p className="error-message">{errors.message.message}</p>
                  )}
                  {fieldErrors.message && (
                    <p className="error-message">{fieldErrors.message}</p>
                  )}
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      style={{ marginTop: "5px" }}
                      type="checkbox"
                      name="declaration"
                      {...register("declaration", {
                        required: "You must declare",
                      })}
                    />
                    <span className="checkbox-text">
                      I hereby authorize Defence Habitat Housing Co-operative
                      society Ltd, to contact me via phone and email regarding
                      my enquiry.
                      {showMore ? (
                        <span className="more-info">
                          I understand that this communication may include
                          follow-up calls, emails, and other messages to assist
                          with my enquiry and provide further information about
                          your services. This will override the registry on
                          DND/NDNC.
                          <button
                            type="button"
                            onClick={() => setShowMore(false)}
                            className="toggle-button"
                            style={{ color: "blue" }}
                          >
                            Read Less
                          </button>
                        </span>
                      ) : (
                        <span className="more-info">
                          ...{" "}
                          <button
                            type="button"
                            onClick={() => setShowMore(true)}
                            className="toggle-button"
                            style={{ color: "blue" }}
                          >
                            Read More
                          </button>
                        </span>
                      )}
                    </span>
                  </label>
                  {errors.declaration && (
                    <p className="error-message">
                      {errors.declaration.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  Send
                </button>
              </form>
            </div>
          </Col>
          <Col md={6} className="contact-details-col">
            <Card className="info-card">
              <Card.Body>
                <div className="contact-info-item">
                  <h3>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size="2x"
                      className="icon"
                    />
                    Address
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    Defence Habitat Housing Co-Operative Society Ltd. Behind
                    Swathi Garden Hotel, E Block, Sahakarnagar, Bangalore.
                    Karnataka - 560092
                  </p>
                </div>

                <div className="contact-info-item">
                  <h3>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="icon"
                    />
                    Email
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    <a
                      href="mailto:info@defencehousingsociety.com"
                      className="fontemail"
                    >
                      info@defencehousingsociety.com
                    </a>
                  </p>
                </div>
                <div className="contact-info-item">
                  <h3>
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="icon"
                    />
                    Phone
                  </h3>
                  <p style={{ textAlign: "center" }}>
                    <a href="tel:080-29903931" className="fontemail">
                      080 - 29903931
                    </a>
                  </p>
                </div>
              </Card.Body>
            </Card>
            <div className="scan-location">
              <h2 className="scan-heading">
                SCAN HERE FOR <br /> OFFICE LOCATION
              </h2>
              <div className="scan-image">
                <img src={location} alt="Office Location QR Code" />
              </div>
            </div>
          </Col>
          {/* <iframe  id="Web Lead" src="https://account.solidperformers.com/capture_form_data/MTI3Mg==" border="0" style="border:0px;height:600px;width:100%"></iframe> */}
        </Row>

        <Row className="map-row">
          <Col md={6}>
            <div className="map-address" style={{ paddingTop: "90px" }}></div>
            <div className="map-container" style={{ paddingBottom: "70px" }}>
              <iframe
                className="iframe-container"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.61915046687!2d77.58879931482295!3d13.059896990797979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM1LjYiTiA3N8KwMzUnMjcuNiJF!5e0!3m2!1sen!2sin!4v1636363430335"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Defence Habitat Location"
              ></iframe>
            </div>
          </Col>
          <Col md={6}>
            <div className="iframe-container crm-iframe-container">
              <h2 style={{ textAlign: "center", fontSize: "25px" }}>
                Solid Performers CRM
              </h2>

              <iframe
                id="WebLead"
                src="https://account.solidperformers.com/capture_form_data/MTI3Mg=="
                style={{ border: "0px", height: "650px", width: "100%" }}
                title="Web Lead"
                scrolling="no"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactUs;
