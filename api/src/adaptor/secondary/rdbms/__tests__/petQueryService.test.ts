import { GenderType } from '@prisma/client';
import { PetCode } from '~/domain/pet/petCode';
import { PetQueryService } from '../petQueryService';
import { PetRepository } from '../petRepository';
import { PrismaService } from '../prisma/prismaService';

describe('petQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const petRepository = new PetRepository(prismaService);
  const petService = new PetQueryService(petRepository);

  beforeAll(async () => {
    const testPet = {
      name: 'testPet',
      picture: null,
      kinds: 'ダックス',
      gender: GenderType.MEN,
      birthday: '2018-05-23T18:25:44.000Z',
      color: '茶色',
      welcome_family: '2018-05-23T18:25:44.000Z',
      memo: null,
    };

    await prismaService.pPet.upsert({
      where: { id: 1000 },
      update: testPet,
      create: {
        ...testPet,
        id: 1000,
      },
    });
  });

  describe('findPetテスト', () => {
    describe('正常系テスト', () => {
      test('pet情報が取得できること', async () => {
        const pPet = await prismaService.pPet.findUnique({
          where: { id: 1000 },
        });
        const output = await petService.findPet(PetCode.iso.wrap(1000));
        expect(output).toEqual(pPet);
      });
    });
  });
});
