import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { Pet } from '~/domain/pet/pet';
import { PetCode } from '~/domain/pet/petCode';
import {
  IPetRepository,
  PET_REPOSITORY_PROVIDE,
} from '~/domain/pet/petRepository';
import {
  IPetQueryService,
  PET_QUERY_SERVICE_PROVIDE,
} from '~/usecase/queries/petQueryService';

@Injectable()
export class PetQueryService implements IPetQueryService {
  constructor(
    @Inject(PET_REPOSITORY_PROVIDE)
    private readonly petRepository: IPetRepository,
  ) {}

  /**
   * ペットの重複確認
   * @param id petId
   * @returns ペット情報 | null
   */
  async confirmPet(id: PetCode): Promise<Pet | null> {
    if (!id) {
      return null;
    }
    const petData = await this.petRepository.findPet(id);
    if (petData) {
      return petData;
    }
    return null;
  }

  /**
   * ペットの検索
   * @param id petId
   * @returns ペット情報
   */
  async findPet(id: PetCode): Promise<Pet> {
    const pet = await this.petRepository.findPet(id);
    if (!pet) {
      throw new NotFoundException('ペットが見つかりません。');
    }
    return pet;
  }
}

export const PetQueryServiceProvider: Provider = {
  provide: PET_QUERY_SERVICE_PROVIDE,
  useClass: PetQueryService,
};
