Highcharts.setOptions({
    colors: ['#b30000', '#33d3d6', '#97d631', '#318fd6', '#d63170', '#22a37f', '#ff0000']
});

cat = ['CAT 1', 'CAT 2', 'CAT 3', 'CAT 4', 'CAT 5', 'CAT 6'];

document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('firstRadar', {

        chart: {
            polar: true,
            type: 'line'
        },
    
        title: {
            text: 'Radar One',
            x: 0
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: cat,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            enabled: false
        },
    
        series: [{
            name: 'Radar One',
            data: [4, 4.5, 4, 3, 3.5, 4],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('thirdRadar', {

        chart: {
            polar: true,
            type: 'line'
        },
    
        title: {
            text: 'Radar Three',
            x: 0
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: cat,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            enabled: false
        },
    
        series: [{
            name: 'Radar Three',
            data: [4.5 , 4, 4, 3.5, 3.5, 4],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('secondRadar', {

        chart: {
            polar: true,
            type: 'line'
        },
    
        title: {
            text: 'Radar Two',
            x: 0
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: cat,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            enabled: false
        },
    
        series: [{
            name: 'Radar Two',
            data: [4, 4, 4, 3, 4, 3],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
});


document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('star', {

        chart: {
            polar: true,
            type: 'area'
        },
    
        title: {
            text: '',
            x: 0
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: cat,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
    
        legend: {
            enabled: false
        },
    
        series: [{
            name: 'Graph 2',
            data: [7, 3, 6],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('vennDiagram', {
        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    var intersection = point.sets.join(', '),
                        name = point.name,
                        ix = point.index + 1,
                        val = point.value;
                    return ix + '. Intersection: ' + intersection + '. ' +
                        (point.sets.length > 1 ? name + '. ' : '') + 'Value ' + val + '.';
                }
            }
        },
        series: [{
            type: 'venn',
            name: 'Venn Diagram',
            data: [{
                sets: ['CAT 1'],
                value: 2,
                color: '#ffffff'
            }, {
                sets: ['CAT 2'],
                value: 2,
                color: '#ffffff'
            }, {
                sets: ['CAT 3'],
                value: 2,
                color: '#ffffff'
            }, {
                sets: ['CAT 1', 'CAT 2'],
                value: 1,
                color: '#ffffff',
                name: ' '
            }, {
                sets: ['CAT 1', 'CAT 3'],
                value: 1,
                color: '#ffffff',
                name: ' '
            }, {
                sets: ['CAT 2', 'CAT 3'],
                value: 1,
                color: '#ffffff',
                name: ' '
            }, {
                sets: ['CAT 2', 'CAT 3', 'CAT 1'],
                value: 12,
                color:'#b30000',
                name: ' '
            }]
        }],
        title: {
            text: 'Venn Diagram'
        }
    });
    
});

 //Aspetto che la pagina abbia caricato tutto il form prima di cominciare a creare la tabella
 document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('positioning', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Strenght over Effort'
        },

        xAxis: {
            title: {
                enabled: true,
                text: 'Strenght'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            min: 0,
            max: 10
        },

        yAxis: {
            title: {
                text: 'Effort'
            },
            lineColor: 'transparent',
            gridLineWidth: 1,
            min: 0,
            max: 10
        },


        legend: {
            enabled: false
        },


        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: [{
            name: 'Positioning',
            color: '#000',
            data: [[4, 3.5]],
            marker:{
                symbol: 'diamond'
            }
        }]
    });
    

});



var dataRisk = [
	7 , 4 , 9
];

var dataVulnerability = [
	-2 , -4, -3
];



document.addEventListener('DOMContentLoaded', function(){
    const chart = Highcharts.chart('graficoProtezione', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Different Levels of Strenght and Effort'
        },
        subtitle: {
            text: '',
        },
        xAxis: [{
            categories: cat,
            reversed: false,
            labels: {
                step: 1
            },
            accessibility: {
                description: ''
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: cat,
            linkedTo: 0,
            labels: {
                step: 1
            },
            accessibility: {
                description: ''
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return this.value < 0 ? -this.value : this.value;
                }
            },
        },
    
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' per ' + this.point.category + '</b><br/>' +
                    'Ha il valore di: ' + (this.point.y < 0 ? -this.point.y : this.point.y)
            }
        },
        
        series: [{
            name: 'Strenght',
            data: dataVulnerability
        }, {
            name: 'Effort',
            data: dataRisk
        }]
    });
});




document.addEventListener('DOMContentLoaded', function(){

    const externalDiv = document.getElementById('value');

    for(i = 0 ; i<dataRisk.length ; i++){
        const innerDiv = document.createElement('div');
        var string = cat[i]+ ": "+(dataRisk[i]-dataVulnerability[i]);

        innerDiv.setAttribute('id', 'info1');
        var text = document.createTextNode(string);
        innerDiv.appendChild(text);
        externalDiv.appendChild(innerDiv);

    }


});


document.addEventListener('DOMContentLoaded',function(){
    var chart =     Highcharts.chart('reportMensile', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Balance Strength over the last Year'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: 'Balance Strength',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled:false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [5, 1.5, 9, 4.5, 5.6, 9, 3.3, 4, 6, 2.8, 7, 2]
        }
    ]
    });
});