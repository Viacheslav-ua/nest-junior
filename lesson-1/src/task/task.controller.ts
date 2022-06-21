import { Body, Controller, Get, Header, HttpCode, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
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

  @UsePipes( new ValidationPipe())
  @Post()
  createTask(@Body() task: CreateTaskDto): ITask {
    return this.testService.createTask(task)

  }
}