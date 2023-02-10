import { CareType } from '@prisma/client';
import { PetCode } from '~/domain/pet/petCode';
import { CareQueryService } from '../careQueryService';
import { CareRepository } from '../careRepository';
import { PetRepository } from '../petRepository';
import { PrismaService } from '../prisma/prismaService';

describe('careQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const careRepository = new CareRepository(prismaService);
  const petRepository = new PetRepository(prismaService);
  const careService = new CareQueryService(careRepository, petRepository);

  beforeAll(async () => {
    const testCare = {
      name: CareType.Meal,
      content: 'testContent',
      time: '2018-05-23T18:25:44.000Z',
      memo: null,
      petId: 1000,
    };

    await prismaService.pCare.upsert({
      where: { id: 1000 },
      update: testCare,
      create: {
        ...testCare,
        id: 1000,
      },
    });
  });

  describe('findCareのテスト', () => {
    describe('正常系テスト', () => {
      test('care情報が取得できること', async () => {
        const pCare = await prismaService.pCare.findMany({
          where: { petId: 1000 },
        });
        const output = await careService.findCare({
          petId: PetCode.iso.wrap(1000),
        });
        expect(output).toEqual(pCare);
      });
    });
  });
});
