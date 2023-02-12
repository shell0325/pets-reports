import { findReviewByCategoryRequestDto } from '~/adaptor/primary/api/review/requests/findReviewByCategoryRequest.dto';
import { findReviewByUserIdRequestDto } from '~/adaptor/primary/api/review/requests/findReviewByUserIdRequest.dto';
import { Review } from '~/domain/review/review';

export const REVIEW_QUERY_SERVICE_PROVIDE = 'REVIEW_QUERY_SERVICE_PROVIDE';

export interface IReviewQueryService {
  confirmReview(review: Review): Promise<Review[] | null>;
  findReview(): Promise<Review[] | null>;
  findReviewByCategory(
    param: findReviewByCategoryRequestDto,
  ): Promise<Review[] | null>;
  findReviewByUserId(
    param: findReviewByUserIdRequestDto,
  ): Promise<Review[] | null>;
}
