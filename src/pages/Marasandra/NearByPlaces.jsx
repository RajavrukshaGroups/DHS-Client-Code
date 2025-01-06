import { Card, Col, Row } from "react-bootstrap";
import {
  FaRoad,
  FaTrain,
  FaShoppingCart,
  FaHospital,
  FaIndustry,
  FaBuilding,
  FaPlane,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";

const NearByPlaces = () => {
  return (
    <div>
      <Card className="property-card shadow-sm">
        <Card.Body>
          <div className="project-intro">
            {/* <h1 className="project-title">Project Tapasihalli</h1> */}
            <div className="intro-divider"></div>
            {/* <p>Welcome to Defence Habitat Tapasihalli, an exceptional residential layout project located in the rapidly developing area of North Bangalore. Designed to meet the needs of modern living, our project offers an ideal blend of tranquility and connectivity, making it the perfect choice for discerning homebuyers and investors alike.</p> */}
            <Row>
              <Col md={6}>
                <h2 className="intro-subtitle">Prime Location</h2>
                <div className="intro-divider"></div>
                <p style={{ textAlign: "justify" }}>
                  Nestled in the rapidly expanding urban extension of North
                  Bangalore, Defence Habitat Marasandra enjoys an enviable
                  location with seamless connectivity to the Kempegowda
                  International Airport and major ring roads. This strategic
                  positioning ensures effortless travel and promises a surge in
                  property values, making it an astute investment for the
                  future.{" "}
                </p>
              </Col>
              <Col md={6}>
                <h2 className="intro-subtitle">Future-Ready Infrastructure</h2>
                <div className="intro-divider"></div>
                <p style={{ textAlign: "justify" }}>
                  As North Bangalore continues to evolve with ongoing
                  infrastructural developments, Defence Habitat Marasandra
                  stands as a testament to future-ready living. The proximity to
                  tech parks, educational institutions, healthcare centers, and
                  shopping malls ensures that all your needs are within reach,
                  making it an ideal location for families, professionals, and
                  retirees.
                </p>
              </Col>
            </Row>
          </div>
          <div className="card-title">
            <p style={{ textAlign: "center" }}>
              Defence Habitat Marasandra is designed to provide unparalleled
              connectivity
            </p>
            <p className="exclusive-text" style={{ textAlign: "center" }}>
              The Exclusive part of Bangalore where land value, investor
              sentiment, business opportunities, and career prospects – all are
              heading north!
            </p>
          </div>
          <div className="title-divider"></div>
          <div className="title-divider"></div> {/* Second divider */}
          <Row>
            <Col md={6}>
              <ul className="icon-list">
                <li>
                  <FaRoad className="icon" />
                  <span style={{ color: "black" }}>
                    Close to 4 lane State Highway (SH-09).
                  </span>
                </li>
                <li>
                  <FaPlane className="icon" />
                  <span style={{ color: "black" }}>
                    Bangalore International Airport is just a 20-minute drive.
                  </span>
                </li>
                <li>
                  <FaTrain className="icon" />
                  <span style={{ color: "black" }}>
                    Near to Rajanukunte Railway Station.
                  </span>
                </li>
                <li>
                  <FaBuilding className="icon" />
                  <span style={{ color: "black" }}>
                    Close to Country Club Apartments.
                  </span>
                </li>
                <li>
                  <FaShoppingCart className="icon" />
                  <span style={{ color: "black" }}>
                    Century Eden Shopping Malls & Market Complex area are going
                    to come.
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="icon-list">
                <li>
                  <FaHospital className="icon" />
                  <span style={{ color: "black" }}>
                    Near to Manipal Hospital & Jawahar Navodaya Vidyalaya.
                  </span>
                </li>
                <li>
                  <FaIndustry className="icon" />
                  <span style={{ color: "black" }}>
                    Close to Doddaballapura KIADB Industrial area.
                  </span>
                </li>
                <li>
                  <FaUserTie className="icon" />
                  <span style={{ color: "black" }}>
                    Just a 10-minute drive to North Bangalore rural DC Office.
                  </span>
                </li>
                <li>
                  <FaGlobe className="icon" />
                  <span style={{ color: "black" }}>
                    Near to 10,000 Acres ITIR/SEZ and 1,000 Acres Aerospace
                    Hardware Park.
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="booking-text blink">
            <strong style={{ fontSize: "larger" }}>
              Phase-1: Booking Closed
            </strong>
            <br />
            <strong style={{ fontSize: "larger", color: "green" }}>
              Phase-2: Bookings Are Open Now!
            </strong>
          </p>
          <p className="booking-p" style={{ fontFamily: "emoji" }}>
            Allotment of plots will be confirmed on
            <b style={{ fontFamily: "emoji" }}>
              {" "}
              'First come first serve basis'.
            </b>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NearByPlaces;
