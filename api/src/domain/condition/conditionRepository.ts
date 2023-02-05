import { PCondition } from '@prisma/client';
import { PetCode } from '../pet/petCode';
import { Condition } from './condition';

export const CONDITION_REPOSITORY_PROVIDE = 'CONDITION_REPOSITORY_PROVIDE';

export interface IConditionRepository {
  save(condition: PCondition): Promise<Condition>;
  findCondition(petId: PetCode): Promise<Condition[] | null>;
}
