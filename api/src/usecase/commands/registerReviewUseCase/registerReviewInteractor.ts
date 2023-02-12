import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { Review } from '~/domain/review/review';
import {
  IReviewRepository,
  REVIEW_REPOSITORY_PROVIDE,
} from '~/domain/review/reviewRepository';
import {
  IReviewQueryService,
  REVIEW_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/reviewQueryService';
import {
  RegisterReviewInputDto,
  RegisterReviewOutputDto,
  RegisterReviewUseCase,
  REGISTER_REVIEW_USE_CASE_PROVIDER,
} from './registerReviewUseCase';

@Injectable()
export class RegisterReviewInteractor implements RegisterReviewUseCase {
  constructor(
    @Inject(REVIEW_REPOSITORY_PROVIDE)
    private readonly ReviewRepository: IReviewRepository,
    @Inject(REVIEW_QUERY_SERVICE_PROVIDE)
    private readonly ReviewService: IReviewQueryService,
  ) {}

  async run(input: RegisterReviewInputDto): Promise<RegisterReviewOutputDto> {
    if (!input) {
      throw new NotFoundException('レビュー内容を入力してください。');
    }
    const reviewValidate = await this.ReviewService.confirmReview(input);

    if (reviewValidate) {
      throw new NotFoundException('作成済みのレビューです。');
    }

    const registerReview = Review.register(input);

    const review = await this.ReviewRepository.save(registerReview);

    return review;
  }
}

export const RegisterReviewInteractorProvider: Provider = {
  provide: REGISTER_REVIEW_USE_CASE_PROVIDER,
  useClass: RegisterReviewInteractor,
};
