import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { Bragging } from '~/domain/bragging/bragging';
import {
  BRAGGING_REPOSITORY_PROVIDE,
  IBraggingRepository,
} from '~/domain/bragging/braggingRepository';
import {
  BRAGGING_QUERY_SERVICE_PROVIDE,
  IBraggingQueryService,
} from '~/usecase/queries/braggingQueryService';
import {
  RegisterBraggingInputDto,
  RegisterBraggingOutputDto,
  RegisterBraggingUseCase,
  REGISTER_BRAGGING_USE_CASE_PROVIDER,
} from './registerBraggingUseCase';

@Injectable()
export class RegisterBraggingInteractor implements RegisterBraggingUseCase {
  constructor(
    @Inject(BRAGGING_REPOSITORY_PROVIDE)
    private readonly BraggingRepository: IBraggingRepository,
    @Inject(BRAGGING_QUERY_SERVICE_PROVIDE)
    private readonly BraggingService: IBraggingQueryService,
  ) {}

  async run(
    input: RegisterBraggingInputDto,
  ): Promise<RegisterBraggingOutputDto> {
    if (!input) {
      throw new NotFoundException('自慢を入力してください。');
    }
    const braggingValidate = await this.BraggingService.confirmBragging(input);

    if (braggingValidate) {
      throw new NotFoundException('登録済みの自慢です。');
    }

    const registerBragging = Bragging.register(input);

    const bragging = await this.BraggingRepository.save(registerBragging);

    return bragging;
  }
}

export const RegisterBraggingInteractorProvider: Provider = {
  provide: REGISTER_BRAGGING_USE_CASE_PROVIDER,
  useClass: RegisterBraggingInteractor,
};
