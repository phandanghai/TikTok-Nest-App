import { IsBoolean, IsEmail, isHexadecimal, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  avatarUrl: string;

  @IsNotEmpty()
  username: string;

  @IsBoolean()
  isAdmin: boolean;

  @IsBoolean()
  isVerify: boolean;
}
