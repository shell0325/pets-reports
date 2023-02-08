import { PCare } from '@prisma/client';
import { PetCode } from '../pet/petCode';
import { Care } from './care';

export const CARE_REPOSITORY_PROVIDE = 'CARE_REPOSITORY_PROVIDE';

export interface ICareRepository {
  save(care: PCare): Promise<Care>;
  findCare(petId: PetCode): Promise<Care[] | null>;
}
