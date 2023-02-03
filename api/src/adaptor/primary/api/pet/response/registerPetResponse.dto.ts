import { ApiProperty } from "@nestjs/swagger";
import { GenderType } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsOptional, IsString } from "class-validator";
import { PetCode } from "~/domain/pet/petCode";

export class RegisterPetResponseDto {
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
  @IsDate()
  birthday: Date;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsDate()
  welcome_family: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ nullable: true })
  memo: string | null;
}
