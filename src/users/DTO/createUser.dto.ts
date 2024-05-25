import {
  IsNumber,
  IsString,
  MinLength,
  Min,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @Min(0)
  id: number;
  @IsString()
  @MinLength(5)
  name: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  email: string;
}
