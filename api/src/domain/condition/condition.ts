import { PetCode } from '../pet/petCode';
import { ShitType } from '../shitType';
import { ConditionCode } from './conditionCode';
import { ConditionType } from './conditionType';
import * as Eq from 'fp-ts/Eq';

/**
 * 体調
 *
 * @property id 体調ID
 * @property weight - 体重
 * @property length - 体長
 * @property temperature - 体温
 * @property shit - 便
 * @property shit_state - 便の状態
 * @property condition - 体調
 * @property condition_state 体調状態
 * @property vomiting - 嘔吐
 * @property vomiting_state - 嘔吐の状態
 * @property petId - ペットID
 */

export type Condition = Readonly<{
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
}>;

export const Condition = {
  eq: Eq.contramap<ConditionCode, Condition>((condition) => condition.id)(
    ConditionCode.eq,
  ),
  register(input: Condition) {
    const { id, petId, ...omitInput } = input;
    return {
      id: ConditionCode.iso.unwrap(id),
      petId: PetCode.iso.unwrap(petId),
      ...omitInput,
    };
  },
};
