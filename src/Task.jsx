import React from 'react';
import './App.css'

const Task = ({ task, onEdit, onDelete }) => {
  const handleEdit = () => {
    const newContent = prompt('Edit task', task.content);
    if (newContent) {
      onEdit(task.id, { content: newContent });
    }
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className="task-item">
      <span>{task.content}</span>
      <div className="task-buttons">
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Task;
