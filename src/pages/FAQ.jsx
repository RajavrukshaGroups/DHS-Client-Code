import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./styles/FAQ.css";
import ContactForm from "./ContactForm";
import { useForm } from "react-hook-form";
import { Filter } from "bad-words";
import Loader from "../utils/loader";

const faqs = [
  {
    question: "What is society?",
    answer:
      "Defence Habitat Housing Co-Operative Society is registered under Karnataka Co-Operative Society Act 1960. The society is headed by retired officers of Indian Defence Services to give a better service to society. Defence Habitat Housing Co-Operative Society is a social service organization, functioning with an objective of promoting and facilitating Serving and Retired Armed / Defence Forces as well as Para Military personnel and also for General Publics.",
  },
  {
    question: "What is Defence habitat Project?",
    answer:
      "Defence Habitat Housing Co-Operative Society is registered under Karnataka Co-Operative Society Act 1960. The society is headed by retired officers of Indian Defence Services to give a better service to society. Defence Habitat Housing Co-Operative Society is a social service organization, functioning with an objective of promoting and facilitating Serving and Retired Armed  <br><br> Defence Forces as well as Para Military personnel and also for General Publics. It is yet to be approved by DPA (Doddaballapur planning authority) plotted development project that exemplifies class and ensures comfort. The project has been developed with an emphasis on design and sustainability and will truly redefine what a plotted developme",
  },
  {
    question: "What are the prominent features of Defence Habitat?",
    answer: `
            Defence Habitat project will be a premium residential layout in the fastest developing area of North Bangalore with the concepts of making eco-friendly environment in the layout and also with the best in class amenities like :-
            <ul>
                <li>60ft Main road 40 ft & 30ft cross roads</li>
                <li>Underground Electrical supplying lines</li>
                <li>Sewage lines</li>
                <li>Overhead water tank and underground Water connection</li>
                <li>Septic tank</li>
                <li>Planting of trees on both sides of the roads</li>
                <li>Park</li>
                <li>Club house and swimming pool</li>
                <li>Security service at the main entrance</li>
            </ul>
        `,
  },
  {
    question: "Where is the location of project?",
    answer:
      "Defence Habitat Doddaballapur -- It is located on off- SH09. It is a mere 40 minute’s drive from Hebbal, and 25-30 minutes’ drive from Kempegowda International Airport. <br><br>Defence Habitat Marasandra.-- It is located on off SH09. It is a mere 25 minute’s drive from Hebbal, and 35-40 minutes’ drive from Kempegowda International Airport.",
  },

  {
    question: "What are the significant developments around the project?",
    answer: `
            Nestled ideally between the prime proposed ITIR Project Bangalore, Defence Habitat provides natural and convenient access to International Airport, KIADB, Hebbal, and also well connected with other city hubs via the SH09 & NH
            <ul>
                <li>priced than many key Private residential areas in Bangalore: Doddaballapur is fast catching the eye of property buyers since prices in this field are comparatively lower than other key Private residential areas in Bangalore.</li>
                <li>Home to many offices: ITIR largest SEZ park which is proposed near our project including some MNC’s and major IT/ITES companies.</li>
                <li>Well-developed social infrastructure:Doddaballapur has developed into one of the most preferred residential areas in Bangalore over the past few years. What draw people; are great schools, reputed hospitals, Airport and day to day convenience.</li>
               
            </ul>
        `,
  },
  {
    question: "Is it possible to build a house on the plot as I wish?",
    answer:
      "Yes. However, the statutory norms of construction set by the govt. rules should be followed.",
  },
  {
    question: "Is there sufficient water source?",
    answer:
      "Yes. However, the statutory norms of construction set by the govt. rules should be followed.",
  },
  {
    question: "Is the title of the property clear?",
    answer:
      "Yes. The land is freehold, marketable and free from all encumbrances.",
  },
  {
    question: "What happens thereafter?",
    answer:
      "After receiving the Down payment, a receipt & Confirmation letter will be given by the housing Society.",
  },
  {
    question: "What assurance will I get for my money is not in risk?",
    answer:
      "At the time of booking you will get payment receipt, confirmation letter, automatically generated seniority id and login details where you can check the details of project progress and payment status. And as the society project is completely observed by government your money is always safe.",
  },
  {
    question: "What is the Mode of payment & Booking process?",
    answer:
      "All the payments will be accepted by the mode of Cheque, DD(Demand Draft), RTGS/NEFT in favour of “Defence Habitat Housing Co-Operative Society Ltd.” Initially you have to make the down payment of about 25% of the total amount and membership fee of Rs 2500/- the remaining balance amount must be paid in 3 equal installments as and when demanded/ every 6 months depending upon the development of the layout.",
  },
  {
    question: "Why is the price of this project so low?",
    answer:
      "Societies are non-profit organizations! When the society makes profit it will be divided among the members. Here unlike private layouts the money of clients are not in hand but invested in the society land. Unlike private Developers, societies don’t take huge loans from banks so they don’t include the expenses borne by the developer in terms of bank interests, so the value is lower than market value.",
  },
  {
    question:
      "Why is the land procurement so slow? Why doesn’t the society acquire the total land at once?",
    answer:
      "Because to acquire the total and i,e 100 acres of land at once, the society needs at least 80 to 90 crores of money in hand , thus if the society takes a loan from any financial institution we will end up paying huge amounts of interest which will in turn increase the price of the land and you will end up paying more(around 500 per sq ft) than the price that we are offering now.",
  },
  {
    question: "How many plots can I buy?",
    answer: "You can buy 1 plot under 1 membership.",
  },
  {
    question: "Can I transfer the membership?",
    answer: "Yes, you can transfer the membership.",
  },
  {
    question:
      "The location looks barren and no signs of development are visible. Why?",
    answer:
      "The land acquisition is under progress, it’s a turnkey operation, as and when we receive payments from the members at the time of booking, we push the money to landlord. Our commitment is to give the site on time.",
  },
  {
    question: "What is the status of the land?",
    answer:
      "The development will be done phase by phase, these are agricultural land and phase by phase it will go for conversion and then it will be sent for DPA approval.",
  },
  {
    question: "When will the proposed development start?",
    answer:
      "The first phase of booking is going on now, once the first phase of booking is completed we will apply for conversion and DPA approval and immediately start the development. This will take 12 to 15 months of time.",
  },
  {
    question: "When will the project be completed?",
    answer:
      "Our commitment is for 24 months from the date of booking and this will also be phase by phase.",
  },
  {
    question: "Can we get the legal set of documents for verification?",
    answer:
      "The legal documents can be given, but many portions of land is still in legal verification, agreement stage, negotiation stage, which won’t help you to decide whether or not to buy the society plots.",
  },
  {
    question: "Is there validity for the price list?",
    answer: "The price list may be subject to change from time to time.",
  },
  {
    question: "What additional payments will have to be made?",
    answer:
      "Registration, Stamp duty, Khata transfer and incidental charges are payable, based on the prevailing guidelines.",
  },
  {
    question: "How much is the registration and stamp duty?",
    answer: "Approximately 6.65% of the sale value.",
  },
  {
    question: "What happens if I cancel my Plot?",
    answer:
      "You can cancel your plot, full amount will be returned within 65-75 days without interest from the date of written request for the cancellation.",
  },
  {
    question:
      "When does the development start and when can I take possession of my plot?",
    answer:
      "Every phase has different dates and stages of development. Please ask for a site visit and speak to our marketing team about the development period.",
  },
  {
    question: "Who will maintain the property after possession?",
    answer:
      "Developer/ Society will maintain the property for 12 months after the allocation completed. After that, owner’s society will take care of the property.",
  },

  {
    question:
      "Can the property be resold and what is the transfer charges/brokerage charges involved?",
    answer: "The property can be resold by the client himself.",
  },
  {
    question: "Can i buy commercial as well as residential sites?",
    answer:
      "Commercial sites will cost you more than residential sites, so we suggest that you buy residential sites first and then convert them to commercial sites which will be more cost effective for you.",
  },
  {
    question: "We are looking for corner sites?",
    answer:
      "For corner sites the charges are 10 to 15% extra, however this applies only if you are getting allotment during registration, as societies follow the rule of first come first serve basis.",
  },

  // Add more FAQ items here...
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
      });

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

  return (
    <Container fluid className="faq">
      {isLoading && <Loader />}
      <div className="banner2">
        <div className="banner-content1">
          <h1 style={{ color: "white", fontWeight: "900" }}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-heading">Defence Habitat Customer Support FAQs</h2>
        <Row>
          <Col md={6} className="faq-content">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-3 faq-card">
                <Card.Body
                  onClick={() => toggleFAQ(index)}
                  className="faq-card-body"
                >
                  <h5 className="faq-question">
                    {faq.question}
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                      className="toggle-icon"
                    />
                  </h5>
                  {activeIndex === index && <hr />}
                  <div
                    className={
                      activeIndex === index ? "show-answer" : "hide-answer"
                    }
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6} className="contact-form">
            <div className="contacts-us">
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#24457b",
                }}
              >
                Contact Us
              </h2>
              <div className="contacts-form-container">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form"
                >
                  <div className="form-rows">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
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

                  <div className="form-rows">
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
                        })}
                        onChange={(e) =>
                          handleProfanityCheck("subject", e.target.value)
                        }
                      />
                      {errors.subject && (
                        <p className="error-message">
                          {errors.subject.message}
                        </p>
                      )}
                      {fieldErrors.subject && (
                        <p className="error-message">{fieldErrors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-group ">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      {...register("message", {
                        required: "Message is required",
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
                            follow-up calls, emails, and other messages to
                            assist with my enquiry and provide further
                            information about your services. This will override
                            the registry on DND/NDNC.
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
            </div>{" "}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FAQ;
