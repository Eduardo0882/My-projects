function insert(num) {
    var number = document.getElementById('results');
    number.innerHTML += num;
}
function clean() {
    document.getElementById('results').innerHTML = "";
}
function back() {
    var results = document.getElementById('results').innerHTML;
    if (results.length > 0) {
        document.getElementById('results').innerHTML = results.substring(0, results.length -1);
    }
}
function calculate() {
    var results = document.getElementById('results').innerHTML;
    if(results){
        document.getElementById('results').innerHTML = eval(results);
    }
    else{
        document.getElementById('results').innerHTML = "Enter something."
    }
}
