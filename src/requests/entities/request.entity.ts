import {
  ObjectType,
  Field,
  ID,
} from '@nestjs/graphql';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'requests' })
export class Request {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  userId!: number;

  @Field()
  @Column()
  driverId!: number;

  @Field()
  @Column()
  pickupLocation!: string;

  @Field()
  @Column()
  dropLocation!: string;

  @Field()
  @Column()
  containerDetails!: string;

  @Field()
  @Column({
    default: 'PENDING',
  })
  status!: string;
}