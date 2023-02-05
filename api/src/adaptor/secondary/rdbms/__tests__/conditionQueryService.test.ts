import { ConditionType, ShitType } from '@prisma/client';
import { PetCode } from '~/domain/pet/petCode';
import { ConditionQueryService } from '../conditionQueryService';
import { ConditionRepository } from '../conditionRepository';
import { PrismaService } from '../prisma/prismaService';

describe('conditionQueryServiceのテスト', () => {
  const prismaService = new PrismaService();
  const conditionRepository = new ConditionRepository(prismaService);
  const conditionService = new ConditionQueryService(conditionRepository);

  beforeAll(async () => {
    const testCondition = {
      weight: 5,
      length: 30,
      temperature: 35,
      shit: ShitType.TYPE1,
      shit_state: null,
      condition: ConditionType.GENERALLY_GOOD,
      condition_state: null,
      vomiting: false,
      vomiting_state: null,
      petId: 1000,
    };

    await prismaService.pCondition.upsert({
      where: { id: 1000 },
      update: testCondition,
      create: {
        ...testCondition,
        id: 1000,
      },
    });
  });

  describe('findConditionのテスト', () => {
    describe('正常系テスト', () => {
      test('condition情報が取得できること', async () => {
        const pCondition = await prismaService.pCondition.findMany({
          where: { petId: 1000 },
        });
        const output = await conditionService.findCondition(
          PetCode.iso.wrap(1000),
        );
        expect(output).toEqual(pCondition);
      });
    });
  });
});
