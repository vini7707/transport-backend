import { ObjectType, Field, ID } from '@nestjs/graphql';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
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
  address!: string;
}