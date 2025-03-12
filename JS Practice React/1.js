import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  
  
  const [input, setInput] = useState('');

  
  const addTask = (e) => {
    e.preventDefault(); 

    
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput(''); 
    }
  };

  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      {/* Форма для добавления задачи */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Добавьте новую задачу"
        />
        <button type="submit">Добавить</button>
      </form>

      {/* Список задач */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;