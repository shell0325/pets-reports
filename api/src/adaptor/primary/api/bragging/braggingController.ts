import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  RegisterBraggingUseCase,
  REGISTER_BRAGGING_USE_CASE_PROVIDER,
} from '~/usecase/commands/registerBraggingUseCase/registerBraggingUseCase';
import {
  BRAGGING_QUERY_SERVICE_PROVIDE,
  IBraggingQueryService,
} from '~/usecase/queries/braggingQueryService';
import { findBraggingRequestDto } from './requests/findBraggingRequest.dto';
import { RegisterBraggingRequestDto } from './requests/registerBraggingRequest.dto';
import { FindBraggingResponseDto } from './response/findBraggingResponse.dto';
import { RegisterBraggingResponseDto } from './response/registerBraggingResponse.dto';

@Controller('bragging')
export class BraggingController {
  constructor(
    @Inject(REGISTER_BRAGGING_USE_CASE_PROVIDER)
    private readonly RegisterBraggingUseCase: RegisterBraggingUseCase,
    @Inject(BRAGGING_QUERY_SERVICE_PROVIDE)
    private readonly BraggingService: IBraggingQueryService,
  ) {}

  @Get()
  async findBragging(
    @Body() param: findBraggingRequestDto,
  ): Promise<FindBraggingResponseDto[]> {
    const bragging = await this.BraggingService.findBragging(param);

    return bragging;
  }

  @Post('register')
  async registerBragging(
    @Body() bragging: RegisterBraggingRequestDto,
  ): Promise<RegisterBraggingResponseDto> {
    const registerBragging = await this.RegisterBraggingUseCase.run(bragging);
    return registerBragging;
  }
}
