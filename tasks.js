//create String array
var tasks = [];
//add to array function
function addTask(task) {
    tasks.push(task);
    return tasks.length;
} //addTask
//display listAllTasks function
function listAllTasks() {
    tasks.forEach(function (task) { console.log(task); }); //foreach
} //listAllTasks
//Delete items from array function
function deleteTasks(task) {
    var index = tasks.indexOf(task, 0);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item" + task + " has been delected");
    } //if
    else {
        console.log("Item not found " + task);
    }
    return tasks.length;
} //deleteTasks
//testing code
addTask("item1");
addTask("item2");
addTask("item3");
addTask("item4");
addTask("item5");
listAllTasks();
deleteTasks("Item2");
listAllTasks();
