import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private TasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.TasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: createTaskDto) {
    return this.TasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.TasksService.deleteTask(id);
  }
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: updateTaskDto) {
    return this.TasksService.updateTask(id, updateFields);
    
  }
}
