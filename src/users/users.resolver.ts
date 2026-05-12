import {
  Resolver,
  Mutation,
  Args,
  Query,
} from '@nestjs/graphql';

import { UsersService } from './users.service';

import { User } from './entities/user.entity';

import { CreateUserInput } from './dto/create-user.input';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => User)
  registerUser(
    @Args('input')
    input: CreateUserInput,
  ) {
    return this.usersService.register(input);
  }

  @Query(() => [User])
  getUsers() {
    return this.usersService.findAll();
  }
}