import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

import { CreateUserInput } from './dto/create-user.input';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(
    input: CreateUserInput,
  ): Promise<User> {
    const hashedPassword =
      await bcrypt.hash(input.password, 10);

    const user = this.userRepo.create({
      ...input,
      password: hashedPassword,
    });

    return this.userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
}