import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'drivers' })
export class Driver {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ unique: true })
  email!: string;
  @Column()
  password!: string;

  @Field()
  @Column()
  phoneNumber!: string;

  @Field()
  @Column()
  vehicleNumber!: string;

  @Field()
  @Column()
  licenceNumber!: string;
}