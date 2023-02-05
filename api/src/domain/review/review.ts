import { UserCode } from '../user/userCode';
import { EvaluationType } from './evaluationType';
import { ReviewCode } from './reviewCode';

/**
 * レビュー
 *
 * @property id - 質問ID
 * @property name - レビュー対象の名前
 * @property content - レビュー内容
 * @property category - レビューのカテゴリー
 * @property evaluation - レビュー対象の評価
 * @property picture - レビュー対象の写真
 * @property user_id - レビューを行うユーザーID
 */

export type Review = Readonly<{
  id: ReviewCode;
  name: string;
  content: string;
  category: string; //変更入れる
  evaluation: EvaluationType;
  picture: string | null;
  user_id: UserCode;
  createdAt: Date;
  updatedAt: Date;
}>;
