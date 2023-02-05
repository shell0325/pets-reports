import { ApiProperty } from '@nestjs/swagger';
import { ConditionType, ShitType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { ConditionCode } from '~/domain/condition/conditionCode';
import { PetCode } from '~/domain/pet/petCode';

export class RegisterConditionRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: ConditionCode;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({ nullable: true })
  weight: number | null;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({ nullable: true })
  length: number | null;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({ nullable: true })
  temperature: number | null;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  shit: ShitType | null;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  shit_state: string | null;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  condition: ConditionType | null;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  condition_state: string | null;

  @IsOptional()
  @IsBoolean()
  vomiting: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  vomiting_state: string | null;

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
