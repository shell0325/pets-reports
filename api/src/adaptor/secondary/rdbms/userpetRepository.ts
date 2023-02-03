import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { PUserPet } from '@prisma/client';
import { PetCode } from '~/domain/pet/petCode';
import { UserCode } from '~/domain/user/userCode';
import { RegisterUserPet, UserPet } from '~/domain/userpet/userpet';
import { UserPetCode } from '~/domain/userpet/userpetCode';
import {
  IUserPetRepository,
  USER_PET_REPOSITORY_PROVIDE,
} from '~/domain/userpet/userpetRepository';
import { PrismaService } from './prisma/prismaService';

export const convertUserPetTOUserPet = (pUserPet: PUserPet): UserPet => {
  return {
    id: UserPetCode.iso.wrap(pUserPet.id),
    userId: UserCode.iso.wrap(pUserPet.userId),
    petId: PetCode.iso.wrap(pUserPet.petId),
  };
};

@Injectable()
export class UserPetRepository implements IUserPetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(userPet: RegisterUserPet): Promise<UserPet> {
    if (!userPet) {
      throw new NotFoundException('ユーザーもしくはペット情報がありません。');
    }
    const pUserPet = await this.prisma.pUserPet.create({
      data: {
        userId: UserCode.iso.unwrap(userPet.userId),
        petId: PetCode.iso.unwrap(userPet.petId),
      },
    });
    return convertUserPetTOUserPet(pUserPet);
  }

  async findUserPetByUser(userId: UserCode): Promise<UserPet[] | null> {
    if (!userId) {
      return null;
    }
    const userPet = await this.prisma.pUserPet.findMany({
      where: {
        userId: UserCode.iso.unwrap(userId),
      },
    });

    if (!userPet.length) {
      return null;
    }
    return userPet.map((result) => convertUserPetTOUserPet(result));
  }
}

export const UserPetRepositoryProvider: Provider = {
  provide: USER_PET_REPOSITORY_PROVIDE,
  useClass: UserPetRepository,
};
