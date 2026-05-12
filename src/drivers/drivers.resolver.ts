import {
  Resolver,
  Mutation,
  Args,
  Query,
} from '@nestjs/graphql';

import { DriversService } from './drivers.service';

import { Driver } from './entities/driver.entity';

import { CreateDriverInput } from './dto/create-driver.input';

@Resolver()
export class DriversResolver {
  constructor(
    private readonly driversService: DriversService,
  ) {}

  @Mutation(() => Driver)
  registerDriver(
    @Args('input')
    input: CreateDriverInput,
  ) {
    return this.driversService.register(input);
  }

  @Query(() => [Driver])
  getDrivers() {
    return this.driversService.findAll();
  }
}