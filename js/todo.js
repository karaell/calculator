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

function changeStatus (name, status = statusToDo) { 
    const isValidStatus = (status === statusInProgress || status === statusDone || status === statusToDo )
    if ( isNameInList(name) && isValidStatus ) {
    list[name] = status;
    }
}

function addTask (name) {
    if ( !(isNameInList(name)) ) {
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
            console.log (name);
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

/* function showList () {  
    
    let count = false;

    console.log ( statusToDo + ":" )
    for (let name in list) {
         if (list[name] === statusToDo) {
            console.log (` "${name}"`);
            count = true;
        } 
    }
    if (!count) {
        console.log (" -");
    }
    count = false;


    console.log ( statusInProgress + ":" )
    for (let name in list) {
        if (list[name] === statusInProgress) {
            console.log (` "${name}"`);
            count = true;
        } 
    }
    if (!count) {
        console.log (" -");
    }
    count = false;

    console.log ( tatusDone + ":" )
    for (let name in list) {
        if (list[name] === tatusDone) {
            console.log (` "${name}"`);
            count = true;
        }
    }
    if (!count) {
        console.log (" -");
    }
    count = false;
} */


addTask ( "have a walk" );
changeStatus ( "have a walk", "Done" );
deleteTask ( "have a walk" );
changeStatus ( "create a task", "To Do");
changeStatus ( "make a bed", "To Do" );
changeStatus ( "write a post", "In Progress" );
showList(); 