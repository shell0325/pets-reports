import { PPet } from '@prisma/client';
import { Pet } from './pet';
import { PetCode } from './petCode';

export const PET_REPOSITORY_PROVIDE = 'PET_REPOSITORY_PROVIDE';

export interface IPetRepository {
  save(pet: PPet): Promise<Pet>;
  findPet(id: PetCode): Promise<Pet | null>;
}
