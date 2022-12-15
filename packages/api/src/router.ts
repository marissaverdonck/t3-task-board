import { authRouter } from './auth/router';
import { taskRouter } from './task/router';
import { router } from './trpc';

export const appRouter = router({
  auth: authRouter,
  task: taskRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
