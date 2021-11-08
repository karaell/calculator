const statusInProgress = "In Progress";
const statusDone = "Done";
const statusToDo = "To Do";

const list = {
    "create a task": statusInProgress,
    "make a bed": statusDone,
    "write a post": statusToDo,
   }


function isNameInList (name) {
    if (name in list) {
        return true;
    }
}

function changeStatus (name, status) { 
    const isValidStatus = (status === statusInProgress || status === statusDone || status === statusToDo )
    if ( isNameInList() && isValidStatus ) {
    list[name] = status;
    }
}

function addTask (name) {
    if ( !isNameInList() ) {
    list[name] = statusToDo; // преимуществаа: исп. готовый код, мы сокрыли реализацию (не интересно нам, как меняется статус, если много таких присвоений статусов и нужно поменять его - меняем только в функции changeStatus
    }
} 

function deleteTask (name) { 
    delete list[name];
}

function choiceOfStatus (status) {

    let count = false;

    console.log (status + ":");
    for ( let name in list ) { // попробовать функцию
        if (list[name] === status) {
            console.log (` "${name}"`);
            count = true;
        }
    }
    if (!count) {
        console.log ("-")
    }
    count = false;
}

function showList () {
    choiceOfStatus (statusToDo);
    choiceOfStatus (statusInProgress);
    choiceOfStatus (statusDone);
}
addTask ( "have a walk" );
changeStatus ( "have a walk", "Done" );
deleteTask ( "have a walk" );
changeStatus ( "create a task", "To Do");
changeStatus ( "make a bed", "To Do" );
changeStatus ( "write a post", "In Progress" );
showList(); 
