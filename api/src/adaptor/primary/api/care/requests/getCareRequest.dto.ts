import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { PetCode } from '~/domain/pet/petCode';

export class GetCareRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: PetCode;
}
