import { PUser } from '@prisma/client';

export const AUTH_SERVICE_PROVIDER = 'AUTH_SERVICE';

export interface IAuthService {
  validateUser(email: string, pass: string): Promise<PUser | null>;
  login(user: PUser): Promise<{ accessToken: string; user: PUser }>;
}
