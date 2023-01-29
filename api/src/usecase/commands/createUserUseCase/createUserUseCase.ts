import { GenderType, LocationType } from '@prisma/client';
import { UserCode } from '~/domain/user/userCode';
import { UseCase } from '~/usecase/useCase';

export type CreateUserInputDto = {
  id: UserCode;
  name: string;
  email: string;
  password: string;
  gender: null;
  age: null;
  location: null;
};

export type CreateUserOutputDto = {
  id: UserCode;
  name: string;
  email: string;
  password: string;
  gender: GenderType | null;
  age: number | null;
  location: LocationType | null;
};

export const CREATE_USER_USE_CASE_PROVIDER = 'CREATE_USER_USE_CASE';

export type CreateUserUseCase = UseCase<
  CreateUserInputDto,
  CreateUserOutputDto
>;
