const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_TO_DO = "To Do";

const PRIORITY_LOW = "low";
const PRIORITY_HIGH = "high";

const list = [ 
{ 
    id: 1,
    name: 'create a post',
    status: STATUS_TO_DO,
    priority: PRIORITY_LOW  
}, 
{ 
    id: 2,
    name: 'make a bed',
    status: STATUS_DONE,
    priority: PRIORITY_HIGH  
},
{
    id: 3,
    name: "create a task",
    status: STATUS_IN_PROGRESS,
    priority: PRIORITY_HIGH 
} 
] 


function changeStatus (nameOfTask, statusOfTask = STATUS_TO_DO) { 
    list.find ( function (item) {
        if (item.name == nameOfTask) { return item.status = statusOfTask }
    } );   
}


function addTask (name, priority = " ") {
    list.push ({
        id: list.length + 1,
        name: name,
        status: STATUS_TO_DO,
        priority: priority,
    })   
} 

function deleteTask (nameOfTask) { 
    let indexOfTask = list.findIndex ( function (item) {
        return item.name == nameOfTask; 
    });

    list.splice(indexOfTask, 1); 
    
    list.forEach ( function (item, index) {
        return item.id = index + 1;           // to change id after delete
    } )
    
}

function choiceOfKey (key) {
    let count = false;

    console.log (key + ":");
    list.filter (function (item) {
    
	if (item.priority === key) {
        console.log (" " + item.name)
        count = true;
    } 
	
	if (item.status === key) {
        console.log (" " + item.name)
        count = true;
    } 

    })
    if (!count) {
        console.log (" -")
    }
    count = false;
}

function showList (group) {
    
    switch (group) {
        case "status":
            choiceOfKey (STATUS_TO_DO);
            choiceOfKey (STATUS_IN_PROGRESS);
            choiceOfKey (STATUS_DONE);
        break;

        case "priority":
            choiceOfKey (PRIORITY_HIGH);
            choiceOfKey (PRIORITY_LOW);
        break;
        default: console.log ("Выберите группу: priority или status")
    }
              
}

changeStatus ("make a bed", STATUS_TO_DO)
showList("status")

 