import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { PCondition } from '@prisma/client';
import { Condition } from '~/domain/condition/condition';
import { ConditionCode } from '~/domain/condition/conditionCode';
import {
  CONDITION_REPOSITORY_PROVIDE,
  IConditionRepository,
} from '~/domain/condition/conditionRepository';
import { PetCode } from '~/domain/pet/petCode';
import { PrismaService } from './prisma/prismaService';

export const convertConditionTOCondition = (
  pCondition: PCondition,
): Condition => {
  const {
    id,
    weight,
    length,
    temperature,
    shit,
    shit_state,
    condition,
    condition_state,
    vomiting,
    vomiting_state,
    petId,
    ...omitCondition
  } = pCondition;
  return {
    id: ConditionCode.iso.wrap(id),
    weight: weight || null,
    length: length || null,
    temperature: temperature || null,
    shit: shit || null,
    shit_state: shit_state || null,
    condition: condition || null,
    condition_state: condition_state || null,
    vomiting: vomiting,
    vomiting_state: vomiting_state || null,
    petId: PetCode.iso.wrap(petId),
    ...omitCondition,
  };
};

@Injectable()
export class ConditionRepository implements IConditionRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ペットの体調登録
   * @param condition 体調情報
   * @returns 登録した体調情報
   */
  async save(condition: PCondition): Promise<Condition> {
    if (!condition) {
      throw new NotFoundException('体調を入力してください');
    }

    const pCondition = await this.prisma.pCondition.create({
      data: {
        weight: condition.weight,
        length: condition.length,
        temperature: condition.temperature,
        shit: condition.shit,
        shit_state: condition.shit_state,
        condition: condition.condition,
        condition_state: condition.condition_state,
        vomiting: condition.vomiting,
        vomiting_state: condition.vomiting_state,
        petId: condition.petId,
      },
    });
    return convertConditionTOCondition(pCondition);
  }

  /**
   * 体調の検索
   * @param petId ペットID
   * @returns 登録済みの体調一覧
   */
  async findCondition(petId: PetCode): Promise<Condition[] | null> {
    if (!petId) {
      return null;
    }
    const pCondition = await this.prisma.pCondition.findMany({
      where: {
        petId: PetCode.iso.unwrap(petId),
      },
    });
    if (!pCondition.length) {
      return null;
    }
    return pCondition.map((result) => convertConditionTOCondition(result));
  }
}

export const ConditionRepositoryProvider: Provider = {
  provide: CONDITION_REPOSITORY_PROVIDE,
  useClass: ConditionRepository,
};
