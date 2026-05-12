import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { DriversModule } from './drivers/drivers.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      autoSchemaFile: join(
        process.cwd(),
        'src/schema.gql',
      ),

      playground: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',

      host:
        'transport-logistic-db.postgres.database.azure.com',

      port: 5432,

      username: 'vikashadmin',

      password: 'Anjana@7707',

      database: 'transportdb',

      ssl: true,

      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },

      autoLoadEntities: true,

      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),


    DriversModule,

    UsersModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}