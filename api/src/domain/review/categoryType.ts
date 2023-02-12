import { rawStrArr2EnumLikeObj } from '~/common/utils/enumLikeObj';

/**
 * カテゴリータイプ
 *
 * @property Toy - おもちゃ
 * @property Toy - おもちゃ
 * @property PetFood - ペットフード
 * @property PetShop - ペットショップ
 * @property AnimalHospital - 動物病院
 * @property Supplement - サプリメント
 * @property IndoorGoods - 室内用品
 * @property Bed - ベッド
 * @property Collar - 首輪
 * @property Wear - 服
 * @property OutingGoods - 外出用品
 * @property CarrierBag - キャリーバッグ
 * @property DriveGoods - ドライブ用商品
 * @property DeodorantProducts - 消臭用品
 * @property CareProducts - ケア用品
 * @property ToiletProducts - トイレ用品
 * @property DisciplineProducts - しつけ用品
 * @property NursingCareProducts - 介護用品
 * @property PetHouse - ペットハウス
 * @property NameTag - ネームタグ
 * @property MiscellaneousGoods - 雑貨用品
 */

export const CATEGORY_TYPE = rawStrArr2EnumLikeObj([
  'Toy',
  'PetFood',
  'PetShop',
  'AnimalHospital',
  'Supplement',
  'IndoorGoods',
  'Bed',
  'Collar',
  'Wear',
  'OutingGoods',
  'CarrierBag',
  'DriveGoods',
  'DeodorantProducts',
  'CareProducts',
  'ToiletProducts',
  'DisciplineProducts',
  'NursingCareProducts',
  'PetHouse',
  'NameTag',
  'MiscellaneousGoods',
]);

export type CategoryType = keyof typeof CATEGORY_TYPE;
