import { IsBoolean, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class createTaskDto {
  @IsString()
  @MinLength(5)
  name: string;
  @IsBoolean()
  status: boolean;
  @IsNumber()
  @Min(0)
  id: number;
}
