import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { Driver } from '../drivers/entities/driver.entity';

import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepo: Repository<Driver>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly jwtService: JwtService,
  ) {}

  async loginDriver(
    email: string,
    password: string,
  ) {
    const driver =
      await this.driverRepo.findOne({
        where: { email },
      });

    if (!driver) {
      throw new UnauthorizedException(
        'Driver not found',
      );
    }

    const isValid = await bcrypt.compare(
      password,
      driver.password,
    );

    if (!isValid) {
      throw new UnauthorizedException(
        'Invalid password',
      );
    }

    const accessToken =
      this.jwtService.sign({
        id: driver.id,
        email: driver.email,
        role: 'driver',
      });

    return { accessToken };
  }

  async loginUser(
    email: string,
    password: string,
  ) {
    const user =
      await this.userRepo.findOne({
        where: { email },
      });

    if (!user) {
      throw new UnauthorizedException(
        'User not found',
      );
    }

    const isValid = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isValid) {
      throw new UnauthorizedException(
        'Invalid password',
      );
    }

    const accessToken =
      this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: 'user',
      });

    return { accessToken };
  }
}