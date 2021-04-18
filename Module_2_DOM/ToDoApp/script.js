let todoInput = document.querySelector(".todo-input"); //it will contain the input
let addTodoButton = document.querySelector(".add-todo"); 
let todosList = document.querySelector(".todos-list"); 

function addTodo(){
    let todo = todoInput.value;// todo will contain input value
    //falsie values => {"" , 0 , false , undefined}
    if(todo){
        let listItem = document.createElement("li"); // it creates an element
        listItem.classList.add("todo-item"); // it adds class to an element
        //the above comand is like => <li class="todo-item"></li>;

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // the above comand is like =><p class="todo">Learn HTML !!!</p>

  

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";
        //the above comand is like => <button class="delete-task">DELETE</button>

        deleteButton.addEventListener("click" , function(event){
            console.log("delete todo clicked !!!");
            // console.log(event);
            event.target.parentNode.remove();
        })

        listItem.append(pTag);
        listItem.append(deleteButton);
        
        todosList.append(listItem);
        todoInput.value = "";
    }
}

addTodoButton.addEventListener("click" , function(){
    addTodo()
});

todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});






