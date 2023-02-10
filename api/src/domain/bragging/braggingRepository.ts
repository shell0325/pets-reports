import { PBragging } from '@prisma/client';
import { UserCode } from '../user/userCode';
import { Bragging } from './bragging';

export const BRAGGING_REPOSITORY_PROVIDE = 'BRAGGING_REPOSITORY_PROVIDE';

export interface IBraggingRepository {
  save(bragging: PBragging): Promise<Bragging>;
  findBragging(userId: UserCode): Promise<Bragging[] | null>;
}
