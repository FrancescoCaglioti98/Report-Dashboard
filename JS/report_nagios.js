(function() {

    //Aspetto che la pagina abbia caricato tutto il form prima di cominciare a creare la tabella
    document.addEventListener('DOMContentLoaded', function(){
        
        var grid = document.getElementById('myGrid');

        var cellClassRules = {
            'false': function(params){
                return params.value == false
            },
            'true': function(params){
                return params.value == true
            }
        };

        var cellClassRule={

            'val': function(params){
                return params.value == 1
            }
        };

        const columnDefs = [
            { headerName: "Persona",    field: 'userId', cellClassRules: cellClassRule,   filter: 'agNumberColumnFilter'},
            { headerName: "ID Task",    field: 'id',      filter: 'agNumberColumnFilter' },
            { headerName: "Task",       field: 'title' },
            { headerName: "Completed",     field: 'completed', cellClassRules: cellClassRules},
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
            onGridReady: (event) =>{renderDataInTheTable(event.api)}
        };



        //Plot Effettivo della griglia
        new agGrid.Grid(grid, gridOptions);



        //Creazione Request API per file json

        function renderDataInTheTable(api) {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(function (response) {
                    return response.json();
                }).then(function (data) {
                    api.setRowData(data);
                })
        }
    })

    
}) ();