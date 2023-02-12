import { Injectable, NotFoundException } from '@nestjs/common';
import { PReview } from '@prisma/client';
import { CategoryType } from '~/domain/review/categoryType';
import { Review } from '~/domain/review/review';
import { ReviewCode } from '~/domain/review/reviewCode';
import { IReviewRepository } from '~/domain/review/reviewRepository';
import { UserCode } from '~/domain/user/userCode';
import { PrismaService } from './prisma/prismaService';

export const convertReviewToReview = (pReview: PReview): Review => {
  const {
    id,
    name,
    content,
    category,
    evaluation,
    picture,
    userId,
    ...omitReview
  } = pReview;

  return {
    ...omitReview,
    id: ReviewCode.iso.wrap(id),
    name: name,
    content: content,
    category: category,
    evaluation: evaluation,
    picture: picture,
    userId: UserCode.iso.wrap(userId),
  };
};

@Injectable()
export class ReviewRepository implements IReviewRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(review: PReview): Promise<Review> {
    if (!review) {
      throw new NotFoundException('レビュー内容を入力してください。');
    }
    const pReview = await this.prisma.pReview.create({
      data: {
        name: review.name,
        content: review.content,
        category: review.category,
        evaluation: review.evaluation,
        picture: review.picture,
        userId: review.userId,
      },
    });
    return convertReviewToReview(pReview);
  }

  async findReview(): Promise<Review[] | null> {
    const review = await this.prisma.pReview.findMany();
    if (!review.length) {
      return null;
    }
    return review.map((result) => convertReviewToReview(result));
  }

  async findReviewByCategory(category: CategoryType): Promise<Review[] | null> {
    if (!category) {
      return null;
    }
    const review = await this.prisma.pReview.findMany({
      where: { category: category },
    });
    if (!review.length) {
      return null;
    }
    return review.map((result) => convertReviewToReview(result));
  }

  async findReviewByUserId(userId: UserCode): Promise<Review[] | null> {
    if (!userId) {
      return null;
    }
    const review = await this.prisma.pReview.findMany({
      where: { userId: UserCode.iso.unwrap(userId) },
    });
    if (!review.length) {
      return null;
    }
    return review.map((result) => convertReviewToReview(result));
  }
}
