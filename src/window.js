// Whole-script strict mode syntax
'use strict';
const serialPort = require('serialport');

serialPort.list(function(err, ports){
  ports.forEach(function(port){
    console.log("Port: ", port);
  })
});


let options = ["pisse", "kacke"];
//options.push(getPortsList);
//listPorts();
setTimeout(() => {
    console.log("World!");
    var select = document.getElementById("auswahl");
    for (let index in options) {
        select.options[select.options.length] = new Option(options[index], index);
    }
}, 2000);
function test() {
    document.getElementById('knopf').innerHTML = document.getElementById('text').value
    console.log(document.getElementById('auswahl').value);
    alert("Wie alt sind Sie?");
}


function myFunc(theObject) {       //Funktiondekleration
    document.getElementById('absatz').innerHTML = 'Veränderter Inhalt'
}

