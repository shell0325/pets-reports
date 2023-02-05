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
import {
  CONDITION_QUERY_SERVICE_PROVIDE,
  IConditionQueryService,
} from '~/usecase/queries/conditionQueryService';
import {
  RegisterConditionInputDto,
  RegisterConditionOutputDto,
  RegisterConditionUseCase,
  REGISTER_CONDITION_USE_CASE_PROVIDER,
} from './registerConditionUseCase';

@Injectable()
export class RegisterConditionInteractor implements RegisterConditionUseCase {
  constructor(
    @Inject(CONDITION_REPOSITORY_PROVIDE)
    private readonly ConditionRepository: IConditionRepository,
    @Inject(CONDITION_QUERY_SERVICE_PROVIDE)
    private readonly ConditionService: IConditionQueryService,
  ) {}

  async run(
    input: RegisterConditionInputDto,
  ): Promise<RegisterConditionOutputDto> {
    if (!input) {
      throw new NotFoundException('体調情報を入力してください。');
    }

    const conditionValidation = await this.ConditionService.confirmCondition(
      input,
    );

    if (conditionValidation) {
      throw new NotFoundException('登録済みの体調です。');
    }

    const registerCondition = Condition.register(input);

    const condition = await this.ConditionRepository.save(registerCondition);

    return condition;
  }
}

export const RegisterConditionInteractorProvider: Provider = {
  provide: REGISTER_CONDITION_USE_CASE_PROVIDER,
  useClass: RegisterConditionInteractor,
};
