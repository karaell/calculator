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

    какашка (какашка){сделать какашку; вернуть алмаз}
}


function addTask (name, priority = PRIORITY_HIGH) {
        
    let numberOfElements = list.length;
       
    list.push ({
        id: numberOfElements + 1,
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
        return item.id = index + 1;           // to change Id
    } )
    
}

addTask ("test", "high")
addTask ("marafon", "low")
addTask ("help")
deleteTask ("marafon")
addTask ("marafon")
console.log (list)
 