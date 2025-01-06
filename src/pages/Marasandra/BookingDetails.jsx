import { Card } from "react-bootstrap";

const BookingDetails = () => {
    return (
        <div>
            <Card.Body>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#24457b', fontWeight: 'bold', fontSize: '30px' }}>Booking Details</h2>
                <ul className="booking-details-listm">
                    <li>Application needs to be filled for obtaining Membership and Site booking along with 4 passport size photographs, address proof, and ID proof.</li>
                    <li>Payment has to be paid in the mode of RTGS/NEFT, Cheque/Demand Draft (D.D) in favour of "Defence Habitat Housing Co-Operative Society Ltd."</li>
                    <li>Buyers need to obtain Membership of the society by paying Rs.2,500/-.</li>
                </ul>
            </Card.Body>
        </div>
    )
}

export default BookingDetails;