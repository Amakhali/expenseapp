/* eslint-disable react/prop-types */

import Chart from 'react-apexcharts'

const options = {
    labels: ["Income", "Expense"],
    colors: ["#213ebf","#fD5e53"],
    chart: {
        width: "50px"
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { node: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#213ebf","#fD5e53"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000"
        },
    },
};

export default function TransactionCharts({ income = 0, expense = 0 }) {
    return (
        <Chart
            options={options}
            series={[income, expense]}
            type='pie'
            width={'100%'}
            height={"100%"}
        />
    )
}