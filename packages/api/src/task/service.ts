import { type Context } from '../context';

export class TaskService {
  constructor (private ctx: Context) {}

  public getTasks () {
    return this.ctx.prisma.task.findMany();
  }
  public getTaskById (id: string) {
    return this.ctx.prisma.task.findFirst({ where: { id } });
  }
  public createTask (title: string, description: string, status: string) {
    return this.ctx.prisma.task.create({
      data: { title, description, status },
    });
  }
  public updateTask ({
    id,
    title,
    description,
    status,
  }: {
    id: string;
    title?: string;
    description?: string;
    status?: string;
  }) {
    return this.ctx.prisma.task.update({
      where: { id },
      data: { title, description, status },
    });
  }
  public deleteTask (id: string) {
    return this.ctx.prisma.task.delete({ where: { id } });
  }
}
