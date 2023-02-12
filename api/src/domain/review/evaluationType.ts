import { rawStrArr2EnumLikeObj } from '~/common/utils/enumLikeObj';

/**
 * 評価タイプ
 *
 * @property STAR1 - 星一つ
 * @property STAR2 - 星二つ
 * @property STAR3 - 星三つ
 * @property STAR4 - 星四つ
 * @property STAR5 - 星五つ
 */

export const EVALUATION_TYPE = rawStrArr2EnumLikeObj([
  'STAR1',
  'STAR2',
  'STAR3',
  'STAR4',
  'STAR5',
]);

export type EvaluationType = keyof typeof EVALUATION_TYPE;
