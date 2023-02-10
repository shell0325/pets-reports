import { Injectable, NotFoundException, Provider } from '@nestjs/common';
import { PBragging } from '@prisma/client';
import { Bragging } from '~/domain/bragging/bragging';
import { BraggingCode } from '~/domain/bragging/braggingCode';
import {
  BRAGGING_REPOSITORY_PROVIDE,
  IBraggingRepository,
} from '~/domain/bragging/braggingRepository';
import { PetCode } from '~/domain/pet/petCode';
import { UserCode } from '~/domain/user/userCode';
import { PrismaService } from './prisma/prismaService';

export const convertBraggingToBragging = (pBragging: PBragging): Bragging => {
  const { id, title, content, picture, userId, petId, ...omitBragging } =
    pBragging;
  return {
    ...omitBragging,
    id: BraggingCode.iso.wrap(id),
    title: title,
    content: content,
    picture: picture || null,
    userId: UserCode.iso.wrap(userId),
    petId: PetCode.iso.wrap(petId),
  };
};

@Injectable()
export class BraggingRepository implements IBraggingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(bragging: PBragging): Promise<Bragging> {
    if (!bragging) {
      throw new NotFoundException('自慢内容を入力してください。');
    }
    const pBragging = await this.prisma.pBragging.create({
      data: {
        title: bragging.title,
        content: bragging.content,
        picture: bragging.picture,
        userId: bragging.userId,
        petId: bragging.petId,
      },
    });
    return convertBraggingToBragging(pBragging);
  }

  async findBragging(userId: UserCode): Promise<Bragging[] | null> {
    if (!userId) {
      return null;
    }
    const bragging = await this.prisma.pBragging.findMany({
      where: {
        userId: UserCode.iso.unwrap(userId),
      },
    });
    if (!bragging.length) {
      return null;
    }
    return bragging.map((result) => convertBraggingToBragging(result));
  }
}

export const BraggingRepositoryProvider: Provider = {
  provide: BRAGGING_REPOSITORY_PROVIDE,
  useClass: BraggingRepository,
};
