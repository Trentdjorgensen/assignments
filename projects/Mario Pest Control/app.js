var button = document.getElementById('calculate')
button.addEventListener('click', calculate);

function calculate() {
    var goombas = Number(document.getElementById("goombas").value) * 5;
    var bobombs = Number(document.getElementById("bobombs").value) * 7;
    var cheepcheeps = Number(document.getElementById("cheepcheeps").value) * 11;
    t = goombas + bobombs + cheepcheeps;
  
    document.getElementById('total').textContent= t;
  }

