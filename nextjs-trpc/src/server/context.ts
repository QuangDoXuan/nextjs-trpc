import type * as trpcNext from '@trpc/server/adapters/next';
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken";
import { prisma } from './libs/database';
import { User } from '@prisma/client';

export const deserializeUser = async (): Promise<Partial<User> | undefined> => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value
  if (!token) {
    return;
  }
  const secret = process.env.JWT_SECRET!;
  const decoded = jwt.verify(token, secret) as { sub: string };
  if (!decoded) {
    return;
  }
  const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
  if (!user) {
    return;
  }
  const { password, createdAt, updatedAt, ...restUser } = user;
  return restUser;
};

export async function createContextInner(_opts: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    const user = await deserializeUser();
    return user;
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;

export async function createContext(
  opts: trpcNext.CreateNextContextOptions,
): Promise<Context> {
  return await createContextInner(opts);
}
