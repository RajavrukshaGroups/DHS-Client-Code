import { Container, Table } from "react-bootstrap";

const PriceChart = ({ priceChartTableHeading, priceChartData }) => {

    return (
        <div>
            <Container>
                <h2 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px', color: '#24457b', fontWeight: 'bold', fontSize: '30px' }}>Price Chart</h2>
                <Table className="price-table" hover responsive>
                    <thead>
                        <tr >
                            {priceChartTableHeading.map((ele, i) => {
                                return <th key={i}>{ele}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {priceChartData.map((row, index) => (
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