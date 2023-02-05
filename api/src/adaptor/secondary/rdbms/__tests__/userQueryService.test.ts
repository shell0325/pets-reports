import { PrismaService } from '../prisma/prismaService';
import { UserQueryService } from '../userQueryService';
import { UserRepository } from '../userRepository';

describe('userQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const userRepository = new UserRepository(prismaService);
  const userQueryService = new UserQueryService(userRepository);

  beforeAll(async () => {
    const testUser = {
      name: 'testUser',
      email: 'testMail@test.com',
      password: 'testPassword',
      gender: null,
      age: null,
      location: null,
    };

    await prismaService.pUser.upsert({
      where: { email: testUser.email },
      update: testUser,
      create: {
        ...testUser,
        id: 1000,
      },
    });
  });

  describe('findUserテスト', () => {
    describe('正常系テスト', () => {
      test('user情報が取得できること', async () => {
        const pUser = await prismaService.pUser.findUnique({
          where: { email: 'testMail@test.com' },
        });

        const output = await userQueryService.findUser('testMail@test.com');
        expect(output).toEqual(pUser);
      });
    });
  });
});
