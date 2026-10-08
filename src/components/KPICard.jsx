function KPICard({ title, value, prefix = '' }) {

    return (
        <div className="kpi-card">

            <p className="kpi-title">
                {title}
            </p>

            <h2 className="kpi-value">
                {prefix}{value}
            </h2>

        </div>
    )
}

export default KPICard