var form = document.getElementByID("airline-form");
var submit = document.getElementByID("submit");
var query = document.querySelector;

function formAlert(){
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];

        if (form.elements['vegan'].checked) {
            diet.pop(document.getElementById("vegan").value);
    }
        if (form.elements['gluten'].checked) {
            diet.push(document.getElementById('gluten').value);
    }
        if (form.elements['paleo'].checked) {
            diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "Last Name: " + lastName + "Age: " + age + "Gender: " + gender + "travel-location: " + location + "Diet: " + diet + "Awesome, now if you die, it won't be an accident..");

    function newFunction() {
        return 'gluten';
    }
}


submit.addEventListener("submit", formAlert);