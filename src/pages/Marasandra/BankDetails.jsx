import { Card, Table } from "react-bootstrap";

const BankDetails = ({ bankAccountDetails }) => {
    return (
        <div>
            <Card.Body>
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        color: "#24457b",
                        fontWeight: "bold",
                    }}
                >
                    Bank Details
                </h2>
                <div className="bank-details-table">
                    <Table striped bordered hover responsive>
                        <tbody>
                            {bankAccountDetails.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ textAlign: 'center' }}>
                                        <strong>{item.label}</strong>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </div>
    )
}

export default BankDetails;