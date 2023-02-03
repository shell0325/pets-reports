import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  RegisterPetUseCase,
  REGISTER_PET_USE_CASE_PROVIDER,
} from '~/usecase/commands/registerPetUseCase/registerPetUseCase';
import { RegisterPetRequestDto } from './requests/registerPetRequest.dto';
import { RegisterPetResponseDto } from './response/registerPetResponse.dto';

@Controller('pet')
export class PetController {
  constructor(
    @Inject(REGISTER_PET_USE_CASE_PROVIDER)
    private readonly registerPetUseCase: RegisterPetUseCase,
  ) {}

  @Post('register')
  async registerPet(
    @Body() pet: RegisterPetRequestDto,
  ): Promise<RegisterPetResponseDto> {
    const registerPet = await this.registerPetUseCase.run(pet);
    return registerPet;
  }
}
