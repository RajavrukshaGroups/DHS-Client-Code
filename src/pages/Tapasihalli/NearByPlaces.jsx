import { Card, Row, Col } from "react-bootstrap";
import {
  FaRoad,
  FaTrain,
  FaShoppingCart,
  FaHospital,
  FaIndustry,
  FaBuilding,
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
                  Situated in North Bangalore, Defence Habitat Tapasihalli is
                  strategically positioned in close proximity to the Airport,
                  upcoming 10,000 acres of <strong> ITIR/SEZ</strong> projects
                  and <strong>KIADB</strong> areas, ensuring a thriving economic
                  environment. This location not only provides convenient access
                  to workplaces but also promises a significant appreciation in
                  property value, making it a lucrative investment for the
                  future.
                </p>
              </Col>
              <Col md={6}>
                <h2 className="intro-subtitle">Unmatched Connectivity</h2>
                <div className="intro-divider"></div>
                <p style={{ textAlign: "justify" }}>
                  Our project boasts excellent connectivity to key areas of
                  Bangalore. With well-developed roads and upcoming
                  infrastructure projects, residents can enjoy seamless travel
                  to the city center, airports, educational institutions,
                  healthcare facilities, and shopping destinations.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <p
              className="exclusive-text1"
              style={{ textAlign: "center", fontSize: "15.5px" }}
            >
              The Exclusive part of Bangalore where land value, investor
              sentiment, business opportunities, and career prospects – all are
              heading north !
            </p>
          </div>
          <div className="title-divider"></div>
          <div className="title-divider"></div>
          {/* <p className="exclusive-text">
          The Exclusive part of Bangalore where land value, investor sentiment, business opportunities, and career prospects – all are heading north!
        </p> */}
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
                  <FaTrain className="icon" />
                  <span style={{ color: "black" }}>
                    Close to Doddaballapura City & Railway Station.
                  </span>
                </li>
                <li>
                  <FaBuilding className="icon" />
                  <span style={{ color: "black" }}>
                    RL Jalappa Institute of Technology .
                  </span>
                </li>
                <li>
                  <FaShoppingCart className="icon" />
                  <span style={{ color: "black" }}>
                    Doddaballapura APMC Market and CRPF Rakshak Enclave .
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="icon-list">
                <li>
                  <FaHospital className="icon" />
                  <span style={{ color: "black" }}>
                    Near to Pushpanjali Maharshi Education Trust.
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
