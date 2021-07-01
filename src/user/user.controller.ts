import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // @Get(':id')
  // async getById(@Param('id') id: number): Promise<Task> {
  //   return this.taskService.getById(id);
  // }

  // @Post()
  // async create(@Body() task: Task): Promise<Task> {
  //   return this.taskService.create(task);
  // }

  // @Put(':id')
  // async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
  //   task.id = id;
  //   return this.taskService.update(task);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   return this.taskService.delete(id);
  // }
}
