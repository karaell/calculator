const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_TO_DO = "To Do";

const PRIORITY_LOW = "low";
const PRIORITY_HIGH = "high";

let countId = 1;

const list = [ ] 


function changeStatus (taskName, taskStatus = STATUS_TO_DO) { 
    list.find ( function (item) {
        if (item.name === taskName) { return item.status = taskStatus }
    } );   
};


function addTask (name, priority = PRIORITY_LOW) {
    list.push ({
        id: countId,
        name,
        status: STATUS_TO_DO,
        priority,
    })
    countId++;
};

function deleteTask (taskName) { 
    let taskIndex = list.findIndex ( function (item) {
        return item.name == taskName; 
    });

    list.splice(taskIndex, 1); 
};

function keySelection (key) {
    let count = false;

    console.log (key + ":");
    list.filter (function (item) {
    const choicePriorityOrStatus = item.priority === key || item.status === key;

	if ( choicePriorityOrStatus ) {
        console.log (" " + item.name);
        count = true;
        } 
    })

    if (!count) { 
        console.log (" -") 
    };
    count = false;
}

function showList (group) {
    
    switch (group) {
        case "status":
            keySelection (STATUS_TO_DO);
            keySelection (STATUS_IN_PROGRESS);
            keySelection (STATUS_DONE);
        break;

        case "priority":
            keySelection (PRIORITY_HIGH);
            keySelection (PRIORITY_LOW);
        break;
        default: console.log ("Выберите группу: priority или status")
    }
              
}

addTask ("create a post", "low") // task 1 
addTask ("test", "high")         // 2
addTask ("marafon", "high")      // 3
changeStatus ("marafon", "Done")
changeStatus ("test", "Done")
addTask ("course")               // 4
deleteTask ("marafon")

console.log (list)
//showList("status")
//showList("priority")

 