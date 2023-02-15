import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './TodoistApi';
import TaskList from './TaskList';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskContent, setNewTaskContent] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleNewTaskSubmit = async (event) => {
    event.preventDefault();
    await createTask({ content: newTaskContent });
    setNewTaskContent('');
    fetchTasks();
  };

  const handleEditTask = async (taskId, data) => {
    await updateTask(taskId, data);
    fetchTasks();
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)} placeholder="Add new task" />
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
