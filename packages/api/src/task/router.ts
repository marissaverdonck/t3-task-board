import { z } from 'zod';

import { publicProcedure, protectedProcedure } from '../auth';
import { router } from '../trpc';
import { TaskService } from './service';

export const taskRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    const task = new TaskService(ctx);
    return task.getTasks();
  }),
  byId: publicProcedure.input(z.string().uuid()).query(({ ctx, input }) => {
    const task = new TaskService(ctx);
    return task.getTaskById(input);
  }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        status: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      const task = new TaskService(ctx);
      return task.createTask(input.title, input.description, input.status);
    }),
  update: protectedProcedure
    .input(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        status: z.string().optional(),
        id: z.string().cuid(),
      })
    )
    .mutation(({ ctx, input }) => {
      const task = new TaskService(ctx);
      return task.updateTask(input);
    }),
  delete: protectedProcedure
    .input(z.string().cuid())
    .mutation(({ ctx, input }) => {
      const task = new TaskService(ctx);
      return task.deleteTask(input);
    }),
});
export type taskRouter = typeof taskRouter;
