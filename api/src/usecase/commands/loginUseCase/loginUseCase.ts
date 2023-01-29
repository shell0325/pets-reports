import { PUser } from '@prisma/client';
import { UseCase } from '~/usecase/useCase';

export const LOGIN_USE_CASE_PROVIDER = 'LOGIN_USE_CASE';

export type LoginInputDto = PUser;

export type LoginOutputDto = {
  accessToken: string;
  user: PUser;
};

export type LoginUseCase = UseCase<LoginInputDto, LoginOutputDto>;
