import {
  Controller,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  LoginOutputDto,
  LoginUseCase,
  LOGIN_USE_CASE_PROVIDER,
} from '~/usecase/commands/loginUseCase/loginUseCase';
import { LocalAuthGuard } from '../../authentication/local.auth.guard';
import { RequestUser } from './requests/loginRequest';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(LOGIN_USE_CASE_PROVIDER)
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: Request & RequestUser): Promise<LoginOutputDto> {
    const res = await this.loginUseCase.run(req.user);
    return res;
  }
}
