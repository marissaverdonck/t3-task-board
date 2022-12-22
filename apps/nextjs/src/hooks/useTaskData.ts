import { trpc } from '@utils';

export function useGetTaskData () {
  const { data: taskData } = trpc.task.all.useQuery();
  return taskData;
}

export function useCreateTaskData () {
  const utils = trpc.useContext();
  const { mutate: createTask } = trpc.task.create.useMutation({
    onSuccess: () => {
      utils.task.all.invalidate();
    },
  });
  return createTask;
}

export function useUpdateTaskData () {
  const utils = trpc.useContext();
  const { mutate: updateTask } = trpc.task.update.useMutation({
    onSuccess: () => {
      utils.task.all.invalidate();
    },
  });
  return updateTask;
}

export function useDeleteTaskData () {
  const utils = trpc.useContext();
  const { mutate: deleteTask } = trpc.task.delete.useMutation({
    onSuccess: () => {
      utils.task.all.invalidate();
    },
  });
  return deleteTask;
}
