function getnum(num) {
    var inputdata = document.getElementById("inputdata");
    inputdata.value += num;
}


function getresult() {
    var result = document.getElementById("results");
    result.value = eval(inputdata.value)
}


function clearresult() {
    var result = document.getElementById("results");
    result.value = "";
    var result = document.getElementById("inputdata");
    inputdata.value = "";
}

function square(){
  
    var result = document.getElementById("results");
    result.value = inputdata.value * inputdata.value;

}