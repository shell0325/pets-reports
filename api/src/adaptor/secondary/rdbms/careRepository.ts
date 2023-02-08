import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { PCare } from '@prisma/client';
import { Care } from '~/domain/care/care';
import { CareCode } from '~/domain/care/careCode';
import {
  CARE_REPOSITORY_PROVIDE,
  ICareRepository,
} from '~/domain/care/careRepository';
import { PetCode } from '~/domain/pet/petCode';
import { PrismaService } from './prisma/prismaService';

export const convertCareToCare = (pCare: PCare): Care => {
  const { id, name, content, time, memo, petId, ...omitPCare } = pCare;
  return {
    ...omitPCare,
    id: CareCode.iso.wrap(id),
    name: name,
    content: content || null,
    time: time,
    memo: memo || null,
    petId: PetCode.iso.wrap(petId),
  };
};

@Injectable()
export class CareRepository implements ICareRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(care: PCare): Promise<Care> {
    if (!care) {
      throw new NotFoundException('お世話情報を入力してください。');
    }
    const pCare = await this.prisma.pCare.create({
      data: {
        name: care.name,
        content: care.content,
        time: care.time,
        memo: care.memo,
        petId: care.petId,
      },
    });
    return convertCareToCare(pCare);
  }

  async findCare(petId: PetCode): Promise<Care[] | null> {
    if (!petId) {
      return null;
    }
    const care = await this.prisma.pCare.findMany({
      where: {
        petId: PetCode.iso.unwrap(petId),
      },
    });
    if (!care.length) {
      return null;
    }
    return care.map((result) => convertCareToCare(result));
  }
}

export const CareRepositoryProvider: Provider = {
  provide: CARE_REPOSITORY_PROVIDE,
  useClass: CareRepository,
};
