import {
  Resolver,
  Mutation,
  Query,
  Args,
  Int,
} from '@nestjs/graphql';

import { RequestsService } from './requests.service';

import { Request } from './entities/request.entity';

import { CreateRequestInput } from './dto/create-request.input';

@Resolver()
export class RequestsResolver {
  constructor(
    private readonly requestsService: RequestsService,
  ) {}

  @Mutation(() => Request)
  createRequest(
    @Args('input')
    input: CreateRequestInput,
  ) {
    return this.requestsService.createRequest(
      input,
    );
  }

  @Mutation(() => Request)
  acceptRequest(
    @Args('id', {
      type: () => Int,
    })
    id: number,
  ) {
    return this.requestsService.acceptRequest(
      id,
    );
  }

  @Mutation(() => Request)
  rejectRequest(
    @Args('id', {
      type: () => Int,
    })
    id: number,
  ) {
    return this.requestsService.rejectRequest(
      id,
    );
  }

  @Query(() => [Request])
  driverRequests(
    @Args('driverId', {
      type: () => Int,
    })
    driverId: number,
  ) {
    return this.requestsService.getDriverRequests(
      driverId,
    );
  }

  @Query(() => [Request])
  userRequests(
    @Args('userId', {
      type: () => Int,
    })
    userId: number,
  ) {
    return this.requestsService.getUserRequests(
      userId,
    );
  }
}