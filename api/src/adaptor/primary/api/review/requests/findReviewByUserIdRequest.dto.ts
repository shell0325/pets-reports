import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { UserCode } from '~/domain/user/userCode';

export class findReviewByUserIdRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  userId: UserCode;
}
