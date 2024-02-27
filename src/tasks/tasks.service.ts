import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from  'uuid'
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return this.tasks;
  }
  updateTask(id: string, updateFields: updateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id == id);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
