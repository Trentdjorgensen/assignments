var display = document.getElementById('team');
console.log(display);

// display.addEventListener('keypress', function(click){
//     if(click.code === "Enter"){
//         console.log("you clicked me");
//     }
// }

display.addEventListener('mouseover', change);

function change(){
    display.style.backgroundColor = "blue";
}

display.addEventListener('mousedown', cha);

function cha(){
    display.style.backgroundColor = "red";
}

display.addEventListener('mouseup', cha1);

function cha1(){
    display.style.backgroundColor = "yellow";
}

display.addEventListener('dblclick',cha2);

function cha2(){
    display.style.backgroundColor = "green";
}
