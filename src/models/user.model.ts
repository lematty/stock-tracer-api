import { IsEmail, IsString, MinLength, MaxLength, isEmail, IsOptional,  } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsString()
  @MinLength(4)
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}

export class RegisterDTO extends LoginDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
}

export class UpdateUserDTO {
  @IsEmail()
  @IsOptional()
  email: string;
}

export interface AuthPayload {
  username: string;
}