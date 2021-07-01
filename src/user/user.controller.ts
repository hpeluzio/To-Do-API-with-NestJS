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
import { UserCreateDto } from './dto/user.create.dto';
import { ResultDto } from 'src/dto/result.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() data: UserCreateDto): Promise<ResultDto> {
    console.log('data: ', data);
    return this.userService.create(data);
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
