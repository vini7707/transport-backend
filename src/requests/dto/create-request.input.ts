import {
  InputType,
  Field,
} from '@nestjs/graphql';

@InputType()
export class CreateRequestInput {
  @Field()
  userId!: number;

  @Field()
  driverId!: number;

  @Field()
  pickupLocation!: string;

  @Field()
  dropLocation!: string;

  @Field()
  containerDetails!: string;
}