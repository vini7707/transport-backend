import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDriverInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  phoneNumber!: string;

  @Field()
  vehicleNumber!: string;

  @Field()
  licenceNumber!: string;
}