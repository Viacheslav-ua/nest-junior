import { Body, Controller, Get, Header, HttpCode, Param, Post } from "@nestjs/common";
import { ITask } from "./task.interface";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController {

  constructor(private testService: TaskService) {}
  @Get()
  getTasks(): ITask[] {
    return this.testService.getTasks() 
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): ITask {
    return this.testService.getTaskById(Number(id))
  }

  @Post()
  createTask(@Body('task') task: ITask): ITask {
    this.testService.createTask(task)
    return task
  }
}