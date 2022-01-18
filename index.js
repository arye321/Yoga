var dates = [];
var backupDates =[];
var table = document.getElementById('table')

function main(){
    var storedDates = JSON.parse(localStorage.getItem("dates3"));
    if (!storedDates){
        console.log('no dates in storage')
    }
    else{
        dates = JSON.parse(localStorage.getItem("dates3"));
        backupDates = JSON.parse(localStorage.getItem("dates3"));
        for (const date of dates){
            addDate(date)
           
        }

    }
}

function addDate(newDate){
    if(!newDate){
        const tempDate =new Date().toLocaleDateString()
        const tempHour = new Date().toLocaleTimeString()
        newDate = `${tempDate} ${tempHour}`
        dates.push(newDate)
        backupDates.push(newDate)
    }
    var rowCount = table.rows.length;

    // console.log('addDates')
    var newRow = table.insertRow()
    
    newRow.insertCell().appendChild(document.createTextNode((rowCount%9)));
    newRow.insertCell().appendChild(document.createTextNode(newDate));
    rowCount = table.rows.length;
    
    if (rowCount%9==0){
        var emptyRow = table.insertRow()

        emptyRow.insertCell().appendChild(document.createTextNode(''));
        emptyRow.insertCell().appendChild(document.createTextNode(''));

    }

    localStorage.setItem("dates3", JSON.stringify(dates));

     
}
function removeDate(){
    var rowCount = table.rows.length;
    
    table.deleteRow(rowCount -1);
    dates.splice(-1)
    localStorage.setItem("dates3", JSON.stringify(dates));
    if ( table.rows[rowCount-2].cells[1].textContent == '' ){
        table.deleteRow(rowCount -2);
    }

}
function killDates(){
    dates = []
    localStorage.setItem("dates3", JSON.stringify(dates));


    table.innerHTML =`<tr > <th>מספר</th> <th>תאריך</th> </tr>`

}
function undoDates(){
    table.innerHTML =`<tr > <th>מספר</th> <th>תאריך</th> </tr>`

    dates = backupDates
    localStorage.setItem("dates3", JSON.stringify(backupDates));
    
    for (const date of backupDates){
         addDate(date)
    }
    
}
document.getElementById('btnAdd').addEventListener("click", e =>{
    addDate()
}); 
document.getElementById('btnRemove').addEventListener("click", e =>{
    removeDate()
}); 
document.getElementById('btnKillALL').addEventListener("click", e =>{
    killDates()
}); 
document.getElementById('btnUndo').addEventListener("click", e =>{
    undoDates()
}); 
main()