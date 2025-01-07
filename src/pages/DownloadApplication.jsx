import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Card } from "react-bootstrap";
import { saveAs } from "file-saver";
import axios from "axios"; // Make sure you have axios installed
import "./styles/DownloadBrochure.css";

const DownloadApplication = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Save data to the database
      await axios.post(
        "https://memberpanel.defencehousingsociety.com/submitApplication",
        data
      );
      // await axios.post('http://localhost:5000/submitApplication', data);

      // Trigger the PDF download
      handleDownload();

      alert("Form submitted and data saved successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleDownload = () => {
    const pdfPath = `${process.env.PUBLIC_URL}/application.pdf`;
    saveAs(pdfPath, "application.pdf");
  };

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginBottom: "2rem", marginTop: "3rem" }}
    >
      <Card className="download-brochure-card">
        <Card.Body>
          <h1>Download Application</h1>
          <Form
            className="download-brochure-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-grid">
              <Form.Group controlId="formName" className="form-group">
                <Form.Label className="form-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  className="form-control"
                />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
              </Form.Group>

              <Form.Group controlId="formEmail" className="form-group">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className="form-control"
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group controlId="formMobile" className="form-group">
                <Form.Label className="form-label">Mobile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your mobile number"
                  {...register("mobile", {
                    required: "Mobile number is required",
                  })}
                  className="form-control"
                />
                {errors.mobile && (
                  <p className="error-message">{errors.mobile.message}</p>
                )}
              </Form.Group>

              <Form.Group controlId="formAddress" className="form-group">
                <Form.Label className="form-label">Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  {...register("address", { required: "Address is required" })}
                  className="form-control"
                />
                {errors.address && (
                  <p className="error-message">{errors.address.message}</p>
                )}
              </Form.Group>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  style={{ marginTop: "5px" }}
                  type="checkbox"
                  {...register("authorization", {
                    required: "You must authorize",
                  })}
                />
                <span className="checkbox-text">
                  I hereby authorize Defence Habitat Housing Co-operative
                  society Ltd, to contact me via phone and email regarding my
                  enquiry.
                  {showMore ? (
                    <span className="more-info">
                      I understand that this communication may include follow-up
                      calls, emails, and other messages to assist with my
                      enquiry and provide further information about your
                      services. This will override the registry on DND/NDNC.
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
              {errors.authorization && (
                <p className="error-message">{errors.authorization.message}</p>
              )}
            </div>

            <div className="button-container">
              <Button
                variant="primary"
                type="submit"
                className="download-button"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Download Now
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DownloadApplication;
