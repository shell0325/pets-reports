import { Body, Controller, Inject, Post } from '@nestjs/common';
import { User } from '~/domain/user/user';
import {
  CreateUserInputDto,
  CreateUserUseCase,
  CREATE_USER_USE_CASE_PROVIDER,
} from '~/usecase/commands/createUserUseCase/createUserUseCase';
import {
  updateUserInputDto,
  updateUserOutputDto,
  UpdateUserUseCase,
  UPDATE_USER_USE_CASE_PROVIDER,
} from '~/usecase/commands/updateUserUseCase/updateUserUseCase';

@Controller('user')
export class UserController {
  constructor(
    @Inject(CREATE_USER_USE_CASE_PROVIDER)
    private readonly createUserUseCase: CreateUserUseCase,
    @Inject(UPDATE_USER_USE_CASE_PROVIDER)
    private readonly updateUserUseCase: UpdateUserUseCase,
  ) {}

  @Post('create')
  async createUser(@Body() user: CreateUserInputDto): Promise<User> {
    const createUser = await this.createUserUseCase.run(user);
    return createUser;
  }

  @Post('update')
  async updateUser(
    @Body() user: updateUserInputDto,
  ): Promise<updateUserOutputDto> {
    const updateUser = await this.updateUserUseCase.run(user);
    return updateUser;
  }
}
