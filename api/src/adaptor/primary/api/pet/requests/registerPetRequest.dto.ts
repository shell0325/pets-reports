import { ApiProperty } from '@nestjs/swagger';
import { GenderType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';
import { PetCode } from '~/domain/pet/petCode';
import { UserCode } from '~/domain/user/userCode';

export class RegisterPetRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: PetCode;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  picture: string | null;

  @IsOptional()
  @IsString()
  kinds: string;

  @IsOptional()
  @IsString()
  gender: GenderType;

  @IsOptional()
  @IsDateString()
  birthday: Date;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsDateString()
  welcome_family: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  memo: string | null;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  userId: UserCode;
}
