import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './authService';
import { PUser } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  /**
   * メールアドレスとパスワードの検証
   * @param email メールアドレス
   * @param password パスワード
   * @returns ユーザー情報
   */
  async validate(email: string, password: string): Promise<PUser> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('emailかパスワードが間違っています');
    }
    return user;
  }
}
