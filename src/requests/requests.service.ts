import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Request } from './entities/request.entity';

import { CreateRequestInput } from './dto/create-request.input';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestRepo: Repository<Request>,
  ) {}

  createRequest(
    input: CreateRequestInput,
  ) {
    const request =
      this.requestRepo.create(input);

    return this.requestRepo.save(request);
  }

  getDriverRequests(driverId: number) {
    return this.requestRepo.find({
      where: { driverId },
    });
  }

  getUserRequests(userId: number) {
    return this.requestRepo.find({
      where: { userId },
    });
  }

  async acceptRequest(id: number) {
    const request =
      await this.requestRepo.findOne({
        where: { id },
      });

    if (!request) {
      throw new NotFoundException(
        'Request not found',
      );
    }

    request.status = 'ACCEPTED';

    return this.requestRepo.save(request);
  }

  async rejectRequest(id: number) {
    const request =
      await this.requestRepo.findOne({
        where: { id },
      });

    if (!request) {
      throw new NotFoundException(
        'Request not found',
      );
    }

    request.status = 'REJECTED';

    return this.requestRepo.save(request);
  }
}