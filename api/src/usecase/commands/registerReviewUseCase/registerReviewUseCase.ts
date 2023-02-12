import { CategoryType, EvaluationType } from '@prisma/client';
import { ReviewCode } from '~/domain/review/reviewCode';
import { UserCode } from '~/domain/user/userCode';
import { UseCase } from '~/usecase/useCase';

export type RegisterReviewInputDto = {
  id: ReviewCode;
  name: string;
  content: string;
  category: CategoryType;
  evaluation: EvaluationType;
  picture: string | null;
  userId: UserCode;
  createdAt: Date;
  updatedAt: Date;
};

export type RegisterReviewOutputDto = {
  id: ReviewCode;
  name: string;
  content: string;
  category: CategoryType;
  evaluation: EvaluationType;
  picture: string | null;
  userId: UserCode;
  createdAt: Date;
  updatedAt: Date;
};

export const REGISTER_REVIEW_USE_CASE_PROVIDER =
  'REGISTER_REVIEW_USE_CASE_PROVIDER';

export type RegisterReviewUseCase = UseCase<
  RegisterReviewInputDto,
  RegisterReviewOutputDto
>;
