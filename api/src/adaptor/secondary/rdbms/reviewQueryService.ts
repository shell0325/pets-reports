import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { findReviewByCategoryRequestDto } from '~/adaptor/primary/api/review/requests/findReviewByCategoryRequest.dto';
import { findReviewByUserIdRequestDto } from '~/adaptor/primary/api/review/requests/findReviewByUserIdRequest.dto';
import { Review } from '~/domain/review/review';
import {
  IReviewRepository,
  REVIEW_REPOSITORY_PROVIDE,
} from '~/domain/review/reviewRepository';
import { UserCode } from '~/domain/user/userCode';
import { IReviewQueryService } from '~/usecase/queries/reviewQueryService';

@Injectable()
export class ReviewQueryService implements IReviewQueryService {
  constructor(
    @Inject(REVIEW_REPOSITORY_PROVIDE)
    private readonly reviewRepository: IReviewRepository,
  ) {}

  async confirmReview(review: Review): Promise<Review[] | null> {
    if (!review) {
      return null;
    }
    const pReview = await this.reviewRepository.findReview();
    if (pReview) {
      const reviews = [];
      pReview.map(async (result) => {
        if (
          review.userId === result.userId &&
          review.category === result.category &&
          review.name === result.name &&
          review.content === result.content
        ) {
          reviews.push(result);
        }
      });
      if (reviews.length) {
        return reviews;
      }
    }
    return null;
  }

  async findReview(): Promise<Review[] | null> {
    const review = await this.reviewRepository.findReview();
    if (!review.length) {
      throw new NotFoundException('レビューが見つかりません。');
    }
    return review;
  }

  async findReviewByCategory(
    param: findReviewByCategoryRequestDto,
  ): Promise<Review[] | null> {
    if (!param.category) {
      throw new NotFoundException('カテゴリーを入力してください。');
    }
    const review = await this.reviewRepository.findReviewByCategory(
      param.category,
    );
    if (!review.length) {
      throw new NotFoundException('レビューが見つかりません。');
    }
    return review;
  }

  async findReviewByUserId(
    param: findReviewByUserIdRequestDto,
  ): Promise<Review[] | null> {
    if (!param.userId) {
      throw new NotFoundException('ユーザーが見つかりません。');
    }
    const review = await this.reviewRepository.findReviewByUserId(
      UserCode.iso.wrap(Number(param.userId)),
    );
    if (!review.length) {
      return null;
    }
    return review;
  }
}
