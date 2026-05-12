import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Driver } from './entities/driver.entity';

import { CreateDriverInput } from './dto/create-driver.input';

import * as bcrypt from 'bcrypt';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driverRepo: Repository<Driver>,
  ) {}

  async register(
    input: CreateDriverInput,
  ): Promise<Driver> {
    const hashedPassword =
      await bcrypt.hash(input.password, 10);

    const driver = this.driverRepo.create({
      ...input,
      password: hashedPassword,
    });

    return this.driverRepo.save(driver);
  }

  async findAll(): Promise<Driver[]> {
    return this.driverRepo.find();
  }
}