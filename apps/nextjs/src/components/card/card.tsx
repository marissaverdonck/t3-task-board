import { Task } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

interface ColumnProps {
  item: Task;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalItemData: Dispatch<SetStateAction<Task | undefined>>;
}

export const Card = ({ item, setModalOpen, setModalItemData }: ColumnProps) => {
  return (
    <div className="bg-[#97abbc] p-5 my-3 rounded-lg w-4/5 hover:scale-[101%] transition-all">
      <div className="flex justify-between text-white font-bold">
        <h2 className="text-lg font-bold text-white">{item.title}</h2>
        <button
          className="font-bold text-lg"
          onClick={() => {
            setModalOpen(true);
            setModalItemData(item);
          }}
        >
          &#x22EE;
        </button>
      </div>
      <p>{item.description}</p>
    </div>
  );
};
