import {
  IsNotEmpty,
  IsNumber,
  MinLength,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { Match } from '../../../decorators';
import { Sex } from '../interfaces/user.interface';

export class UserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Match('password', {message: "passwords are not equal"})
  confirm_password: string;

  @IsNotEmpty()
  @IsEnum(Sex)
  sex: Sex;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
