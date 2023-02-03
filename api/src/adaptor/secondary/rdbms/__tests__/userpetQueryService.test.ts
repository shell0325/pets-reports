import { UserCode } from '~/domain/user/userCode';
import { PrismaService } from '../prisma/prismaService';
import { UserPetQueryService } from '../userpetQueryService';
import { UserPetRepository } from '../userpetRepository';

describe('userQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const userPetRepository = new UserPetRepository(prismaService);
  const userPetQueryService = new UserPetQueryService(userPetRepository);

  beforeAll(async () => {
    const testUserPet = {
      userId: 1000,
      petId: 1000,
    };

    await prismaService.pUserPet.upsert({
      where: { id: 1000 },
      update: testUserPet,
      create: {
        ...testUserPet,
        id: 1000,
      },
    });
  });

  describe('findUserPetテスト:正常系テスト', () => {
    test('userPet情報が取得できること', async () => {
      const pUserPet = await prismaService.pUserPet.findUnique({
        where: { id: 1000 },
      });

      const output = await userPetQueryService.findUserPet(
        UserCode.iso.wrap(1000),
      );

      expect(output[0]).toEqual(pUserPet);
    });
  });
});
