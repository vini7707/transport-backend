import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DriversResolver } from './drivers.resolver';
import { DriversService } from './drivers.service';

import { Driver } from './entities/driver.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Driver]),
  ],

  providers: [
    DriversResolver,
    DriversService,
  ],
})
export class DriversModule {}