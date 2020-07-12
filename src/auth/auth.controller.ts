import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO, LoginDTO } from '../models/user.model';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body(ValidationPipe) credentials: RegisterDTO): Promise<{ user: any }> {
    return this.authService.register(credentials);
  }

  @Post('/login')
  login(@Body(ValidationPipe) credentials: LoginDTO): Promise<{ user: any }> {
    return this.authService.login(credentials);
  }
}
