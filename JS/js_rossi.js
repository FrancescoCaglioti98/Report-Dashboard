var kwHMilano = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 54.4, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,];
var kwHPotential = [29.9, 12.5, 16.4, 29.2, 4.0, 16.0, 35.6, 48.5, 54.4, 16.4, 29.2, 14.0, 16.0, 35.6, 14.5, 10.4, 29.2, 14.0, 76.0, 35.6, 18.5, 21.4, 94.1, 95.6,];
var numDevice = [13, 55, 112, 42, 54, 51, 111, 42, 55, 112, 60, 98, 54, 68, 62, 23, 62, 59, 26, 73, 346, 313, 245, 78];
var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var emission2020 = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
var emission2021 = [ 11.3, 17.0, 22.0, 24.8, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6];
var count = 0;


var pieColors = (function () {
    let colors = [],
        base = Highcharts.getOptions().colors[0],       //Si può cambiare questo con un valore #037d3b chiuso tra "" questo permette anche di cambiare il colore in base a quale grafico lo richiama
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());


var otherColors = (function () {
    let colors = [],
        base = Highcharts.getOptions().colors[0],       //Si può cambiare questo con un valore #037d3b chiuso tra "" questo permette anche di cambiare il colore in base a quale grafico lo richiama
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 8).get());
    }
    return colors;
}());

//con la stessa logica posso creare una variabile [] che mi conservi tutte le tipologie di colori che voglio utilizzare e poi mandarle direttamente la dentro


const pcStatus = [
    {
        "userId": "Front Desk 1",
        "id": "192.168.1.1",
        "info": "Updating",
        "status": "On Update",
        "memory": {
          "allocated": 17,
          "max": 25
        },
        "activeProcess": [
          {
            "process": "Outlook",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.2
          },
          {
            "process": "Edge",
            "memoryUsage": 0,
            "networkUsage": 4,
            "cpuUsage": 7
          },
          {
            "process": "Teams",
            "memoryUsage": 0.1,
            "networkUsage": 0.6,
            "cpuUsage": 13.3
          },{
            "process": "Word",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.1
          },
          {
            "process": "Avast",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.3
          },
          {
            "process": "Power Point",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.2
          }
        ]
      },
        {
        "userId": "Front Desk 2",
        "id": "192.168.1.2",
        "info": "Active",
        "status": "UP",
        "memory": {
          "allocated": 10,
          "max": 15
        },
        "activeProcess": [
          {
            "process": "Outlook",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.2
          },
          {
            "process": "Edge",
            "memoryUsage": 0,
            "networkUsage": 4,
            "cpuUsage": 7
          },
          {
            "process": "Teams",
            "memoryUsage": 0.1,
            "networkUsage": 0.6,
            "cpuUsage": 13.3
          },{
            "process": "Word",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.1
          },
          {
            "process": "Avast",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.3
          },
          {
            "process": "Power Point",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.2
          }
        ]
      },
        {
        "userId": "Front Desk 3",
        "id": "192.168.1.3",
        "info": "Not Reacheble",
        "status": "Offline",
        "memory": {
          "allocated": 20,
          "max": 25
        },
        "activeProcess": [
          {
            "process": "Outlook",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.2
          },
          {
            "process": "Edge",
            "memoryUsage": 0,
            "networkUsage": 4,
            "cpuUsage": 7
          },
          {
            "process": "Teams",
            "memoryUsage": 0.1,
            "networkUsage": 0.6,
            "cpuUsage": 13.3
          },{
            "process": "Word",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.1
          },
          {
            "process": "Avast",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.3
          },
          {
            "process": "Power Point",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.2
          }
        ]
      },
        {
        "userId": "Front Desk 4",
        "id": "192.168.1.4",
        "info": "Not Active",
        "status": "Idle",
        "memory": {
          "allocated": 5,
          "max": 30
        },
        "activeProcess": [
          {
            "process": "Outlook",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.2
          },
          {
            "process": "Edge",
            "memoryUsage": 0,
            "networkUsage": 4,
            "cpuUsage": 7
          },
          {
            "process": "Teams",
            "memoryUsage": 0.1,
            "networkUsage": 0.6,
            "cpuUsage": 13.3
          },{
            "process": "Word",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 0.1
          },
          {
            "process": "Avast",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.3
          },
          {
            "process": "Power Point",
            "memoryUsage": 0,
            "networkUsage": 0,
            "cpuUsage": 2.2
          }
        ]
      }
];



