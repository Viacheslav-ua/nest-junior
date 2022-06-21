import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./task.entity";
import { ITask } from "./task.interface";



@Injectable()
export class TaskService {

  private tasks: ITask[] = []

  getTasks(): ITask[] {
    return this.tasks
  }

  getTaskById(id: number): ITask {
    return this.tasks.find(task => task.id === id)
  }

  createTask({ task, tags, status }: CreateTaskDto): ITask {
    const newTask = new Task(task, tags, status)
    this.tasks.push(newTask)
    return newTask
  }
}