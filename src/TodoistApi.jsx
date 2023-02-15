
import { TodoistApi } from "@doist/todoist-api-typescript";

const todoist = new TodoistApi("388425931e022b5172a1dd54df1316b9f45b2f95");

export const getTasks = async () => {
  const tasks = await todoist.getTasks();
  return tasks;
};

export const createTask = async (content) => {
  const task = await todoist.addTask(content);
  return task;
};

export const updateTask = async (taskId, data) => {
  const task = await todoist.updateTask(taskId, data);
  return task;
};

export const deleteTask = async (taskId) => {
  await todoist.deleteTask(taskId);
};