function importantPoints(memory){

    let value = new Array;
    endGreen = Math.ceil((memory/100)*60);
    value.push(endGreen);
    value.push(endGreen + Math.ceil((memory/100)*20));

    return value
}

function chartActiveProcess(num){
    let process = pcStatus[num].activeProcess
    let valori = new Array;
    for(let elem in process){
        let temp = new Array;
        temp.push(pcStatus[num].activeProcess[elem].process);
        temp.push(pcStatus[num].activeProcess[elem].cpuUsage);
        valori.push(temp);
    }

    const chart = Highcharts.chart('usage', {
        chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Device Status'
        },
        tooltip: {
            pointFormat: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                colors: pieColors,
                innerSize: '75%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>:  <br>{point.percentage:.1f} %'
                }
            }
        }, 
        series: [{
            innerSize: '75%',
            data: valori
         }]
    });


 
}

function memoryUsage(num){

    let maxMemory = pcStatus[num].memory.max;
    let value = importantPoints(maxMemory);
    let allocatedMemory = pcStatus[num].memory.allocated;


    Highcharts.setOptions({
        chart: {
            inverted: true,
            marginLeft: 135,
            type: 'bullet'
        },
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        yAxis: {
            gridLineWidth: 0
        },
        plotOptions: {
            series: {
                pointPadding: 0.25,
                borderWidth: 0,
                color: "#000000"
                
            },
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    const chart = Highcharts.chart('capacity', {
        chart: {
            marginTop: 40
        },
        title: {
            text: 'Storage Usage'
        },
        xAxis: {
            categories: ['<span class="hc-cat-title">Allocated Memory</span><br><b>Terabyte (Tb)</b>']
        },
        yAxis: {
            min: 0,
            max: maxMemory,
            plotBands: [{
                from: 0,
                to: value[0],
                color: '#037d3b'
            }, {
                from: value[0],
                to: value[1],
                color: '#ffff00'
            }, {
                from: value[1],
                to: maxMemory,
                color: '#fa0506'
            }],
            title: null
        },
        series: [{
            data: [{
                y: allocatedMemory
            }]
        }],
        tooltip: {
            pointFormat: '<b>{point.y}</b>'
        }
    });
}

function ramUsage(num){

    let maxMemory = pcStatus[num].memory.max;
    let value = importantPoints(maxMemory);
    let allocatedMemory = pcStatus[num].memory.allocated;

    Highcharts.setOptions({
        chart: {
            inverted: true,
            marginLeft: 135,
            type: 'bullet'
        },
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        yAxis: {
            gridLineWidth: 0
        },
        plotOptions: {
            series: {
                pointPadding: 0.25,
                borderWidth: 0,
                color: "#000000"
                
            },
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    const chart = Highcharts.chart('ramCapacity', {
        chart: {
            marginTop: 40
        },
        title: {
            text: 'RAM Usage'
        },
        xAxis: {
            categories: ['<span class="hc-cat-title">Allocated Memory</span><br><b>Gigabyte (Gb)</b>']
        },
        yAxis: {
            min: 0,
            max: maxMemory,
            plotBands: [{
                from: 0,
                to: value[0],
                color: '#037d3b'
            }, {
                from: value[0],
                to: value[1],
                color: '#ffff00'
            }, {
                from: value[1],
                to: maxMemory,
                color: '#fa0506'
            }],
            title: null
        },
        series: [{
            data: [{
                y: allocatedMemory
            }]
        }],
        tooltip: {
            pointFormat: '<b>{point.y}</b>'
        }
    });
}

function processGrid(num){
   
    var grid = document.getElementById('processGrid');

    var cellClassRules = {
        'false': function(params){
            return params.value == "Offline"
        },
        'true': function(params){
            return params.value == "On Update"
        }
    };

    const columnDefs = [
        { headerName: "Software",    field: 'process',   filter: 'agNumberColumnFilter'},
        { headerName: "CPU",    field: 'cpuUsage',      filter: 'agNumberColumnFilter' },
        { headerName: "Memoria",     field: 'memoryUsage',  cellClassRules: cellClassRules},
        { headerName: "Rete",       field: 'networkUsage' }
    ];

    const gridOptions = {

        defaultColDef: {
            flex: 1,
            minWidth: 90,
            resizable: true,
            sortable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
                buttons: ['reset', 'apply'],
                closeOnApply: true,
            }
        },
        animateRows: true,
        rowSelection: 'multiple',
        columnDefs: columnDefs,
        rowData: pcStatus[num].activeProcess,
    };


    new agGrid.Grid(grid, gridOptions);
}



function close(){

    let sharedCont = document.getElementById("shared-container");
    let allCont = document.querySelectorAll('#accordion-container');
    
    for (let i = 0; i < allCont.length; i++) {
        let el = allCont[i];
        el.classList.remove('active');
    }
    
    sharedCont.classList.remove('active');
    document.getElementById("processGrid").innerHTML = '';
}


function show(index){
    const firstTitle = document.getElementById("title-processes");
    const secondTitle = document.getElementById("title-storage");
    const thirdTitle = document.getElementById("title-performance");

    firstTitle.innerHTML = "Active Processes";
    secondTitle.innerHTML = "Storage";
    thirdTitle.innerHTML = "Network Performance";

    const usageChart = document.getElementById('usage');
    const capacityChart = document.getElementById('capacity');
    const edgeChart = document.getElementById('edge');



    chartActiveProcess(index);
    memoryUsage(index);
    ramUsage(index);
    processGrid(index);
}


function createColumn(count){

    let colonna = document.createElement('div');
    colonna.setAttribute('id', 'accordion-container');
    colonna.setAttribute('class', 'col');

    let text = document.createElement('h3');
    text.setAttribute('class', 'text-center');
    text.innerHTML = pcStatus[count].userId;

    let bottone = document.createElement('button');
    bottone.setAttribute('class', 'mx-auto d-block accordion-btn btn btn-white border-primary');

    let utilityText = document.createElement('div');
    utilityText.setAttribute('class','accordion-text');
    utilityText.innerHTML = count;

    colonna.appendChild(text);
    colonna.appendChild(bottone);
    colonna.appendChild(utilityText);

    return colonna

}

function createRow(){


    let temp = count+6;
    const riga = document.createElement('div');
    riga.setAttribute('class', 'row');

    for( count ; count < temp  &&  count< pcStatus.length; count++){
        riga.appendChild(createColumn(count));
    }
    return riga;

}


var jsaccordion = {
    init : function (target) {  
        let headers = document.querySelectorAll("#" + target + " .accordion-btn");
        if (headers.length > 0) { 
            for (let head of headers) {
                head.addEventListener("click", jsaccordion.select);
            }
        }
        let closeButton = document.getElementById('toggler');
        closeButton.addEventListener('onClick', close());
    },

    select : function () {        
        let targ1 = this.parentElement.closest('#accordion-container'); // find parent
        let targText = targ1.querySelector('.accordion-text').innerHTML; 


        let sharedCont = document.getElementById("shared-container");



        if( targ1.classList.contains('active') ){ 

            // when clicked, if active, reset them all
            close();

        } else {
            close();


            targ1.classList.add('active');
            sharedCont.classList.add('active');
            show(targText)

        }
    }
};


document.addEventListener('DOMContentLoaded', function(){
        
    let grid = document.getElementById('networkStatus');

    var cellClassRules = {
        'false': function(params){
            return params.value == "Offline"
        },
        'true': function(params){
            return params.value == "On Update"
        }
    };

    const columnDefs = [
        { headerName: "Device",    field: 'userId',   filter: 'agNumberColumnFilter'},
        { headerName: "IP Address",    field: 'id',      filter: 'agNumberColumnFilter' },
        { headerName: "Status",     field: 'status', cellClassRules: cellClassRules},
        { headerName: "More Info",       field: 'info' }
    ];

    const gridOptions = {

        defaultColDef: {
            flex: 1,
            minWidth: 90,
            resizable: true,
            sortable: true,
            filter: 'agTextColumnFilter',
            filterParams: {
                buttons: ['reset', 'apply'],
                closeOnApply: true,
            }
        },
        animateRows: true,
        rowSelection: 'multiple',
        columnDefs: columnDefs,
        rowData: pcStatus,
    };


    new agGrid.Grid(grid, gridOptions);
});




window.addEventListener('load', function(){

    const montlyUsage = Highcharts.chart('montlyUsage', {
        title: {
            text: 'Monthly Device Consumption & Potential Consumption'
        },
        xAxis: [{
            categories: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            crosshair: true
        }],
        yAxis: [{ // Secondary yAxis
            title: {
                text: 'Number Of Active Devices',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        },{ // Primary yAxis
            labels: {
                format: '{value} KWh',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'kiloWatt Hour',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        colors: otherColors,
        series: [{
            name: 'Potential',
            type: 'column',
            yAxis: 1,
            data: kwHPotential,
            tooltip: {
                valueSuffix: ' kwH'
            }
    
        }, {
            name: 'Milan Office',
            type: 'column',
            yAxis: 1,
            data: kwHMilano,
            tooltip: {
                valueSuffix: ' kwH'
            }
    
        },{
            name: 'Active Device Number',
            type: 'spline',
            color: "red",
            data: numDevice,
            tooltip: {
                valueSuffix: ''
            }
        }]
    });

    const co2Emission = Highcharts.chart('co2Emission',{
        title: {
            text: 'CO2 Emissions 2020 vs. 2021'
        },
        xAxis: {
            categories: month
        },
        yAxis: {
            title: {
                text: 'Emissions (g/Km)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            labels: {
                format: '{value} g/Km',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        tooltip: {
            valueSuffix: ' g/Km',
            enabled: true,
            shared: true
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
             showInLegend: false
        },
        colors: ["#06fa05","#9797f5"],
        series: [{
          
                marker: {
            fillColor: 'transparent',
           lineColor: Highcharts.getOptions().colors[0]
        },
            name: "2020",
            data: emission2020
        }, {
           
            marker: {
            fillColor: 'transparent'
        },
            name: "2021",
            data: emission2021
        }]
    });

    const resume = Highcharts.chart('resume', {
        chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Endpoint Status'
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                colors: pieColors,
                innerSize: '75%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}'
                }
            }
        }, 
        series: [{
            name: "Status",
            colorByPoint: true,
            data: [{
                name: 'Active',
                y: 211,
                sliced: false,
                selected: true
            }, {
                name: 'On Update',
                y: 121,
                sliced: false,
                selected: true
            }, {
                name: 'Not Active',
                y: 48,
                sliced: false,
                selected: true
            }, {
                name: 'Offiline',
                y: 35,
                sliced: false,
                selected: true
            },{
                name: 'Not Installed',
                y: 11,
                sliced: false,
                selected: true
            }]
        }]
    });

    while(count < pcStatus.length){
        const bigParent = document.getElementById("rows");
        const row = createRow();
        bigParent.appendChild(row);
    }
  
    jsaccordion.init("accordion-container");
});