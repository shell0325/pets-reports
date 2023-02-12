import { UserCode } from '../user/userCode';
import { CategoryType } from './categoryType';
import { EvaluationType } from './evaluationType';
import { ReviewCode } from './reviewCode';
import * as Eq from 'fp-ts/Eq';

/**
 * レビュー
 *
 * @property id - 質問ID
 * @property name - レビュー対象の名前
 * @property content - レビュー内容
 * @property category - レビューのカテゴリー
 * @property evaluation - レビュー対象の評価
 * @property picture - レビュー対象の写真
 * @property userId - レビューを行うユーザーID
 */

export type Review = Readonly<{
  id: ReviewCode;
  name: string;
  content: string;
  category: CategoryType;
  evaluation: EvaluationType;
  picture: string | null;
  userId: UserCode;
  createdAt: Date;
  updatedAt: Date;
}>;

export const Review = {
  eq: Eq.contramap<ReviewCode, Review>((review) => review.id)(ReviewCode.eq),
  register(input: Review) {
    const { id, userId, ...omitInput } = input;
    return {
      id: ReviewCode.iso.unwrap(id),
      userId: UserCode.iso.unwrap(userId),
      ...omitInput,
    };
  },
};
