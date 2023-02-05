import { GenderType } from '@prisma/client';
import { PetCode } from './petCode';
import * as Eq from 'fp-ts/Eq';

/**
 * ペット
 *
 * @property id - ペットID
 * @property name - ペットの名前
 * @property picture - ペットの写真
 * @property kinds - ペットの種類
 * @property gender - ペットの性別
 * @property birthday - ペットの誕生日
 * @property color - 色
 * @property welcome_family - 家族に迎えた日
 * @property memo - メモ
 */

export type Pet = Readonly<{
  id: PetCode;
  name: string;
  picture: string | null;
  kinds: string;
  gender: GenderType;
  birthday: Date;
  color: string;
  welcome_family: Date;
  memo: string | null;
  createdAt: Date;
  updatedAt: Date;
}>;

export type RegisterPetInput = Readonly<{
  id: PetCode;
  name: string;
  picture: string | null;
  kinds: string;
  gender: GenderType;
  birthday: Date;
  color: string;
  welcome_family: Date;
  memo: string | null;
  createdAt: Date;
  updatedAt: Date;
}>;

export const Pet = {
  eq: Eq.contramap<PetCode, Pet>((pet) => pet.id)(PetCode.eq),
  register(input: RegisterPetInput) {
    const { id, ...omitInput } = input;
    return {
      id: PetCode.iso.unwrap(id),
      ...omitInput,
    };
  },
};
