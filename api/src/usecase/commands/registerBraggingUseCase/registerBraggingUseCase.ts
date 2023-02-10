import { BraggingCode } from '~/domain/bragging/braggingCode';
import { PetCode } from '~/domain/pet/petCode';
import { UserCode } from '~/domain/user/userCode';
import { UseCase } from '~/usecase/useCase';

export type RegisterBraggingInputDto = {
  id: BraggingCode;
  title: string;
  content: string;
  picture: string | null;
  userId: UserCode;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
};

export type RegisterBraggingOutputDto = {
  id: BraggingCode;
  title: string;
  content: string;
  picture: string | null;
  userId: UserCode;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
};

export const REGISTER_BRAGGING_USE_CASE_PROVIDER =
  'REGISTER_BRAGGING_USE_CASE_PROVIDER';

export type RegisterBraggingUseCase = UseCase<
  RegisterBraggingInputDto,
  RegisterBraggingOutputDto
>;
