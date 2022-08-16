//TRAFFIC CHART
const hour = [
    { x: '2022-07-01T13:00:00', y: 22 },
    { x: '2022-07-01T14:00:00', y: 52 },
    { x: '2022-07-01T15:00:00', y: 60 },
    { x: '2022-07-01T16:00:00', y: 5 },
    { x: '2022-07-01T17:00:00', y: 18 },
    { x: '2022-07-01T18:00:00', y: 72 },
    { x: '2022-07-01T19:00:00', y: 3 },
];
const day = [
    { x: ('2022-07-01'), y: 18 },
    { x: ('2022-07-02'), y: 12 },
    { x: ('2022-07-03'), y: 6 },
    { x: ('2022-07-04'), y: 9 },
    { x: ('2022-07-05'), y: 3 },
    { x: ('2022-07-06'), y: 12 },
    { x: ('2022-07-07'), y: 3 },
];
const week = [
    { x: ('2022-07-01 '), y: 70 },
    { x: ('2022-07-07 '), y: 100 },
    { x: Date.parse('2022-07-14 00:00:00 GMT+000'), y: 60 },
    { x: Date.parse('2022-07-21 00:00:00 GMT+000'), y: 230 },
  
];
const month = [
    { x: Date.parse('2022-01-01 '), y: 1822 },
    { x: Date.parse('2022-02-01 '), y: 500 },
    { x: Date.parse('2022-03-01 '), y: 2159 },
    { x: Date.parse('2022-04-01 '), y: 1000 },
    { x: Date.parse('2022-05-01 '), y: 600 },
    { x: Date.parse('2022-06-01 '), y: 2300 },
];

const data = {
    datasets: [{
        data: month,
        lineTension: 0.5,
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
    }]
};

const config = {
    type: 'line',
    data,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        maintainAspectRatio: false,
        fill: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

const trafficChart = new Chart(document.getElementById('traffic-chart'),
    config
);











































//old


//Daily Traffic Chart
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "# of Hits",
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: "#7477BF",
            borderWidth: 1,
        },
    ],
};
const dailyOptions = {
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};
let dailyChart = new Chart(dailyCanvas, {
    type: "bar",
    data: dailyData,
    options: dailyOptions,
});


//Mobile Users Chart
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [
        {
            label: "# of Users",
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
        },
    ],
};
const mobileOptions = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold",
            },
        },
    },
};
let mobileChart = new Chart(mobileCanvas, {
    type: "doughnut",
    data: mobileData,
    options: mobileOptions,
});
