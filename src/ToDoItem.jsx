import React from 'react';

function ToDoItem({ task, onToggle }) {
    return (
        <li 
            onClick={onToggle}
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
        >
            {task.text}
        </li>
    );
}

export default ToDoItem;