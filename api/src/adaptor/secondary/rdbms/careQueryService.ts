import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { GetCareRequestDto } from '~/adaptor/primary/api/care/requests/getCareRequest.dto';
import { Care } from '~/domain/care/care';
import {
  CARE_REPOSITORY_PROVIDE,
  ICareRepository,
} from '~/domain/care/careRepository';
import {
  IPetRepository,
  PET_REPOSITORY_PROVIDE,
} from '~/domain/pet/petRepository';
import {
  CARE_QUERY_SERVICE_PROVIDE,
  ICareQueryService,
} from '~/usecase/queries/careQueryService';

@Injectable()
export class CareQueryService implements ICareQueryService {
  constructor(
    @Inject(CARE_REPOSITORY_PROVIDE)
    private readonly careRepository: ICareRepository,
    @Inject(PET_REPOSITORY_PROVIDE)
    private readonly petRepository: IPetRepository,
  ) {}

  async confirmCare(care: Care): Promise<Care[] | null> {
    if (!care.petId) {
      return null;
    }
    const pCare = await this.careRepository.findCare(care.petId);
    if (pCare) {
      const cares = [];
      pCare.map(async (result) => {
        if (
          JSON.stringify(result.time) === JSON.stringify(care.time) &&
          result.name === care.name &&
          result.content === care.content
        ) {
          cares.push(result);
        }
      });
      if (cares.length) {
        return cares;
      }
    }
    return null;
  }

  async findCare(param: GetCareRequestDto): Promise<Care[]> {
    if (!param.id) {
      throw new NotFoundException('ペットIDを入力してください。');
    }
    const pet = await this.petRepository.findPet(param.id)
    if (!pet) {
      throw new NotFoundException('ペットが見つかりません。')
    }
    const care = await this.careRepository.findCare(param.id);
    if (!care.length) {
      throw new NotFoundException('お世話情報が登録されていません');
    }
    return care;
  }
}

export const CareQueryServiceProvider: Provider = {
  provide: CARE_QUERY_SERVICE_PROVIDE,
  useClass: CareQueryService,
};
