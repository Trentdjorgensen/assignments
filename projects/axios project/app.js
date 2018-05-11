

var todoUrl = "https://api.vschool.io/trent23/todo/"

var display = document.getElementById("todos")


axios.get(todoUrl).then(function(response){
    displayData(response.data)
})

document.addTodo.addEventListener('submit', function(e){
    e.preventDefault();

    var newTodo = {
        title: document.addTodo.title.value,
        description: document.addTodo.description.value,
        price: document.addTodo.price.value,
        imgUrl: document.addTodo.img.value
    }

    axios.post(todoUrl, newTodo).then(function(response){
        console.log(response.data)
    })
})


function displayData(arr){
    if(arr.length){
        arr.map(function(todo){
            var title = document.createElement('h1');
            title.textContent = todo.title;

            var input = document.createElement("input");
            input.type = 'checkbox';

            var description = document.createElement('h3');
            description.textContent = todo.description

            var price = document.createElement('h6');
            price.textContent = todo.price;


           
            var image = document.createElement("img");
            image.src = todo.imgUrl


            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'delete';
            
            
            display.appendChild(title);
            display.appendChild(description);
            display.appendChild(price);
            display.appendChild(input);
            display.appendChild(image);
            display.appendChild(deleteBtn);
    })
}}




