import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthResolver } from './auth.resolver';

import { AuthService } from './auth.service';

import { Driver } from '../drivers/entities/driver.entity';

import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: 'mysecretkey',

      signOptions: {
        expiresIn: '7d',
      },
    }),

    TypeOrmModule.forFeature([
      Driver,
      User,
    ]),
  ],

  providers: [
    AuthResolver,
    AuthService,
  ],
})
export class AuthModule {}