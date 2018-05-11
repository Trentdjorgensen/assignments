var myObj = [{
    "name":"charmander",
    "type":"fire",
},
{
    "name":"bulbasaur",
    "type":"grass",
},
{
    "name":"squirtle",
    "type":"water"
}]



var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        document.getElementById('name').innerHTML = data.name
    }
};

xhr.open("get", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();