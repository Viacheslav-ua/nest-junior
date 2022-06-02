import { Injectable } from "@nestjs/common";
import { ITask } from "./task.interface";



@Injectable()
export class TaskService {

  private tasks: ITask[] = [
    {id: 1, task: 'Task-1'},
    {id: 2, task: 'Task-2'},
  ]

  getTasks(): ITask[] {
    return this.tasks  
  }

  getTaskById(id: number): ITask {
    return this.tasks.find(task => task.id === id)
  }

  createTask(task: ITask): ITask {
    this.tasks.push(task)
    return task
  }
}