
function myarray() {
    var starting = +document.getElementById("starting").value;
        ending = +document.getElementById("ending").value;
        step = +document.getElementById("step").value;
        results = document.getElementById("results");
        var i;
        var array = [];
      
    for (i = starting;  i <= ending; i += step) {
        i % 2 || array.push(i);
    }
    document.getElementById("evens").innerHTML = array.join(', ');

document.getElementById("start").innerText=starting;
document.getElementById("end").innerText=ending;
document.getElementById("by").innerText=step;
document.getElementById("results").style.display=block;
}