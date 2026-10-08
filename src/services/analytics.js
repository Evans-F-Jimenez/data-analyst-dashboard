import { supabase } from '../lib/supabaseClient'


// =====================================================
// Build RPC filters
// =====================================================

function buildFilters({
    startDate,
    endDate,
    region,
    segment
}) {
    return {
        p_start_date: startDate || null,
        p_end_date: endDate || null,
        p_region: region || null,
        p_segment: segment || null
    }
}


export async function getTotalCustomers(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_total_customers',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting total customers:',
            error
        )

        throw error
    }

    return Number(data)
}


export async function getTotalOrders(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_total_orders',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting total orders:',
            error
        )

        throw error
    }

    return Number(data)
}


export async function getRevenue(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_total_revenue',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting total revenue:',
            error
        )

        throw error
    }

    return Number(data)
}


export async function getRevenueByMonth(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_revenue_by_month',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting revenue by month:',
            error
        )

        throw error
    }

    return data
}


export async function getRevenueByCategory(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_revenue_by_category',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting revenue by category:',
            error
        )

        throw error
    }

    return data
}

export async function getRevenueByRegion(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_revenue_by_region',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting revenue by region:',
            error
        )

        throw error
    }

    return data
}

export async function getTopProducts(filters = {}) {

    const { data, error } = await supabase
        .rpc(
            'get_top_products',
            buildFilters(filters)
        )

    if (error) {
        console.error(
            'Error getting top products:',
            error
        )

        throw error
    }

    return data
}