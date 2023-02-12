import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import {
  RegisterReviewUseCase,
  REGISTER_REVIEW_USE_CASE_PROVIDER,
} from '~/usecase/commands/registerReviewUseCase/registerReviewUseCase';
import {
  IReviewQueryService,
  REVIEW_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/reviewQueryService';
import { findReviewByCategoryRequestDto } from './requests/findReviewByCategoryRequest.dto';
import { findReviewByUserIdRequestDto } from './requests/findReviewByUserIdRequest.dto';
import { RegisterReviewResponseDto } from './requests/registerReviewRequest.dto';
import { FindReviewResponseDto } from './response/findReviewResponse.dto';

@Controller('review')
export class ReviewController {
  constructor(
    @Inject(REGISTER_REVIEW_USE_CASE_PROVIDER)
    private readonly RegisterReviewUseCase: RegisterReviewUseCase,
    @Inject(REVIEW_QUERY_SERVICE_PROVIDE)
    private readonly ReviewService: IReviewQueryService,
  ) {}

  @Get()
  async findReview(): Promise<FindReviewResponseDto[]> {
    const review = await this.ReviewService.findReview();

    return review;
  }

  @Get('/userId/:id')
  async findReviewByUserId(
    @Param() param: findReviewByUserIdRequestDto,
  ): Promise<FindReviewResponseDto[]> {
    const review = await this.ReviewService.findReviewByUserId(param);

    return review;
  }

  @Get('/category')
  async findReviewByCategory(
    @Body() param: findReviewByCategoryRequestDto,
  ): Promise<FindReviewResponseDto[]> {
    const review = await this.ReviewService.findReviewByCategory(param);

    return review;
  }

  @Post()
  async registerReview(
    @Body() input: RegisterReviewResponseDto,
  ): Promise<RegisterReviewResponseDto> {
    const review = await this.RegisterReviewUseCase.run(input);

    return review;
  }
}
