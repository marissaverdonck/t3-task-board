import { Task } from '@prisma/client';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { trpc } from '@utils';

interface TaskModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setTaskItems: Dispatch<SetStateAction<Task[]>>;
}

export const TaskModal: FC<TaskModalProps> = ({
  setModalOpen,
  setTaskItems,
}) => {
  const { mutate: createTask } = trpc.task.create.useMutation({
    onSuccess(taskItem) {
      setTaskItems((prev) => [...prev, taskItem]);
    },
  });
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="w-1/2 space-y-4 p-8 bg-white rounded-md">
        <h1 className="text-3xl font-bold mr-2">Create task</h1>
        <div>
          <label htmlFor="title" className="text-xl font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className="w-full mt-2 p-0.5 border-2 border-gray-100 rounded-md bg-gray-100 shadow-sm focus:border-gray-300 active:border-gray-300 hover:border-gray-300 "
          ></input>
        </div>
        <div>
          <label htmlFor="description" className="text-xl font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            className="w-full mt-2 p-0.5 border-2 border-gray-100 rounded-md bg-gray-100 shadow-sm focus:border-gray-300 active:border-gray-300 hover:border-gray-300 "
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-lg border-2 border-black bg-white s text-black p-2.5 mr-2 w-20 hover:underline hover:decoration-solid"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-lg bg-black text-white p-2.5 w-20 hover:underline hover:decoration-solid"
            onClick={() => {
              createTask({
                title: inputTitle,
                description: inputDescription,
                status: 'to do',
              });
              setModalOpen(false);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
