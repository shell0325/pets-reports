import { rawStrArr2EnumLikeObj } from '~/common/utils/enumLikeObj';

/**
 * お世話タイプ
 *
 * @property Meal - ご飯
 * @property Toilet - トイレ
 * @property Hospital - 病院
 * @property Medicine - 薬
 * @property Salon - サロン
 * @property Stroll - 散歩
 * @property Shopping - 買い物
 * @property Bath - お風呂
 * @property Others - その他
 */

export const CARE_TYPE = rawStrArr2EnumLikeObj([
  'Meal',
  'Toilet',
  'Hospital',
  'Medicine',
  'Salon',
  'Stroll',
  'Shopping',
  'Bath',
  'Others',
]);

export type CareType = keyof typeof CARE_TYPE
