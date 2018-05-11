document.add.addEventListener("submit", function(e){
    e.preventDefault();

    var num1 = document.add.num1.value;
    var num2 = document.add.num2.value;
    
    var add1 = document.getElementById('add1')
    add1.textContent = Number(num1)+ Number(num2);
})

document.sub.addEventListener("submit", function(e){
    e.preventDefault();

    var neg1 = document.sub.neg1.value;
    var neg2 = document.sub.neg2.value;

    var sub = document.getElementById('sub1')
    sub.textContent = Number(neg1)- Number(neg2);
})

document.times.addEventListener("submit", function(e){
    e.preventDefault();

    var tim1 = document.times.tim1.value;
    var tim2 = document.times.tim2.value;

    var times = document.getElementById('tim1')
    times.textContent = Number(tim1)* Number(tim2);
})