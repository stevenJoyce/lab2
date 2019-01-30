import { toDoInterface } from './interfaceTasks';

class toDoClass implements toDoInterface
{
    tasks: Array<string> = [];

    addTask(task:string):number
    {
         this.tasks.push(task);
        return this.tasks.length;
    }//addTask

    listAllItems():void
    {
        this.tasks.forEach(function(task){console.log(task);})//foreach
    }//listAllTasks

    deleteTask(task:string): number
    {
        let index:number = this.tasks.indexOf(task,0);

        if(index > -1)
        {
            this.tasks.splice(index,1);
            console.log("Item " + task + " has been delected");
        }//if
        else
        {
            console.log("Item not found " + task); 
        }

        return this.tasks.length;
    }//deleteTasks

}//class

//Testing
let testClass = new toDoClass();
testClass.addTask("Item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllItems();
testClass.deleteTask("item2");
testClass.listAllItems();