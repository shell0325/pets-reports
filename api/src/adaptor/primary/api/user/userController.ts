import { Body, Controller, Inject, Post } from '@nestjs/common';
import { User } from '~/domain/user/user';
import {
  CreateUserInputDto,
  CreateUserUseCase,
  CREATE_USER_USE_CASE_PROVIDER,
} from '~/usecase/commands/createUserUseCase/createUserUseCase';

@Controller('users')
export class UserController {
  constructor(
    @Inject(CREATE_USER_USE_CASE_PROVIDER)
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async createUser(@Body() user: CreateUserInputDto): Promise<User> {
    const createUser = await this.createUserUseCase.run(user);
    return createUser;
  }
}
