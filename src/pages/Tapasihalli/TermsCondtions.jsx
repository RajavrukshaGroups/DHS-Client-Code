import { Container } from "react-bootstrap";

const TermsCond = () => {
    return (
        <div>
            <section className="terms-conditions-section">
                <Container>
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "40px",
                            color: "#24457b",
                            fontWeight: "bold",
                            fontSize: "30px",
                        }}
                    >
                        Terms And Conditions
                    </h2>
                    <ul className="terms-listtt">
                        <li>Corner sites will be charged extra.</li>
                        <li>Registration charges extra as per government norms.</li>
                        <li>
                            Bank loans will be provided during the time of registration
                            based on requirements from the members and subject to society
                            norms.
                        </li>
                    </ul>
                </Container>
            </section>
        </div>
    )
}

export default TermsCond;