import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'tarefa 1', completed: false },
    { id: 2, description: 'tarefa 2', completed: false },
    { id: 3, description: 'tarefa 3', completed: false },
    { id: 4, description: 'tarefa 4', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    return this.tasks.find((value) => value.id === id);
  }

  // create(task: Task) {}

  // update(task: Task) {}

  // delete(id: number) {}
}
