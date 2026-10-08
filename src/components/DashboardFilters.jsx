function DashboardFilters({
    startDate,
    endDate,
    region,
    segment,
    regions,
    segments,
    onStartDateChange,
    onEndDateChange,
    onRegionChange,
    onSegmentChange,
    onReset
}) {
    const activeFilters = [
        startDate,
        endDate,
        region,
        segment
    ].filter(Boolean).length

    return (
        <div className="dashboard-filters">

            <div className="dashboard-filters-header">

                <div className="dashboard-filters-heading">
                    <div className="dashboard-filters-icon">
                        ⚙
                    </div>

                    <div>
                        <h2>Dashboard Filters</h2>

                        <p>
                            Refine the analysis using the available filters
                        </p>

                        {activeFilters > 0 && (
                            <span className="dashboard-filters-active">
                                ● {activeFilters} active filter
                                {activeFilters !== 1 ? 's' : ''}
                            </span>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    className="dashboard-reset-button"
                    onClick={onReset}
                >
                    ↻ Reset Filters
                </button>

            </div>


            <div className="dashboard-filters-grid">

                <div className="dashboard-filter-group">
                    <label htmlFor="start-date">
                        START DATE
                    </label>

                    <input
                        id="start-date"
                        type="date"
                        className="dashboard-filter-input"
                        value={startDate}
                        onChange={(e) =>
                            onStartDateChange(e.target.value)
                        }
                    />
                </div>


                <div className="dashboard-filter-group">
                    <label htmlFor="end-date">
                        END DATE
                    </label>

                    <input
                        id="end-date"
                        type="date"
                        className="dashboard-filter-input"
                        value={endDate}
                        onChange={(e) =>
                            onEndDateChange(e.target.value)
                        }
                    />
                </div>


                <div className="dashboard-filter-group">
                    <label htmlFor="region">
                        REGION
                    </label>

                    <div className="dashboard-select-wrapper">

                        <select
                            id="region"
                            className="dashboard-filter-select"
                            value={region}
                            onChange={(e) =>
                                onRegionChange(e.target.value)
                            }
                        >
                            <option value="">
                                All Regions
                            </option>

                            {regions.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>


                <div className="dashboard-filter-group">
                    <label htmlFor="segment">
                        CUSTOMER SEGMENT
                    </label>

                    <div className="dashboard-select-wrapper">

                        <select
                            id="segment"
                            className="dashboard-filter-select"
                            value={segment}
                            onChange={(e) =>
                                onSegmentChange(e.target.value)
                            }
                        >
                            <option value="">
                                All Segments
                            </option>

                            {segments.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboardFilters