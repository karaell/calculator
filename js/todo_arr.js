const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";
const STATUS_TO_DO = "To Do";

const PRIORITY_LOW = "low";
const PRIORITY_MEDIUM = "medium";
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
    priority: PRIORITY_MEDIUM 
} 
] 

//let indexOfTask = ""
function changeStatus (nameOfTask, statusOfTask = STATUS_TO_DO) { 
    
        indexOfTask = list.findIndex(item => item.name == nameOfTask)
        
         // получаем индекс, в котором объект
        /* list.splice (indexOfTask, 0, obj = {
            id: ,
            name: nameOfTask,
            status: statusOfTask,
            priority:
        }) */
    
        //
    /* let findName = list.find (item => item.name == nameOfTask);
    if ( findName ) {
        nameOfTask = statusOfTask; */
    


    //list.name == nameOfTask;

    //list.splice (indexOfTask, 0, nameOfTask: status )
    
    /* list.find (function (nameOfTask) {
        if (item.name == nameOfTask) {  }
    } )
     */
    

    //indexOfTask.splice()

    //list.splice (indexOfTask, 0, {status: statusOfTask})
    
}


function addTask (name, priority, identifier) {
    list.push ({
        id: identifier,
        name: name,
        status: STATUS_TO_DO,
        priority: priority,
    })   
} 

function deleteTask (nameOfTask) {  
    let indexOfTask = list.findIndex ( function (item) {
        item.name == nameOfTask;
    })
    list.splice(--indexOfTask, 1);  
}



//changeStatus ("make a bed", STATUS_TO_DO)
addTask ("test", "high", 4)
addTask ("marafon")
deleteTask ("test")
console.log (list)
