import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  AuthService,
  AuthServiceProvider,
} from '~/adaptor/primary/authentication/authService';
import { JwtStrategy } from '~/adaptor/primary/authentication/jwt.strategy';
import { LocalStrategy } from '~/adaptor/primary/authentication/local.strategy';
import { PrismaService } from '~/adaptor/secondary/rdbms/prisma/prismaService';
import { LOGIN_USE_CASE_PROVIDER } from '~/usecase/commands/loginUseCase/loginUseCase';
import { LoginInteractor } from '~/usecase/commands/loginUseCase/loginInteractor';
import { USER_REPOSITORY_PROVIDE } from '~/domain/user/userRepository';
import { UserRepository } from '~/adaptor/secondary/rdbms/userRepository';
import { AuthController } from '../api/auth/authController';

@Module({
  providers: [
    JwtStrategy,
    PrismaService,
    LocalStrategy,
    AuthService,
    AuthServiceProvider,
    {
      provide: LOGIN_USE_CASE_PROVIDER,
      useClass: LoginInteractor,
    },
    {
      provide: USER_REPOSITORY_PROVIDE,
      useClass: UserRepository,
    },
    ConfigService,
    Object,
  ],
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          //envファイルから秘密鍵を渡す
          secret: process.env.JWT_SECRET_KEY!,
          signOptions: {
            //有効期限を設定
            expiresIn: '1800s',
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [AuthServiceProvider],
  controllers:[AuthController]
})
export class AdaptorAuthModule {}
