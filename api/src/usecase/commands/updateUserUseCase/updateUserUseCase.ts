import { GenderType, LocationType } from '@prisma/client';
import { UserCode } from '~/domain/user/userCode';
import { UseCase } from '~/usecase/useCase';

export type updateUserInputDto = {
  id: UserCode;
  name: string;
  email: string;
  gender: GenderType | null;
  age: number | null;
  location: LocationType | null;
};

export type updateUserOutputDto = {
  id: UserCode;
  name: string;
  email: string;
  gender: GenderType | null;
  age: number | null;
  location: LocationType | null;
};

export const UPDATE_USER_USE_CASE_PROVIDER = 'UPDATE_USER_USE_CASE';

export type UpdateUserUseCase = UseCase<
  updateUserInputDto,
  updateUserOutputDto
>;
