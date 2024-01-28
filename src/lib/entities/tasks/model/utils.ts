import { add, assoc, clone, eqBy, equals, evolve } from "ramda";

import { Task } from "@lib/entities/tasks/model/types";
import { getRandomIntInRange } from "@lib/shared/utils/math";

export function createNewTask(task: Partial<Task> = {}): Task {
  return {
    id: 1,
    title: "Title",
    description: "",
    requirements: "",
    date: 0,
    expireDate: 1,
    daysToComplete: 5,
    weight: 100,
    progressWeight: 0,
    progressStartDate: null,
    inProgress: false,
    complete: false,
    closed: false,
    assigned: [],
    assignedCharacters: [],
    ...task,
  };
}

export function addProgressToTaskOrComplete(task: Task): Task {
  console.log(task);
  if (!task.inProgress) return task;
  let weightToAdd = getRandomIntInRange(
    1,
    task.weight - task.progressWeight + 5
  );

  if (weightToAdd > task.weight - task.progressWeight)
    weightToAdd = task.weight - task.progressWeight;

  return evolve(
    {
      progressWeight: add(weightToAdd),
      complete: () => equals(weightToAdd + task.progressWeight, task.weight),
    },
    task
  ) as Task;
}
