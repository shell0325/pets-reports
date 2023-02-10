import { UserCode } from '~/domain/user/userCode';
import { BraggingQueryService } from '../braggingQueryService';
import { BraggingRepository } from '../braggingRepository';
import { PrismaService } from '../prisma/prismaService';
import { UserRepository } from '../userRepository';

describe('braggingQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const braggingRepository = new BraggingRepository(prismaService);
  const userRepository = new UserRepository(prismaService);
  const braggingService = new BraggingQueryService(
    braggingRepository,
    userRepository,
  );

  beforeAll(async () => {
    const testBragging = {
      title: 'test',
      content: 'test',
      picture: null,
      userId: 1000,
      petId: 1000,
    };

    await prismaService.pBragging.upsert({
      where: { id: 1000 },
      update: testBragging,
      create: {
        ...testBragging,
        id: 1000,
      },
    });
  });

  describe('findBraggingのテスト', () => {
    describe('正常系テスト', () => {
      test('bragging情報が取得できること', async () => {
        const pBragging = await prismaService.pBragging.findMany({
          where: { userId: 1000 },
        });
        const output = await braggingService.findBragging({
          id: UserCode.iso.wrap(1000),
        });
        expect(output).toEqual(pBragging);
      });
    });
  });
});
