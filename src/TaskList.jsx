import React from 'react';
import Task from './Task';
import './App.css'

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="tasks-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
