document.addEventListener('DOMContentLoaded', function(){

    var csvFile = "Main Category 1;Main Category 2;Main Category 3;Nome File	;Nome File	;Nome File\ntest1	;test2	;test17	;pdf_file;pdf_file;pdf_file\ntest3	;test4	;test18	;pdf_file;pdf_file;pdf_file\ntest5	;test6	;test19	;pdf_file;pdf_file;pdf_file\ntest7	;test8	;test20	;pdf_file;pdf_file;pdf_file\ntest9	;test10	;test21	;pdf_file;pdf_file;pdf_file\ntest11	;test12	;test22;	pdf_file;pdf_file;pdf_file\ntest13	;test14	;test23;";
    var newFile = csvFile.split("\n");

for(var i = 0 ; i<newFile.length ; i++){
    
    var tempArray = newFile[i].split(";");
    if(i == 0){

        const first = document.getElementById('listData');
        var inner = document.createElement('li');
        inner.setAttribute('class', 'info1');
        var text = document.createTextNode(tempArray[0]);
        inner.appendChild(text);
        first.appendChild(inner);
    
        const second = document.getElementById('listIT');
        var inner = document.createElement('li');
        inner.setAttribute('class', 'info1');
        var text = document.createTextNode(tempArray[1]);
        inner.appendChild(text);
        second.appendChild(inner);

        const third = document.getElementById('listSafety');
        var inner = document.createElement('li');
        inner.setAttribute('class', 'info1');
        var text = document.createTextNode(tempArray[2]);
        inner.appendChild(text);
        third.appendChild(inner);

        continue
    }

    
    const first = document.getElementById('listData');
    var inner = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href', ("../Report/"+tempArray[3]+".pdf"));
    link.setAttribute('rel', "noopener noreferrer");
    link.setAttribute('target', "_blank");
    var text = document.createTextNode(tempArray[0]);
    link.appendChild(text);
    inner.appendChild(link);
    first.appendChild(inner);

    const second = document.getElementById('listIT');
    var inner = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href', ("../Report/"+tempArray[4]+".pdf"));
    link.setAttribute('rel', "noopener noreferrer");
    link.setAttribute('target', "_blank");
    var text = document.createTextNode(tempArray[1]);
    link.appendChild(text);
    inner.appendChild(link);
    second.appendChild(inner);

    const third = document.getElementById('listSafety');
    var inner = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href', ("../Report/"+tempArray[5]+".pdf"));
    link.setAttribute('rel', "noopener noreferrer");
    link.setAttribute('target', "_blank");
    var text = document.createTextNode(tempArray[2]);
    link.appendChild(text);
    inner.appendChild(link);
    third.appendChild(inner);
};
});