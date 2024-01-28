import { createDomain } from "effector";
import { Task, TaskId } from "./types";
import { CharacterId } from "@lib/entities/character/model/types";

export const tasksDomain = createDomain();
export const addTask = tasksDomain.event<Task>();
export const removeTask = tasksDomain.event<TaskId>();

export const replaceTasks = tasksDomain.event<Record<string, Task>>();
export const addCharactersToTask = tasksDomain.event<{
  taskId: TaskId;
  charactersId: CharacterId[];
}>();
export const removeCharacterFromTask = tasksDomain.event<{
  taskId: TaskId;
  characterId: CharacterId;
}>();
export const removeAllCharactersFromTask = tasksDomain.event<TaskId>();
export const startTaskExecution = tasksDomain.event<TaskId>();
export const cancelTaskExecution = tasksDomain.event<TaskId>();
export const completeTask = tasksDomain.event<TaskId>();
export const updateTask = tasksDomain.event<{
  taskId: TaskId;
  taskProps: Partial<Task>;
}>();

export const $tasks = tasksDomain.store<Record<TaskId, Task>>({
  1: {
    id: 1,
    title: "title",
    description: "description",
    date: 1,
    expireDate: 10,
    progressStartDate: null,
    // вес задачи: сколько нужно мощности, чтобы решить данную задачу
    weight: 100,
    progressWeight: 0,
    // todo: заменить daysToComplete на weight
    daysToComplete: 3,
    inProgress: false,
    complete: false,
    closed: false,
    requirements: {},
    assigned: [],
    assignedCharacters: [],
  },
});

export const $taskList = $tasks.map<Task[]>(Object.values);

export const $completedTaskList = $taskList.map((list) =>
  list.filter((task) => task.complete === true)
);

export const $uncompletedTaskList = $taskList.map((list) =>
  list.filter((task) => task.complete === false)
);

export const $tasksLength = $taskList.map((tasks) => tasks.length);

export const increaseTaskCounter = tasksDomain.event();
export const $taskCounter = tasksDomain.store<number>(0);
