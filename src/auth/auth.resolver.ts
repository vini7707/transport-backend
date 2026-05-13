import {
  Resolver,
  Mutation,
  Args,
} from '@nestjs/graphql';

import { AuthService } from './auth.service';

import { LoginInput } from './dto/login.input';

import { AuthResponse } from './dto/auth-response';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => AuthResponse)
  loginDriver(
    @Args('input')
    input: LoginInput,
  ) {
    return this.authService.loginDriver(
      input.email,
      input.password,
    );
  }

  @Mutation(() => AuthResponse)
  loginUser(
    @Args('input')
    input: LoginInput,
  ) {
    return this.authService.loginUser(
      input.email,
      input.password,
    );
  }
}