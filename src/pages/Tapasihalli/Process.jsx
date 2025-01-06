import { Card } from "react-bootstrap";

export default function Process() {
    return (
        <div>
            <Card.Body>
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        color: "#24457b",
                        fontWeight: "bold",
                        fontSize: "30px",
                    }}
                >
                    Process
                </h2>
                <ul className="booking-details-listt">
                    <li>Payment to be made as per the Payment schedule.</li>
                    <li>
                        The buyer would be given a receipt and Site confirmation
                        letter from the society confirming that, the application made
                        towards purchasing the site.
                    </li>
                    <li>
                        Customer will receive login ID and password through message or
                        email which members can use to login web portal of society
                        (department) and can find the details of their payment
                        structure.
                    </li>
                    <li>
                        The Society will send periodic payment reminders as per the
                        payment schedule.
                    </li>
                    <li>
                        After completion of the development process, the Society will
                        send an allotment letter to buyers who have complied with
                        their payments.
                    </li>
                    <li>
                        Bookings of the plots will be accepted on 30% of the down
                        payment of total sale value. The remaining balance amount has
                        to be paid in 3 (Three) installments with the time period of 6
                        months for each installment.
                    </li>
                </ul>
            </Card.Body>
        </div>
    )
}