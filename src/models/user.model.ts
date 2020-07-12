import { IsEmail, IsString, MinLength, MaxLength, IsOptional,  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class LoginDTO {
  @ApiProperty()
  @IsEmail()
  @IsString()
  @MinLength(4)
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  password: string;
}

export class RegisterDTO extends LoginDTO {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
}

export class UpdateUserDTO {
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;
}

export interface AuthPayload {
  username: string;
}
