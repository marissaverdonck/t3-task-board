export enum COLUMN_STATUSES {
  TO_DO = 'to_do',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export const COLUMN_LABELS = {
  [COLUMN_STATUSES.TO_DO]: 'To do',
  [COLUMN_STATUSES.IN_PROGRESS]: 'In progress',
  [COLUMN_STATUSES.DONE]: 'Done',
};
