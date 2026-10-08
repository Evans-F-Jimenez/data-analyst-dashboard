# Sales Analytics Dashboard

An interactive Business Intelligence and Data Analytics dashboard built with React, PostgreSQL, and Supabase.

The project simulates a real-world sales analytics environment where business data is transformed into KPIs, analytical summaries, interactive visualizations, and actionable business insights.

The main objective of this project is to demonstrate practical Data Analyst and Business Intelligence skills, including:

- SQL data analysis
- Data aggregation and transformation
- KPI development
- Business performance analysis
- Interactive filtering
- Data visualization
- Analytical insight generation
- PostgreSQL database design
- Dashboard development
- React-based data applications


## Dashboard Preview

The dashboard provides an executive-level overview of business performance through:

- Total Revenue
- Completed Orders
- Customers
- Average Order Value
- Revenue over time
- Revenue by category
- Revenue by region
- Top-performing products
- Executive summary
- Analytical insights


## Project Objectives

This project was designed to answer common business questions such as:

1. How much revenue is the business generating?
2. How many completed orders have been processed?
3. What is the average order value?
4. Which regions generate the most revenue?
5. Which product categories perform best?
6. Which products generate the highest revenue?
7. How does revenue change over time?
8. How do customer segments affect business performance?
9. How does performance change when different filters are applied?
10. What business insights can be derived from the available data?


## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Recharts
- Lucide React

### Backend / Database

- PostgreSQL
- Supabase
- PostgreSQL Functions / RPC
- Row Level Security

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm


## Architecture

The application follows an analytical architecture where the database performs the main aggregation work before the results are sent to the React application.

```text
                    PostgreSQL
                        │
                        │
                Raw Business Data
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
    Orders / Items                 Customers / Products
        │                               │
        └───────────────┬───────────────┘
                        │
                        ▼
              Analytical SQL / RPC
                        │
                        ▼
                     Supabase
                        │
                        ▼
                      React
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
       KPIs           Charts          Insights