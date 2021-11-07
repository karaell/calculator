const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

  
function changeStatus (name, status) { // меняет статус задачи 
    list[name] = status;
}

function addTask (name) {  // добавляет новую задачу
    list[name] = "To Do";
} 

function deleteTask (name) { // удаляет задачу
    delete list[name];
}

function showList () { // выводит весь список дел 
    
    let count = false;

    console.log ( "To Do:" )
    for (let name in list) {
         if (list[name] === "To Do") {
            console.log (` "${name}"`);
            count = true;
        } 
    }
    if (!count) {
        console.log (" -");
    }
    count = false;


    console.log ( "In Progress:" )
    for (let name in list) {
        if (list[name] === "In Progress") {
            console.log (` "${name}"`);
            count = true;
        } 
    }
    if (!count) {
        console.log (" -");
    }
    count = false;

    console.log ( "Done:" )
    for (let name in list) {
        if (list[name] === "Done") {
            console.log (` "${name}"`);
            count = true;
        }
    }
    if (!count) {
        console.log (" -");
    }
    count = false;
}


addTask ( "have a walk" );
changeStatus ( "have a walk", "Done" );
deleteTask ( "have a walk" );
changeStatus ( "create a task", "To Do");
changeStatus ( "make a bed", "To Do" );
changeStatus ( "write a post", "In Progress" );
showList();