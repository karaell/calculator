const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

   
function changeStatus (name, status) { // будет менять статус задачи 
    list[name] = status;
}

function addTask (name) {  // добавляет новую задачу
    list[name] = "To Do";
} 

function deleteTask (name) { // удаляет задачу
    delete list[name];
}

function showList () { // выводит весь список дел 
    for (let name in list) {
        if (list[name] == "To Do") {
            console.log ( "To Do:")
            console.log ( " " + name );
        } else if (list[name] === "In Progress") {
            console.log ( "In Progress:")
            console.log ( " " + name );
        } else if (list[name] === "Done") {
            console.log ( "Done:")
            console.log ( " " + name);
        } else if ( !(name in list)) {
            console.log ( " " + "-" )
        }
    }
}


addTask ( "have a walk" );
changeStatus ( "have a walk", "Done" );
deleteTask ( "have a walk" );
changeStatus ( "create a task", "To Do");
changeStatus ( "make a bed", "To Do" );
changeStatus ( "write a post", "In Progress" );

console.log (showList(list));