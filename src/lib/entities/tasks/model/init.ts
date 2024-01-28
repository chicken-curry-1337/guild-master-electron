import { sample } from "effector";
import {
  $taskCounter,
  $tasks,
  addCharactersToTask,
  addTask,
  cancelTaskExecution,
  completeTask,
  increaseTaskCounter,
  removeAllCharactersFromTask,
  removeCharacterFromTask,
  removeTask,
  updateTask,
  startTaskExecution,
  replaceTasks,
} from "./index";
import { Task, TaskId } from "./types";
import { CharacterId } from "@lib/entities/character/model/types";

type addCharactersToTaskType = {
  taskId: TaskId;
  charactersId: CharacterId[];
};

type addCharacterToTaskType = {
  taskId: TaskId;
  characterId: CharacterId;
};

$tasks
  .on(replaceTasks, (_, tasks) => ({ ...tasks }))
  .on(addTask, (state, task: Task) => {
    const newState = { ...state };
    newState[task.id] = { ...task };
    return newState;
  })
  .on(removeTask, (state, taskId: TaskId) => {
    const newState = { ...state };
    delete newState[taskId];
    return newState;
  })
  .on(
    addCharactersToTask,
    (state, { taskId, charactersId }: addCharactersToTaskType) => {
      if (!state[taskId]) return state;
      const newState = { ...state };
      newState[taskId].assigned = [...charactersId];
      return newState;
    }
  )
  .on(
    removeCharacterFromTask,
    (state, { taskId, characterId }: addCharacterToTaskType) => {
      const itemIndex = state[taskId].assigned.indexOf(characterId);
      if (!state[taskId] || itemIndex === -1) return state;
      const newState = { ...state };
      newState[taskId].assigned.splice(itemIndex, 1);
      return newState;
    }
  )
  .on(removeAllCharactersFromTask, (state, taskId: TaskId) => {
    if (!state[taskId]) return state;
    const newState = { ...state };
    newState[taskId].assigned = [];
    return newState;
  })
  .on(startTaskExecution, (state, taskId: TaskId) => {
    if (!state[taskId]) return state;
    const newState = { ...state };
    newState[taskId].inProgress = true;
    return newState;
  })
  .on(cancelTaskExecution, (state, taskId: TaskId) => {
    if (!state[taskId]) return state;
    const newState = { ...state };
    newState[taskId].inProgress = false;
    newState[taskId].complete = false;
    return newState;
  })
  .on(completeTask, (state, taskId: TaskId) => {
    if (!state[taskId]) return state;
    const newState = { ...state };
    newState[taskId].inProgress = false;
    newState[taskId].complete = true;
    return newState;
  })
  .on(updateTask, (state, { taskId, taskProps }) => {
    if (!state[taskId]) return state;
    const newState = { ...state };
    newState[taskId] = {
      ...newState[taskId],
      ...taskProps,
    };

    return newState;
  });

$taskCounter.on(increaseTaskCounter, (state) => state + 1);

sample({
  clock: addTask,
  target: increaseTaskCounter,
  greedy: true,
});
