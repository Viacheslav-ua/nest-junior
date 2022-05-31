import { Controller, Get, Header, HttpCode, Param } from "@nestjs/common";

@Controller('task')
export class TestController {

  private tasks:{id: number, task: string}[] = [
    {id: 1, task: 'Task-1'},
    {id: 2, task: 'Task-2'},
  ]

  @Get()
  getTasks() {
    return this.tasks
  }

  @Get('id:')
  getTaskById(@Param('id') id: number) {
    return
  }
}