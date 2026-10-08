import { useEffect, useState } from 'react'

import KPICard from '../components/KPICard'
import RevenueChart from '../components/RevenueChart'
import CategoryChart from '../components/CategoryChart'
import RegionChart from '../components/RegionChart'
import TopProducts from '../components/TopProducts'
import DashboardFilters from '../components/DashboardFilters'
import ExecutiveSummary from '../components/ExecutiveSummary'
import AnalyticalInsights from '../components/AnalyticalInsights'

import {
    getTotalCustomers,
    getTotalOrders,
    getRevenue,
    getRevenueByMonth,
    getRevenueByCategory,
    getRevenueByRegion,
    getTopProducts
} from '../services/analytics'

function Dashboard() {

    // =========================
    // Dashboard data
    // =========================

    const [customers, setCustomers] = useState(0)
    const [orders, setOrders] = useState(0)
    const [revenue, setRevenue] = useState(0)
    const [averageOrder, setAverageOrder] = useState(0)

    const [revenueByMonth, setRevenueByMonth] = useState([])
    const [revenueByCategory, setRevenueByCategory] = useState([])
    const [revenueByRegion, setRevenueByRegion] = useState([])
    const [topProducts, setTopProducts] = useState([])

    // =========================
    // Filters
    // =========================

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [region, setRegion] = useState('')
    const [segment, setSegment] = useState('')

    // Available filter options
    const regions = [
        'North',
        'South',
        'East',
        'West',
        'Central'
    ]

    const segments = [
        'Consumer',
        'Small Business',
        'Enterprise'
    ]

    // =========================
    // UI state
    // =========================

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // =========================
    // Load dashboard
    // =========================

    useEffect(() => {

        async function loadDashboard() {

            try {

                setLoading(true)
                setError(null)

                const filters = {
                    startDate,
                    endDate,
                    region,
                    segment
                }

                const [
                    customersData,
                    ordersData,
                    revenueData,
                    revenueByMonthData,
                    revenueByCategoryData,
                    revenueByRegionData,
                    topProductsData
                ] = await Promise.all([

                    getTotalCustomers(filters),

                    getTotalOrders(filters),

                    getRevenue(filters),

                    getRevenueByMonth(filters),

                    getRevenueByCategory(filters),

                    getRevenueByRegion(filters),

                    getTopProducts(filters)

                ])

                // =========================
                // Update state
                // =========================

                setCustomers(customersData)

                setOrders(ordersData)

                setRevenue(revenueData)

                setAverageOrder(
                    ordersData > 0
                        ? revenueData / ordersData
                        : 0
                )

                setRevenueByMonth(
                    revenueByMonthData
                )

                setRevenueByCategory(
                    revenueByCategoryData
                )

                setRevenueByRegion(
                    revenueByRegionData
                )

                setTopProducts(
                    topProductsData
                )

            } catch (err) {

                console.error(err)

                setError(
                    err.message || 'Unable to load dashboard'
                )

            } finally {

                setLoading(false)

            }
        }

        loadDashboard()

    }, [
        startDate,
        endDate,
        region,
        segment
    ])

    // =========================
    // Reset filters
    // =========================

    function resetFilters() {

        setStartDate('')
        setEndDate('')
        setRegion('')
        setSegment('')

    }

    // =========================
    // Loading
    // =========================

    if (loading) {
        return (
            <div className="dashboard">
                <h1>Loading dashboard...</h1>
            </div>
        )
    }

    // =========================
    // Error
    // =========================

    if (error) {
        return (
            <div className="dashboard">
                <h1>Dashboard Error</h1>

                <p>{error}</p>
            </div>
        )
    }

    // =========================
    // Dashboard
    // =========================

    return (
        <div className="dashboard">

            {/* =========================
                Header
            ========================= */}

            <header className="dashboard-header">

                <h1>
                    Sales Analytics Dashboard
                </h1>

                <p>
                    Business performance and sales analysis
                </p>

            </header>


            {/* =========================
                Filters
            ========================= */}

            <DashboardFilters
                startDate={startDate}
                endDate={endDate}
                region={region}
                segment={segment}

                regions={regions}
                segments={segments}

                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onRegionChange={setRegion}
                onSegmentChange={setSegment}

                onReset={resetFilters}
            />
            <ExecutiveSummary
                revenue={revenue}
                orders={orders}
                customers={customers}
                revenueByRegion={revenueByRegion}
                revenueByCategory={revenueByCategory}
                topProducts={topProducts}
            />


            {/* =========================
                KPI Cards
            ========================= */}

            <section className="kpi-grid">

                <KPICard
                    title="Total Revenue"
                    value={revenue.toLocaleString(
                        'en-US',
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                    )}
                    prefix="$"
                />

                <KPICard
                    title="Completed Orders"
                    value={orders.toLocaleString()}
                />

                <KPICard
                    title="Customers"
                    value={customers.toLocaleString()}
                />

                <KPICard
                    title="Average Order Value"
                    value={averageOrder.toLocaleString(
                        'en-US',
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                    )}
                    prefix="$"
                />


            </section>
            <section>
                <AnalyticalInsights
                    revenueByRegion={revenueByRegion}
                    revenueByCategory={revenueByCategory}
                    topProducts={topProducts}
                    revenue={revenue}
                    orders={orders}
                />
            </section>


            {/* =========================
                Charts
            ========================= */}

            <section className="charts-grid">

                <RevenueChart
                    data={revenueByMonth}
                />

                <CategoryChart
                    data={revenueByCategory}
                />

                <RegionChart
                    data={revenueByRegion}
                />

            </section>


            {/* =========================
                Top Products
            ========================= */}

            <section className="tables-grid">

                <TopProducts
                    data={topProducts}
                />

            </section>

        </div>
    )
}

export default Dashboard