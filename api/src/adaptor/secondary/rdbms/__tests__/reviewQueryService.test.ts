import { CategoryType, EvaluationType } from '@prisma/client';
import { UserCode } from '~/domain/user/userCode';
import { PrismaService } from '../prisma/prismaService';
import { ReviewQueryService } from '../reviewQueryService';
import { ReviewRepository } from '../reviewRepository';

describe('reviewQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const reviewRepository = new ReviewRepository(prismaService);
  const reviewService = new ReviewQueryService(reviewRepository);

  beforeAll(async () => {
    const testReview = {
      name: 'testName',
      content: 'testContent',
      category: CategoryType.Bed,
      evaluation: EvaluationType.STAR3,
      picture: null,
      userId: 1000,
    };

    await prismaService.pReview.upsert({
      where: { id: 1000 },
      update: testReview,
      create: {
        ...testReview,
        id: 1000,
      },
    });
  });

  describe('findReviewのテスト', () => {
    describe('正常系テスト', () => {
      test('review情報がuserIdで取得できること', async () => {
        const pReview = await prismaService.pReview.findMany({
          where: { userId: 1000 },
        });
        const output = await reviewService.findReviewByUserId({
          userId: UserCode.iso.wrap(1000),
        });
        expect(output).toEqual(pReview);
      });

      test('review情報がcategoryで取得できること', async () => {
        const pReview = await prismaService.pReview.findMany({
          where: { category: CategoryType.Bed },
        });
        const output = await reviewService.findReviewByCategory({
          category: 'Bed',
        });
        expect(output).toEqual(pReview);
      });
    });
  });
});
