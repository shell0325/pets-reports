import {
  Inject,
  Injectable,
  NotFoundException,
  Provider,
} from '@nestjs/common';
import { findBraggingRequestDto } from '~/adaptor/primary/api/bragging/requests/findBraggingRequest.dto';
import { Bragging } from '~/domain/bragging/bragging';
import {
  BRAGGING_REPOSITORY_PROVIDE,
  IBraggingRepository,
} from '~/domain/bragging/braggingRepository';
import {
  IUserRepository,
  USER_REPOSITORY_PROVIDE,
} from '~/domain/user/userRepository';
import {
  BRAGGING_QUERY_SERVICE_PROVIDE,
  IBraggingQueryService,
} from '~/usecase/queries/braggingQueryService';

@Injectable()
export class BraggingQueryService implements IBraggingQueryService {
  constructor(
    @Inject(BRAGGING_REPOSITORY_PROVIDE)
    private readonly braggingRepository: IBraggingRepository,
    @Inject(USER_REPOSITORY_PROVIDE)
    private readonly userRepository: IUserRepository,
  ) {}

  async confirmBragging(bragging: Bragging): Promise<Bragging[] | null> {
    if (!bragging.userId) {
      return null;
    }
    const pBragging = await this.braggingRepository.findBragging(
      bragging.userId,
    );
    if (pBragging) {
      const braggings = [];
      pBragging.map(async (result) => {
        if (
          bragging.userId === result.userId &&
          bragging.petId === result.petId &&
          bragging.title === result.title
        ) {
          braggings.push(result);
        }
      });
      if (braggings.length) {
        return braggings;
      }
    }
    return null;
  }

  async findBragging(param: findBraggingRequestDto): Promise<Bragging[]> {
    if (!param.id) {
      throw new NotFoundException('ユーザーIDが見つかりません。');
    }
    const user = await this.userRepository.findUserById(param.id);
    if (!user) {
      throw new NotFoundException('ユーザーが見つかりません。');
    }
    const bragging = await this.braggingRepository.findBragging(param.id);
    if (!bragging.length) {
      throw new NotFoundException('自慢が見つかりません。');
    }
    return bragging;
  }
}

export const BraggingQueryServiceProvider: Provider = {
  provide: BRAGGING_QUERY_SERVICE_PROVIDE,
  useClass: BraggingQueryService,
};
