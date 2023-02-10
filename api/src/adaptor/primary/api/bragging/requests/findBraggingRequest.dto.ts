import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";
import { UserCode } from "~/domain/user/userCode";

export class findBraggingRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id: UserCode;
}
