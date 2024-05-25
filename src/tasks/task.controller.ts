import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from './DTO/create-task.dto';

export interface TaskInterface {
  id: number;
  name: string;
  status: boolean;
}

@Controller({ path: 'tasks' })
export class TaskController {
  constructor(private taskService: TasksService) {}
  @Get('/:id')
  getTaskById(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id: string,
  ) {
    const task = this.taskService.getTaskById(parseInt(id));
    if (task) {
      //@ts-ignore
      return response.status(200).send(task);
    } else {
      //@ts-ignore
      return response.status(404).send('Task not found');
    }
  }
  @Get('/')
  getTasks(@Query() query: any) {
    return this.taskService.getTasks();
  }
  @Post('/')
  createTasks(@Body() task: createTaskDto) {
    return this.taskService.createTasks(task);
  }
  @Put('/')
  updateTasks() {
    return this.taskService.updateTask();
  }
  @Delete('/')
  deleteTasks() {
    return this.taskService.deleteTask();
  }
}
