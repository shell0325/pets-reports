import { Body, Controller, Get, Inject, Post, Request } from '@nestjs/common';
import {
  RegisterCareUseCase,
  REGISTER_CARE_USE_CASE_PROVIDER,
} from '~/usecase/commands/registerCareUseCase/registerCareUseCase';
import {
  CARE_QUERY_SERVICE_PROVIDE,
  ICareQueryService,
} from '~/usecase/queries/careQueryService';
import { GetCareRequestDto } from './requests/getCareRequest.dto';
import { RegisterCareRequestDto } from './requests/registerCareRequest.dto';
import { RegisterCareResponseDto } from './response/registerCareResponse.dto';

@Controller('care')
export class CareController {
  constructor(
    @Inject(REGISTER_CARE_USE_CASE_PROVIDER)
    private readonly RegisterCareUseCase: RegisterCareUseCase,
    @Inject(CARE_QUERY_SERVICE_PROVIDE)
    private readonly CareService: ICareQueryService,
  ) {}

  @Get()
  async getCare(@Body() param: GetCareRequestDto) {
    const care = await this.CareService.findCare(param);

    return care;
  }

  @Post('register')
  async registerCare(
    @Body() care: RegisterCareRequestDto,
  ): Promise<RegisterCareResponseDto> {
    const registerCare = await this.RegisterCareUseCase.run(care);

    return registerCare;
  }
}
