import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleToggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Tambahkan tugas baru"
            />
            <button onClick={handleAddTask}>Tambah Tugas</button>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={index}
                        task={task}
                        onToggle={() => handleToggleTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;