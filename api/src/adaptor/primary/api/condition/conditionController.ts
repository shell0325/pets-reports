import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  RegisterConditionUseCase,
  REGISTER_CONDITION_USE_CASE_PROVIDER,
} from '~/usecase/commands/registerConditionUseCase/registerConditionUseCase';
import { RegisterConditionRequestDto } from './requests/registerConditionRequest.dto';
import { RegisterConditionResponseDto } from './response/registerConditionResponse.dto';

@Controller('condition')
export class ConditionController {
  constructor(
    @Inject(REGISTER_CONDITION_USE_CASE_PROVIDER)
    private readonly registerConditionUseCase: RegisterConditionUseCase,
  ) {}

  @Post('register')
  async registerCondition(
    @Body() condition: RegisterConditionRequestDto,
  ): Promise<RegisterConditionResponseDto> {
    const registerCondition = await this.registerConditionUseCase.run(
      condition,
    );
    return registerCondition;
  }
}
