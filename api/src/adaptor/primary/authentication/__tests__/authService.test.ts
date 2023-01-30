import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '~/adaptor/secondary/rdbms/prisma/prismaService';
import { AuthService } from '../authService';
import bcrypt from 'bcryptjs';
import { PUser } from '@prisma/client';

describe('AuthServiceのテスト', () => {
  const prismaService = new PrismaService();
  const jwtService = new JwtService({ secretOrPrivateKey: 'TestSecretKey' });
  const authService = new AuthService(prismaService, jwtService);

  const testUser = {
    name: 'test-user',
    email: 'test-user@test.com',
    password: bcrypt.hashSync('test1234', 8),
  };

  beforeAll(async () => {
    await prismaService.pUser.upsert({
      where: { email: 'test-user@test.com' },
      update: testUser,
      create: {
        ...testUser,
        id: 999,
      },
    });
  });

  describe('正常系のテスト', () => {
    let user: PUser | null;
    beforeEach(async () => {
      user = await prismaService.pUser.findUnique({
        where: { email: testUser.email },
      });
    });

    describe('validateUser', () => {
      it('emailとpasswordが一致している場合、userデータが返却されること', async () => {
        const output = await authService.validateUser(
          testUser.email,
          'test1234',
        );
        expect(output).toEqual(user);
      });
      it('emailでユーザーが取得できなかった場合、nullが返却されること', async () => {
        const output = await authService.validateUser('', 'test1234');
        expect(output).toEqual(null);
      });
      it('passwordの検証が通らなかった場合、nullが返却されること', async () => {
        const output = await authService.validateUser(testUser.email, '');
        expect(output).toEqual(null);
      });
    });
    describe('login', () => {
      it('トークンとuserが返却されること', async () => {
        const output = await authService.login(user);
        expect(typeof output.accessToken).toBe('string');
        expect(output.user).toEqual(user);
      });
    });
  });
});
