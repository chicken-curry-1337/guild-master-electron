import { Task } from '../../../types/Task';

export const TASK_MOCK: Task = {
  id: 1,
  title: 'new Task',
  assigned: [],
  date: 1,
  description: '',
  expireDate: 2,
  progressStartDate: null,
  weight: 100,
  progressWeight: 0,
  daysToComplete: 5,
  inProgress: false,
  complete: false,
  closed: false,
  requirements: '',
  assignedCharacters: [],
};

export const TASKS_MOCK: Task[] = [
  { ...TASK_MOCK, id: 1 },
  { ...TASK_MOCK, id: 2 },
  { ...TASK_MOCK, id: 3 },
];
