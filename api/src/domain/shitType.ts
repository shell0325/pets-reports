/**
 * 便タイプ
 *
 * @property TYPE1 - コロコロ便
 * @property TYPE2 - 固い便
 * @property TYPE3 - やや固い便
 * @property TYPE4 - 普通便
 * @property TYPE5 - やや柔らかい便
 * @property TYPE6 - 泥状便
 * @property TYPE7 - 水様便
 */

import { rawStrArr2EnumLikeObj } from '~/common/utils/enumLikeObj';

export const SHIT_TYPE = rawStrArr2EnumLikeObj([
  'TYPE1',
  'TYPE2',
  'TYPE3',
  'TYPE4',
  'TYPE5',
  'TYPE6',
  'TYPE7',
]);

export type ShitType = keyof typeof SHIT_TYPE;
