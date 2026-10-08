import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'


function RevenueChart({ data }) {

    return (

        <div className="chart-card">

            <div className="chart-header">

                <h2>
                    Revenue Over Time
                </h2>

                <p>
                    Monthly completed-order revenue
                </p>

            </div>


            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="month"
                    />

                    <YAxis />

                    <Tooltip
                        formatter={(value) =>
                            `$${Number(value).toLocaleString()}`
                        }
                    />

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        strokeWidth={3}
                        dot={false}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    )
}

export default RevenueChart