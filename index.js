var dates = [];
var backupDates =[];
var count = 0;
function main(){
    var storedNames = JSON.parse(localStorage.getItem("dates"));
    if (!storedNames){
        console.log('no dates in storage')
    }
    else{
        var dates = JSON.parse(localStorage.getItem("dates"));
        var backupDates = JSON.parse(localStorage.getItem("dates"));
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
    }

    // console.log('addDates')
    var table = document.getElementById('table')
    var newRow = table.insertRow()
    
    newRow.insertCell().appendChild(document.createTextNode((count%8)+1));
    newRow.insertCell().appendChild(document.createTextNode(newDate));
    if (count%8==7){
        var emptyRow = table.insertRow()

        emptyRow.insertCell().appendChild(document.createTextNode(''));
        emptyRow.insertCell().appendChild(document.createTextNode(''));

    }
    dates.push(newDate)
    backupDates.push(newDate)

    localStorage.setItem("dates", JSON.stringify(dates));
    count ++
     
}
function removeDate(){
}


document.getElementById('btnAdd').addEventListener("click", e =>{
    addDate()
}); 
document.getElementById('btnKillALL').addEventListener("click", e =>{
    addDatefrom()
}); 
main()