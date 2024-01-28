import { Nullable } from "@lib/shared/types";
import { CharacterId } from "../../character/model/types";

export type TaskId = string | number;

export enum TaskState {
  Inited = "inited",
  Started = "started",
  InProgress = "inProgress",
  Completed = "completed",
  Closed = "closed",
}

export type Task = {
  id: TaskId;
  title: string;
  description: string;
  date: number;
  expireDate: number;
  progressStartDate: Nullable<number>;
  // вес задачи: сколько нужно мощности, чтобы решить данную задачу
  weight: number;
  progress: number;
  state: TaskState;
  requirements: TaskRequirements;
  assigned: CharacterId[];
  assignedCharacters: string[];
  reward?: Record<string, number | string>;
};

export type TaskRequirements = any;
