import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { Condition } from '~/domain/condition/condition';
import {
  CONDITION_REPOSITORY_PROVIDE,
  IConditionRepository,
} from '~/domain/condition/conditionRepository';
import { PetCode } from '~/domain/pet/petCode';
import {
  CONDITION_QUERY_SERVICE_PROVIDE,
  IConditionQueryService,
} from '~/usecase/queries/conditionQueryService';

@Injectable()
export class ConditionQueryService implements IConditionQueryService {
  constructor(
    @Inject(CONDITION_REPOSITORY_PROVIDE)
    private readonly conditionRepository: IConditionRepository,
  ) {}

  /**
   * 体調の重複確認
   * @param condition 体調情報
   * @returns 体調情報 | null
   */
  async confirmCondition(condition: Condition): Promise<Condition[] | null> {
    if (!condition.petId) {
      return null;
    }
    const pCondition = await this.conditionRepository.findCondition(
      condition.petId,
    );
    if (pCondition) {
      const conditions: Condition[] = [];
      pCondition.map(async (result) => {
        if (result.createdAt === new Date()) {
          conditions.push(result);
        }
      });
      if (conditions.length) {
        return conditions;
      }
    }
    return null;
  }

  /**
   * 体調の検索
   * @param petId ペットID
   * @returns ペットの登録済み体調一覧
   */
  async findCondition(petId: PetCode): Promise<Condition[]> {
    if (!petId) {
      throw new NotFoundException('ペットIDを入力してください。');
    }
    const condition = await this.conditionRepository.findCondition(petId);
    if (!condition.length) {
      throw new NotFoundException('体調が登録されていません。');
    }
    return condition;
  }
}

export const ConditionQueryServiceProvider: Provider = {
  provide: CONDITION_QUERY_SERVICE_PROVIDE,
  useClass: ConditionQueryService,
};
