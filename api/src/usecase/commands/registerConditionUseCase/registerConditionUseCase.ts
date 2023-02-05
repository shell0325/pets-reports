import { ConditionType, ShitType } from '@prisma/client';
import { ConditionCode } from '~/domain/condition/conditionCode';
import { PetCode } from '~/domain/pet/petCode';
import { UseCase } from '~/usecase/useCase';

export type RegisterConditionInputDto = {
  id: ConditionCode;
  weight: number | null;
  length: number | null;
  temperature: number | null;
  shit: ShitType | null;
  shit_state: string | null;
  condition: ConditionType | null;
  condition_state: string | null;
  vomiting: boolean;
  vomiting_state: string | null;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
};

export type RegisterConditionOutputDto = {
  id: ConditionCode;
  weight: number | null;
  length: number | null;
  temperature: number | null;
  shit: ShitType | null;
  shit_state: string | null;
  condition: ConditionType | null;
  condition_state: string | null;
  vomiting: boolean;
  vomiting_state: string | null;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
};

export const REGISTER_CONDITION_USE_CASE_PROVIDER =
  'REGISTER_CONDITION_USE_CASE_PROVIDER';

export type RegisterConditionUseCase = UseCase<
  RegisterConditionInputDto,
  RegisterConditionOutputDto
>;
