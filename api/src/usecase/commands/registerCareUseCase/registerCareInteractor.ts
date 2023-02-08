import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Care } from '~/domain/care/care';
import {
  CARE_REPOSITORY_PROVIDE,
  ICareRepository,
} from '~/domain/care/careRepository';
import {
  CARE_QUERY_SERVICE_PROVIDE,
  ICareQueryService,
} from '~/usecase/queries/careQueryService';
import {
  RegisterCareInputDto,
  RegisterCareOutputDto,
  RegisterCareUseCase,
} from './registerCareUseCase';

@Injectable()
export class RegisterCareInteractor implements RegisterCareUseCase {
  constructor(
    @Inject(CARE_REPOSITORY_PROVIDE)
    private readonly CareRepository: ICareRepository,
    @Inject(CARE_QUERY_SERVICE_PROVIDE)
    private readonly CareService: ICareQueryService,
  ) {}

  async run(input: RegisterCareInputDto): Promise<RegisterCareOutputDto> {
    if (!input) {
      throw new NotFoundException('お世話情報を入力してください。');
    }

    const careValidation = await this.CareService.confirmCare(input);

    if (careValidation) {
      throw new NotFoundException('登録済みのお世話情報です。');
    }

    const registerCare = Care.register(input);

    const care = await this.CareRepository.save(registerCare);

    return care;
  }
}
