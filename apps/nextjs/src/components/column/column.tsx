import { Task } from '@prisma/client';
import { Dispatch, FC, SetStateAction } from 'react';

import { Card } from '../index';

interface ColumnProps {
  name: string;
  status: string;
  items?: Task[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalItemData: Dispatch<SetStateAction<Task | undefined>>;
}

export const Column: FC<ColumnProps> = ({
  name,
  status,
  items,
  setModalOpen,
  setModalItemData,
}) => {
  console.log(status);

  return (
    <div className="flex-none w-1/3">
      <h2 className="text-xl font-bold mr-2 mb-5">{name}</h2>
      <div className="">
        {items?.map((item) => {
          if (item.status === status) {
            return (
              <Card
                key={item.id}
                item={item}
                setModalOpen={setModalOpen}
                setModalItemData={setModalItemData}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
