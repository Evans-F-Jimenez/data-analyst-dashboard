function AnalyticalInsights({
    revenueByRegion,
    revenueByCategory,
    topProducts,
    revenue,
    orders
}) {

    const topRegion = revenueByRegion?.[0]
    const topCategory = revenueByCategory?.[0]
    const topProduct = topProducts?.[0]

    const regionShare =
        revenue > 0 && topRegion
            ? (Number(topRegion.revenue) / revenue) * 100
            : 0

    const categoryShare =
        revenue > 0 && topCategory
            ? (Number(topCategory.revenue) / revenue) * 100
            : 0

    const averageOrder =
        orders > 0
            ? revenue / orders
            : 0

    return (
        <section className="analytical-insights">

            <div className="analytical-insights-header">

                <div>
                    <h2>Key Analytical Insights</h2>

                    <p>
                        Highlights identified from the current dataset
                    </p>
                </div>

            </div>

            <div className="insights-grid">

                {/* Top Region */}

                <div className="insight-card">

                    <div className="insight-label">
                        TOP REGION
                    </div>

                    <h3>
                        {topRegion?.region || 'N/A'}
                    </h3>

                    <p>
                        Generated{' '}
                        <strong>
                            ${Number(
                                topRegion?.revenue || 0
                            ).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </strong>{' '}
                        in revenue.
                    </p>

                    <span className="insight-detail">
                        {regionShare.toFixed(1)}% of total revenue
                    </span>

                </div>


                {/* Top Category */}

                <div className="insight-card">

                    <div className="insight-label">
                        TOP CATEGORY
                    </div>

                    <h3>
                        {topCategory?.category_name || 'N/A'}
                    </h3>

                    <p>
                        Generated{' '}
                        <strong>
                            ${Number(
                                topCategory?.revenue || 0
                            ).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </strong>{' '}
                        in revenue.
                    </p>

                    <span className="insight-detail">
                        {categoryShare.toFixed(1)}% of total revenue
                    </span>

                </div>


                {/* Top Product */}

                <div className="insight-card">

                    <div className="insight-label">
                        TOP PRODUCT
                    </div>

                    <h3>
                        {topProduct?.product_name || 'N/A'}
                    </h3>

                    <p>
                        Generated{' '}
                        <strong>
                            ${Number(
                                topProduct?.revenue || 0
                            ).toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </strong>{' '}
                        in revenue.
                    </p>

                    <span className="insight-detail">
                        {Number(
                            topProduct?.units_sold || 0
                        ).toLocaleString()}{' '}
                        units sold
                    </span>

                </div>


                {/* Average Order */}

                <div className="insight-card">

                    <div className="insight-label">
                        AVERAGE ORDER VALUE
                    </div>

                    <h3>
                        ${averageOrder.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </h3>

                    <p>
                        Average revenue generated per completed order.
                    </p>

                    <span className="insight-detail">
                        Based on {orders.toLocaleString()} completed orders
                    </span>

                </div>

            </div>

        </section>
    )
}

export default AnalyticalInsights