import { Inject, Injectable, Provider } from '@nestjs/common';
import { AUTH_SERVICE_PROVIDER, IAuthService } from './authServiceInterface';
import {
  LoginInputDto,
  LoginOutputDto,
  LoginUseCase,
  LOGIN_USE_CASE_PROVIDER,
} from './loginUseCase';

@Injectable()
export class LoginInteractor implements LoginUseCase {
  constructor(
    @Inject(AUTH_SERVICE_PROVIDER) private readonly authService: IAuthService,
  ) {}

  async run(input: LoginInputDto): Promise<LoginOutputDto> {
    const res = await this.authService.login(input);
    return res;
  }
}

export const LoginInteractorProvider: Provider = {
  provide: LOGIN_USE_CASE_PROVIDER,
  useClass: LoginInteractor,
};
