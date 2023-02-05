import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { Pet } from '~/domain/pet/pet';
import {
  IPetRepository,
  PET_REPOSITORY_PROVIDE,
} from '~/domain/pet/petRepository';
import { UserPet } from '~/domain/userpet/userpet';
import {
  IUserPetRepository,
  USER_PET_REPOSITORY_PROVIDE,
} from '~/domain/userpet/userpetRepository';
import {
  IPetQueryService,
  PET_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/petQueryService';
import {
  RegisterPetInputDto,
  RegisterPetOutputDto,
  RegisterPetUseCase,
  REGISTER_PET_USE_CASE_PROVIDER,
} from './registerPetUseCase';

@Injectable()
export class RegisterPetInteractor implements RegisterPetUseCase {
  constructor(
    @Inject(PET_REPOSITORY_PROVIDE)
    private readonly petRepository: IPetRepository,
    @Inject(PET_QUERY_SERVICE_PROVIDE)
    private readonly petService: IPetQueryService,
    @Inject(USER_PET_REPOSITORY_PROVIDE)
    private readonly userPetRepository: IUserPetRepository,
  ) {}

  async run(input: RegisterPetInputDto): Promise<RegisterPetOutputDto> {
    if (!input) {
      throw new NotFoundException('ペット情報を入力してください。');
    }

    const registerPet = Pet.register(input);

    const userPet = await this.userPetRepository.findUserPetByUser(
      input.userId,
    );

    if (userPet) {
      const pets = [];
      await Promise.all(
        userPet.map(async (result) => {
          const pet = await this.petService.findPet(result.petId);
          if (pet.name === input.name) {
            pets.push(pet);
          }
        }),
      );
      if (pets.length) {
        throw new NotFoundException('登録済みのペットです。');
      }
    }

    const pet = await this.petRepository.save(registerPet);

    if (pet) {
      const userPetData = UserPet.register(pet, input.userId);
      await this.userPetRepository.save(userPetData);
    }

    return pet;
  }
}

export const RegisterPetInteractorProvider: Provider = {
  provide: REGISTER_PET_USE_CASE_PROVIDER,
  useClass: RegisterPetInteractor,
};
