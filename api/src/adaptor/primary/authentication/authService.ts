import { Injectable, Provider } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PUser } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { PrismaService } from '~/adaptor/secondary/rdbms/prisma/prismaService';
import {
  AUTH_SERVICE_PROVIDER,
  IAuthService,
} from '~/usecase/commands/loginUseCase/authServiceInterface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  /**
   * ユーザー検証
   * @param email メールアドレス
   * @param password パスワード
   * @returns ユーザー||null
   */
  async validateUser(email: string, password: string): Promise<PUser | null> {
    const user = await this.prisma.pUser.findUnique({ where: { email } });
    if (user && bcrypt.compareSync(password, user.password!)) {
      return user;
    }
    return null;
  }

  /**
   * ログイン
   * @param user ユーザー情報
   * @returns アクセストークン&ユーザー情報
   */
  async login(user: PUser): Promise<{
    accessToken: string;
    user: PUser;
  }> {
    return {
      accessToken: this.jwtService.sign(user),
      user,
    };
  }
}

export const AuthServiceProvider: Provider = {
  provide: AUTH_SERVICE_PROVIDER,
  useClass: AuthService,
};
