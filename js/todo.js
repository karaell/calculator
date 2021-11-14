const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_TO_DO = "To Do";

const list = {
    "create a task": STATUS_IN_PROGRESS,
    "make a bed": STATUS_DONE,
    "write a post": STATUS_TO_DO,
   }

function isNameInList (name) {
    return name in list; // имя есть - будет true
}

function changeStatus (name, status = STATUS_TO_DO) { 
    const isValidStatus = (status === STATUS_IN_PROGRESS || status === STATUS_DONE || status === STATUS_TO_DO )
    if ( isNameInList(name) && isValidStatus ) {
    list[name] = status;
    }
}

function addTask (name) {
    if ( !isNameInList(name) ) {
    list[name] = undefined;
    changeStatus (name);
    }
} 

function deleteTask (name) { 
    delete list[name];
}

function choiceOfStatus (status) {

    let count = false;

    console.log (status + ":");
    for ( let name in list ) { 
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
    choiceOfStatus (STATUS_TO_DO);
    choiceOfStatus (STATUS_IN_PROGRESS);
    choiceOfStatus (STATUS_DONE);
}

addTask ( "have a walk" );
changeStatus ( "have a walk", "Done" );
deleteTask ( "have a walk" );
changeStatus ( "create a task", "To Do");
changeStatus ( "make a bed", "To Do" );
changeStatus ( "write a post", "In Progress" );
showList(); 

