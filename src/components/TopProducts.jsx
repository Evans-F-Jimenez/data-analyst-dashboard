function TopProducts({ data }) {

    return (

        <div className="table-card">

            <div className="chart-header">

                <h2>
                    Top 10 Products
                </h2>

                <p>
                    Products ranked by revenue
                </p>

            </div>

            <div className="table-container">

                <table>

                    <thead>

                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Units Sold</th>
                            <th>Revenue</th>
                        </tr>

                    </thead>

                    <tbody>

                        {data.map((product, index) => (

                            <tr key={index}>

                                <td>
                                    {product.product_name}
                                </td>

                                <td>
                                    {product.category_name}
                                </td>

                                <td>
                                    {Number(
                                        product.units_sold
                                    ).toLocaleString()}
                                </td>

                                <td>
                                    $
                                    {Number(
                                        product.revenue
                                    ).toLocaleString(
                                        'en-US',
                                        {
                                            minimumFractionDigits: 2
                                        }
                                    )}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )
}

export default TopProducts