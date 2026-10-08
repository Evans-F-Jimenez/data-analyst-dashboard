function ExecutiveSummary({
    revenue,
    orders,
    customers,
    revenueByRegion,
    revenueByCategory,
    topProducts
}) {

    const topRegion = revenueByRegion?.[0]
    const topCategory = revenueByCategory?.[0]
    const topProduct = topProducts?.[0]

    const averageOrder =
        orders > 0
            ? revenue / orders
            : 0

    return (
        <section className="executive-summary">

            <div className="executive-summary-header">
                <div>
                    <h2>Executive Summary</h2>

                    <p>
                        Overview of current business performance
                    </p>
                </div>
            </div>

            <div className="executive-summary-content">

                <div className="executive-summary-main">

                    <p>
                        The business generated{' '}
                        <strong>
                            ${revenue.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </strong>{' '}
                        in revenue from{' '}
                        <strong>
                            {orders.toLocaleString()}
                        </strong>{' '}
                        completed orders.
                    </p>

                    {topRegion && (
                        <p>
                            <strong>
                                {topRegion.region}
                            </strong>{' '}
                            was the highest-performing region,
                            generating{' '}
                            <strong>
                                ${Number(topRegion.revenue).toLocaleString(
                                    'en-US',
                                    {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }
                                )}
                            </strong>{' '}
                            in revenue.
                        </p>
                    )}

                    {topCategory && (
                        <p>
                            The{' '}
                            <strong>
                                {topCategory.category_name}
                            </strong>{' '}
                            category generated the highest revenue,
                            contributing{' '}
                            <strong>
                                ${Number(topCategory.revenue).toLocaleString(
                                    'en-US',
                                    {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }
                                )}
                            </strong>.
                        </p>
                    )}

                    {topProduct && (
                        <p>
                            The top-performing product was{' '}
                            <strong>
                                {topProduct.product_name}
                            </strong>{' '}
                            with{' '}
                            <strong>
                                ${Number(topProduct.revenue).toLocaleString(
                                    'en-US',
                                    {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }
                                )}
                            </strong>{' '}
                            in revenue.
                        </p>
                    )}

                </div>

                <div className="executive-summary-metrics">

                    <div className="summary-metric">
                        <span>Customers</span>

                        <strong>
                            {customers.toLocaleString()}
                        </strong>
                    </div>

                    <div className="summary-metric">
                        <span>Average Order Value</span>

                        <strong>
                            ${averageOrder.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </strong>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ExecutiveSummary