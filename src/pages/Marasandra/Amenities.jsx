import { Card, Col, Container, Row } from "react-bootstrap"

const Amenities = ({ amenities }) => {
    return (
        <div>
            <section className="amenities-section" style={{ paddingTop: '10px' }}>
                <Container>
                    <h2 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px', color: '#24457b', fontWeight: 'bold', fontSize: '30px' }}>Modern Amenities</h2>
                    <p className='exclusive-text1' style={{ fontSize: '18px', fontFamily: 'emoji', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Defence Habitat – Marasandra residential layout is thoughtfully equipped with an array of amenities to elevate your living experience .</p>
                    <Row>
                        {amenities.map((amenity) => (
                            <Col key={amenity.id} md={3} sm={6} className="mb-4">
                                <Card className="amenity-card" style={{ backgroundColor: amenity.backgroundColor }}>
                                    <Card.Img
                                        className="amenity-img"
                                        variant="top"
                                        src={amenity.image}
                                        style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>{amenity.name}</h5>
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

export default Amenities