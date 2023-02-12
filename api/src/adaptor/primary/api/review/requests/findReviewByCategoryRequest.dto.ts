import { IsOptional, IsString } from 'class-validator';
import { CategoryType } from '~/domain/review/categoryType';

export class findReviewByCategoryRequestDto {
  @IsOptional()
  @IsString()
  category: CategoryType;
}
