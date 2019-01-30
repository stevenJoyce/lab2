export interface toDoInterface
{
    tasks: Array<String>;
    addTask(task:string):number;
    listAllItems():void;
    deleteTask(task:string):number;
}//interface
