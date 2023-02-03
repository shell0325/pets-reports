import { Pet } from '~/domain/pet/pet';
import { PetCode } from '~/domain/pet/petCode';

export const PET_QUERY_SERVICE_PROVIDE = 'PET_QUERY_SERVICE_PROVIDE';

export interface IPetQueryService {
  confirmPet(id: PetCode): Promise<Pet | null>;
  findPet(id: PetCode): Promise<Pet>;
}
