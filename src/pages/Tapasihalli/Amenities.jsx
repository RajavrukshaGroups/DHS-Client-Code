import { Card, Container, Row, Col } from "react-bootstrap";

const Amenities = ({ amenities }) => {
    return (
        <div>
            <section className="amenities-section" style={{ paddingTop: "10px" }}>
                <Container>
                    <h2
                        style={{
                            textAlign: "center",
                            marginTop: "40px",
                            marginBottom: "40px",
                            color: "#24457b",
                            fontWeight: "bold",
                            fontSize: "30px",
                        }}
                    >
                        Modern Amenities
                    </h2>
                    <p
                        className="exclusive-text1"
                        style={{
                            fontSize: "18px",
                            fontFamily: "emoji",
                            fontWeight: "bold",
                        }}
                    >
                        Defence Habitat - Tapasihalli is thoughtfully designed to offer a
                        lifestyle of comfort and convenience. Our residential layout
                        includes a range of modern amenities .
                    </p>

                    <Row>
                        {amenities.map((amenity) => (
                            <Col key={amenity.id} md={3} sm={6} className="mb-4">
                                <Card
                                    className="amenity-card"
                                    style={{ backgroundColor: amenity.backgroundColor }}
                                >
                                    <Card.Img
                                        className="amenity-img"
                                        variant="top"
                                        src={amenity.image}
                                        style={{
                                            width: "140px",
                                            height: "140px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body className="cardbody">
                                        <Card.Title className="card-title card-titles">
                                            {amenity.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Amenities;