var dates = [];
var count = 1;
function main(){
    var storedNames = JSON.parse(localStorage.getItem("dates"));
    if (!storedNames){
        console.log('no dates in storage')
    }
    else{
        var storedNames = JSON.parse(localStorage.getItem("names"));
    }
}

function addDate(){
    console.log('addDates')
    var table = document.getElementById('table')
    var newRow = table.insertRow()
    newRow.insertCell().appendChild(document.createTextNode(count%8));
    newRow.insertCell().appendChild(document.createTextNode(new Date().toLocaleDateString()));
    if (count%8==0){
        var emptyRow = table.insertRow()

        emptyRow.insertCell().appendChild(document.createTextNode(''));
        emptyRow.insertCell().appendChild(document.createTextNode(''));

    }
    count ++
     
}
var btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener("click", e =>{
    addDate()
}); 
main()