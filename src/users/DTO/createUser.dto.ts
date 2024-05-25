import {
  IsNumber,
  IsString,
  MinLength,
  Min,
  IsEmail,
  IsNotEmpty,
  IsDate,
  isString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;
  @IsString()
  @MinLength(5)
  name: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  email: string;
  @IsString()
  @MinLength(8)
  password: string;
}
