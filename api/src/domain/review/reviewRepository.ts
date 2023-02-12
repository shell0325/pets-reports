import { PReview } from '@prisma/client';
import { UserCode } from '../user/userCode';
import { CategoryType } from './categoryType';
import { Review } from './review';

export const REVIEW_REPOSITORY_PROVIDE = 'REVIEW_REPOSITORY_PROVIDE';

export interface IReviewRepository {
  save(review: PReview): Promise<Review>;
  findReview(): Promise<Review[] | null>;
  findReviewByCategory(category: CategoryType): Promise<Review[] | null>;
  findReviewByUserId(userId: UserCode): Promise<Review[] | null>;
}
