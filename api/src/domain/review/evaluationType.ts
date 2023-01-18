import { rawStrArr2EnumLikeObj } from '~/common/utils/enumLikeObj';

/**
 * 評価タイプ
 *
 * @property 1STAR - 星一つ
 * @property 2STAR - 星二つ
 * @property 3STAR - 星三つ
 * @property 4STAR - 星四つ
 * @property 5STAR - 星五つ
 */

export const EVALUATION_TYPE = rawStrArr2EnumLikeObj([
  '1STAR',
  '2STAR',
  '3STAR',
  '4STAR',
  '5STAR',
]);

export type EvaluationType = keyof typeof EVALUATION_TYPE;
