import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { RequestsResolver } from './requests.resolver';

import { RequestsService } from './requests.service';

import { Request } from './entities/request.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Request,
    ]),
  ],

  providers: [
    RequestsResolver,
    RequestsService,
  ],
})
export class RequestsModule {}