import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

// auth/auth.controller.ts
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() user: Record<string, any>) {
    return this.authService.registerUser(user);
  }

  // auth/auth.controller.ts
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(): Promise<string> {
    return 'this is protected route';
  }
}
