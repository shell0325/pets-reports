import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';
import { BraggingCode } from '~/domain/bragging/braggingCode';
import { PetCode } from '~/domain/pet/petCode';
import { UserCode } from '~/domain/user/userCode';

export class RegisterBraggingResponseDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: BraggingCode;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  picture: string | null;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  petId: PetCode;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  userId: UserCode;

  @IsOptional()
  @IsDateString()
  createdAt: Date;

  @IsOptional()
  @IsDateString()
  updatedAt: Date;
}
