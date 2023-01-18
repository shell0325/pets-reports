/**
 * 体調タイプ
 *
 * @property GREAT_CONDITION - 絶好調
 * @property GENERALLY_GOOD - おおむね良好
 * @property NORMAL - 普通
 * @property NOT_FEELING_WELL - 少し悪い
 * @property SICK - 具合が悪い
 */

import { rawStrArr2EnumLikeObj } from '~/common/utils/enumLikeObj';

export const CONDITION_TYPE = rawStrArr2EnumLikeObj([
  'GREAT_CONDITION',
  'GENERALLY_GOOD',
  'NORMAL',
  'NOT_FEELING_WELL',
  'SICK',
]);

export type ConditionType = keyof typeof CONDITION_TYPE;
