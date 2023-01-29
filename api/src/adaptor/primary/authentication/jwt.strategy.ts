import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';

import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY_PROVIDE } from '~/domain/user/userRepository';
import { User } from '~/domain/user/user';


@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  constructor(
    @Inject(USER_REPOSITORY_PROVIDE)
    private readonly userRepository: IUserRepository,
  ) {
    super({
      //Authorization headerからトークンを読み込む関数を返す
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //有効期間を無視するかどうか
      ignoreExpiration: false,
      //envファイルから秘密鍵を渡す
      secretOrKey: process.env.JWT_SECRET_KEY!,
    });
  }

  async validate(payload: { email: string }): Promise<User> {
    const user = await this.userRepository.findUser(payload.email);
    return user;
  }

}
