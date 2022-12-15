import { inferProcedureOutput } from '@trpc/server';

import { AppRouter } from '@test/api';

export const TaskCard: React.FC<{
  task: inferProcedureOutput<AppRouter['task']['all']>[number];
}> = ({ task }) => {
  return (
    <div className="bg-[#97abbc] p-5 my-3 rounded-lg w-4/5 hover:scale-[101%] transition-all">
      <h2 className="text-m font-bold text-white">{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};
