import { CareCode } from '~/domain/care/careCode';
import { CareType } from '~/domain/care/careType';
import { PetCode } from '~/domain/pet/petCode';
import { UseCase } from '~/usecase/useCase';

export type RegisterCareInputDto = {
  id: CareCode;
  name: CareType;
  content: string;
  time: Date;
  memo: string | null;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
};

export type RegisterCareOutputDto = {
  id: CareCode;
  name: CareType;
  content: string;
  time: Date;
  memo: string | null;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
};

export const REGISTER_CARE_USE_CASE_PROVIDER =
  'REGISTER_CARE_USE_CASE_PROVIDER';

export type RegisterCareUseCase = UseCase<
  RegisterCareInputDto,
  RegisterCareOutputDto
>;
