"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.tasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    }; //addTask
    toDoClass.prototype.listAllItems = function () {
        this.tasks.forEach(function (task) { console.log(task); }); //foreach
    }; //listAllTasks
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item" + task + " has been delected");
        } //if
        else {
            console.log("Item not found " + task);
        }
        return this.tasks.length;
    }; //deleteTasks
    return toDoClass;
}()); //class
//Testing
var testClass = new toDoClass();
testClass.addTask("Item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllItems();
testClass.deleteTask("item2");
testClass.listAllItems();
