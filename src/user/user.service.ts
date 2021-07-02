import { Injectable, Inject } from '@nestjs/common';
import { ResultDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(data: UserCreateDto): Promise<ResultDto> {
    const newUser = new User();
    newUser.name = data.name;
    newUser.email = data.email;
    newUser.password = bcrypt.hashSync(data.password, 8);
    return this.userRepository
      .save(newUser)
      .then((result) => {
        console.log('Result: ', result);
        return <ResultDto>{
          status: true,
          message: 'Saved',
        };
      })
      .catch((error) => {
        console.log('Error: ', error);
        return <ResultDto>{
          status: false,
          message: 'Error on save user.',
        };
      });

    // return this.userRepository.create(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email: email });
  }
}
