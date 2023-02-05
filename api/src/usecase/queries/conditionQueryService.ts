import { Condition } from '~/domain/condition/condition';
import { PetCode } from '~/domain/pet/petCode';

export const CONDITION_QUERY_SERVICE_PROVIDE =
  'CONDITION_QUERY_SERVICE_PROVIDE';

export interface IConditionQueryService {
  confirmCondition(condition: Condition): Promise<Condition[] | null>;
  findCondition(petId: PetCode): Promise<Condition[]>;
}
