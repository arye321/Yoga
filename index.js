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

    }
}

function addDate(){
    // console.log('addDates')
    var table = document.getElementById('table')
    var newRow = table.insertRow()
    const tempDate =new Date().toLocaleDateString()
    const tempHour = new Date().toLocaleTimeString()
    const newDate = `${tempDate} ${tempHour}`
    newRow.insertCell().appendChild(document.createTextNode((count%8)+1));
    newRow.insertCell().appendChild(document.createTextNode(newDate));
    if (count%8==7){
        var emptyRow = table.insertRow()

        emptyRow.insertCell().appendChild(document.createTextNode(''));
        emptyRow.insertCell().appendChild(document.createTextNode(''));

    }
    count ++
     
}
function removeDate(){
}

var btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener("click", e =>{
    addDate()
}); 
main()