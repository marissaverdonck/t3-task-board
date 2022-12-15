import { expect, test, beforeEach, afterEach, afterAll } from 'vitest';

import { createContext } from '../context';
import { TaskService } from './service';

const ctx = await createContext();
const taskService = new TaskService(ctx);

afterEach(async () => {
  await ctx.prisma.task.deleteMany();
});
beforeEach(async () => {
  await ctx.prisma.task.create({
    data: {
      title: 'test title',
      description: 'test description',
      status: 'to do',
    },
  });
});

const getTaskId = async () => {
  return (
    await ctx.prisma.task.findFirst({
      where: { title: 'test title' },
      select: { id: true },
    })
  )?.id;
};
test('all task items are given and contain the given input', async () => {
  const tasks = await taskService.getTasks();
  expect(tasks).toHaveLength(1);
  expect(tasks[0]).toMatchObject({
    title: 'test title',
    description: 'test description',
    status: 'to do',
  });
});
test('the task item id is given and contains the given input', async () => {
  const taskId = await getTaskId();
  const task = await taskService.getTaskById(taskId!);
  expect(task).toMatchObject({
    title: 'test title',
    description: 'test description',
    status: 'to do',
  });
});

test('a new task item is created and contains the given input', async () => {
  const task = await taskService.createTask(
    'test title',
    'test description',
    'to do'
  );
  expect(task).toMatchObject({
    title: 'test title',
    description: 'test description',
    status: 'to do',
  });
});

test('the task item id is edited and contains the new given input', async () => {
  const taskId = await getTaskId();
  const task = await taskService.updateTask({
    id: taskId!,
    title: 'test title 2',
    description: 'test description 2',
  });
  expect(task).toMatchObject({
    title: 'test title 2',
    description: 'test description 2',
  });
});

test('the task item id is deleted and does not exist anymore', async () => {
  const taskId = await getTaskId();
  const task = await taskService.deleteTask(taskId!);
  expect(task).toMatchObject({
    title: 'test title',
    description: 'test description',
  });
  const isDeleted = await ctx.prisma.task.findFirst({
    where: { id: taskId },
  });
  expect(isDeleted).toBeNull();
});
