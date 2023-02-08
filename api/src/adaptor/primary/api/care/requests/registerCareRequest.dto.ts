import { ApiProperty } from '@nestjs/swagger';
import { CareType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { CareCode } from '~/domain/care/careCode';
import { PetCode } from '~/domain/pet/petCode';

export class RegisterCareRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: CareCode;

  @IsOptional()
  @IsString()
  name: CareType;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsDateString()
  time: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  memo: string | null;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  petId: PetCode;

  @IsOptional()
  @IsDateString()
  createdAt: Date;

  @IsOptional()
  @IsDateString()
  updatedAt: Date;
}
