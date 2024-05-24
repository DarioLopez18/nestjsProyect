import { Injectable } from '@nestjs/common';

export interface TaskInterface {
  id: number;
  name: string;
  status: boolean;
}

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      name: 'Mi primer tarea desde nest js',
      status: true,
    },
    {
      id: 2,
      name: 'Mi segunda tarea desde nest js',
      status: true,
    },
    {
      id: 3,
      name: 'Mi tercer tarea desde nest js',
      status: true,
    },
    {
      id: 4,
      name: 'Mi cuarta tarea desde nest js',
      status: true,
    },
  ];
  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }
  getTasks() {
    return this.tasks;
  }
  createTasks(task: TaskInterface) {
    this.tasks.push(task);
    return task;
  }
  updateTask() {
    return 'Update a task in the controllers';
  }
  deleteTask() {
    return 'Delete a task in the controllers';
  }
}
