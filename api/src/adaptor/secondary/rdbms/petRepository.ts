import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { PPet } from '@prisma/client';
import { Pet } from '~/domain/pet/pet';
import { PetCode } from '~/domain/pet/petCode';
import {
  IPetRepository,
  PET_REPOSITORY_PROVIDE,
} from '~/domain/pet/petRepository';
import { PrismaService } from './prisma/prismaService';

export const convertPetToPet = (pPet: PPet): Pet => {
  const { id, picture, memo, gender, ...omitPPet } = pPet;
  return {
    ...omitPPet,
    id: PetCode.iso.wrap(id),
    gender: gender,
    picture: picture || null,
    memo: memo || null,
  };
};

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ペットの登録
   * @param pet ペットの情報
   * @returns 登録したペット情報
   */
  async save(pet: PPet): Promise<Pet> {
    if (!pet) {
      throw new NotFoundException('ペット情報を入力してください。');
    }
    const pPet = await this.prisma.pPet.create({
      data: {
        name: pet.name,
        picture: pet.picture,
        kinds: pet.kinds,
        gender: pet.gender,
        birthday: pet.birthday,
        color: pet.color,
        welcome_family: pet.welcome_family,
        memo: pet.memo,
      },
    });
    return convertPetToPet(pPet);
  }

  /**
   * ペットの検索
   * @param id petId
   * @returns ペット情報
   */
  async findPet(id: PetCode): Promise<Pet | null> {
    if (!id) {
      return null;
    }

    const pet = await this.prisma.pPet.findUnique({
      where: {
        id: PetCode.iso.unwrap(id),
      },
    });

    if (!pet) {
      return null;
    }
    return convertPetToPet(pet);
  }
}

export const PetRepositoryProvider: Provider = {
  provide: PET_REPOSITORY_PROVIDE,
  useClass: PetRepository,
};
