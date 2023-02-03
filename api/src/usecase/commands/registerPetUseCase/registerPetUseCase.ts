import { GenderType } from '@prisma/client';
import { PetCode } from '~/domain/pet/petCode';
import { UserCode } from '~/domain/user/userCode';
import { UseCase } from '~/usecase/useCase';

export type RegisterPetInputDto = {
  id: PetCode;
  name: string;
  picture: string | null;
  kinds: string;
  gender: GenderType;
  birthday: Date;
  color: string;
  welcome_family: Date;
  memo: string | null;
  userId: UserCode;
};

export type RegisterPetOutputDto = {
  id: PetCode;
  name: string;
  picture: string | null;
  kinds: string;
  gender: GenderType;
  birthday: Date;
  color: string;
  welcome_family: Date;
  memo: string | null;
};

export const REGISTER_PET_USE_CASE_PROVIDER = 'REGISTER_PET_USE_CASE';

export type RegisterPetUseCase = UseCase<
  RegisterPetInputDto,
  RegisterPetOutputDto
>;
