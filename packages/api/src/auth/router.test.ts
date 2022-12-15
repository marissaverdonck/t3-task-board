import { test, expect, beforeAll, afterAll } from 'vitest';

import { Session } from '@test/auth';

import { createContext } from '../context';
import { authRouter } from './router';

beforeAll(async () => {
  const ctx = await createContext();
  await ctx.prisma.user.deleteMany();
  await ctx.prisma.user.create({
    data: {
      name: 'test',
      email: 'test@test.com',
    },
  });
});

const getUser = async () => {
  const ctx = await createContext();
  const user = await ctx.prisma.user.findFirst();
  return user;
};
const createFakeSession = async (): Promise<Session> => {
  const user = await getUser();
  return {
    user: {
      id: user!.id,
      name: user!.name,
      email: user!.email,
    },
    expires: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
  };
};

afterAll(async () => {
  const ctx = await createContext();
  await ctx.prisma.user.deleteMany();
});
test('a public procedure can be called without an user session', async () => {
  const ctx = await createContext();
  const caller = authRouter.createCaller(ctx);
  const session = await caller.getSession();
  expect(session).toBe(null);
});
test('a public procedure can be called with an user session', async () => {
  const ctx = await createContext();
  ctx.session = await createFakeSession();
  const caller = authRouter.createCaller(ctx);
  const session = await caller.getSession();
  expect(session).not.toBe(null);
});
test('a protected procedure will throw an error without a user session', async () => {
  const ctx = await createContext();
  const caller = authRouter.createCaller(ctx);
  await expect(caller.getSecretMessage()).rejects.toThrowError(
    'Not authenticated'
  );
});

test('a protected procedure can be called with a valid user session', async () => {
  const ctx = await createContext();
  ctx.session = await createFakeSession();
  const caller = authRouter.createCaller(ctx);
  const message = await caller.getSecretMessage();
  expect(message).toBe('you can see this secret message!');
});
