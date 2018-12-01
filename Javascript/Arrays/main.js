window.onload = function () {
    var todos = ["Buy new turtle"];
    var input = prompt("What would you like to do?");

    function listTodos(){
        console.log('**********');
        todos.forEach((todo, idx) => {
            console.log(`${idx}: ${todo}`);
        })
        console.log('**********');
    }
    function newTodo(){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added Todo");
    }
    function deleteTodo(){
        let index = prompt("Enter index of todo to delete");
        todos.splice(index,1);
        console.log("Deleted Todo");
    }
    
    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            newTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        var input = prompt("What would you like to do?");
    }
    console.log("Ok, you quit the app");
}

