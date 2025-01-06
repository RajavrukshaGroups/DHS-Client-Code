import { Container, Table } from "react-bootstrap";
import seal from "../../images/Seal.png";

const PriceChart = ({ priceChartTableHeading, oldPriceChartData, newPriceChartData }) => {
    return (
        <div>
            <Container style={{ position: "relative" }}>
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        color: "#24457b",
                        fontWeight: "bold",
                        fontSize: "30px",
                    }}
                >
                    Price Chart
                </h2>
                <img
                    src={seal}
                    className="price-seals"
                    alt="Seal"
                    title="Seal"
                    style={{
                        position: "absolute",
                        top: "67%",
                        left: "48%",
                        transform: "translate(-50%, -50%)",
                        opacity: 0.8, // Optional: makes it look more like a watermark
                        zIndex: 1,
                    }}
                />
                <Table className="price-table" style={{ "opacity": 0.5 }} responsive>
                    <thead>
                        <tr>
                            {priceChartTableHeading.map((ele, i) => {
                                return <th key={i}>{ele}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {oldPriceChartData.map((row, index) => (
                            <tr key={index}>
                                <td style={{ fontWeight: 'bold' }}>{row.dimension}</td>
                                <td>{row.price}</td>
                                <td>{row.total_amount}</td>
                                <td>{row.down_payment}</td>
                                <td>{row.first_installment}</td>
                                <td>{row.second_installment}</td>
                                <td>{row.third_installment}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Container>
                <Table className="price-table mt-5" hover responsive>
                    <thead>
                        <tr>
                            {priceChartTableHeading.map((ele, i) => {
                                return <th key={i}>{ele}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {newPriceChartData.map((row, index) => (
                            <tr key={index}>
                                <td style={{ fontWeight: 'bold' }}>{row.dimension}</td>
                                <td>{row.price}</td>
                                <td>{row.total_amount}</td>
                                <td>{row.down_payment}</td>
                                <td>{row.first_installment}</td>
                                <td>{row.second_installment}</td>
                                <td>{row.third_installment}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default PriceChart;