Highcharts.setOptions({
    colors: ['#058DC7', '#ED561B', '#50B432', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});     //Dafault Color for the Charts


document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('BarChartByAge', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Share by Age and Gender'
        },
        xAxis: {
            categories: ['18-25', '26-35', '36-45', '46+']
        },
        yAxis: {
            title: {
                text: 'Number Montly'
            }
        },
        series: [{
            name: 'Male',
            data: [15, 22, 44, 30]
        }, {
            name: 'Female',
            data: [19, 20, 49, 33]
        }, {
            name: 'Other',
            data: [16, 14, 10, 8]
        }]
    });
});     //Bar Chart by Age & Gender


document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('pieChartByGender', {
        chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Share By Gender'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        }, 
        series: [{
            name: 'Gender',
            colorByPoint: true,
            data: [{
                name: 'Male',
                y: 111,
                sliced: false,
                selected: true
            }, {
                name: 'Female',
                y: 121,
                sliced: false,
                selected: true
            }, {
                name: 'Other',
                y: 48,
                sliced: false,
                selected: true
            }]
        }]
    });
});     //Pie Chart by Gender


