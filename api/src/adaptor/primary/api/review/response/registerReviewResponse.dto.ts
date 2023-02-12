import { ApiProperty } from '@nestjs/swagger';
import { CategoryType, EvaluationType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';
import { ReviewCode } from '~/domain/review/reviewCode';
import { UserCode } from '~/domain/user/userCode';

export class RegisterReviewResponseDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: ReviewCode;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  category: CategoryType;

  @IsOptional()
  @IsString()
  evaluation: EvaluationType;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  picture: string | null;

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
