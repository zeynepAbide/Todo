import React, { useEffect, useRef, useState } from 'react';
import todo from '../assets/todo.png';
import Todoitem from './Todoitem';
import TaskList from './TaskList';

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  const [inputText, setInputText] = useState('');

  // Add Task
  const add = () => {
    const inputTextTrimmed = inputText.trim(); 
    if (inputTextTrimmed === '') return;

    const newTodo = {
      text: inputTextTrimmed,
      isComplete: false,
    };

    // ---ekleme---- 
    fetch('http://localhost:3002/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())  
      .then((data) => {
        setTodoList((prev) => [...prev, data]);
        setInputText('');  
      })
      .catch((err) => console.error('Ekleme hatası:', err));
  };

  // ----silme
  const deleteTodo = (id) => {
    fetch(`http://localhost:3002/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id)); 
      })
      .catch((err) => console.error('Silme hatası:', err));
  };

  // ----toggle----
  const toggle = (id) => {
    const todoToToggle = todoList.find(todo => todo.id === id);
    if (!todoToToggle) return;

    fetch(`http://localhost:3002/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isComplete: !todoToToggle.isComplete, 
      }),
    })
      .then(() => {
        setTodoList(prev =>
          prev.map(todo =>
            todo.id === id
              ? { ...todo, isComplete: !todo.isComplete }
              : todo
          )
        );
      })
      .catch((err) => console.error('Güncelleme hatası:', err));
  };

  
  useEffect(() => {
    fetch('http://localhost:3002/todos')
      .then((res) => res.json())
      .then((data) => setTodoList(data))
      .catch((err) => console.error('Veri çekilirken hata:', err));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto px-4 bg-white p-5 rounded-2xl h-[90vh]">
      {/* Main Todo */}
      <div className="bg-white w-full lg:w-2/3 rounded-3xl shadow-lg p-8 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h1 className="general-title-h1">
            You've got <span className="text-blue-400">{todoList.length}</span> tasks today
          </h1>
        </div>
        {/* Input + Add Button */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
          <img src={todo} alt="todo icon" className="w-5 h-5 mr-2" />
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // Input'u state üzerinden kontrol et
            placeholder="Add new task"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500 h-10 px-2"
            onKeyDown={e => { if (e.key === 'Enter') add(); }}
          />
          <button
            onClick={add}
            className="ml-2 h-10 px-6 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full transition-colors duration-200 flex items-center justify-center"
          >
            Add
          </button>
        </div>
        {/* Task List */}
        <div className="space-y-4 overflow-y-auto h-[60vh]">
          {todoList.map((item) => (
            <Todoitem
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
      {/* Completed Tasks */}
      <TaskList todoList={todoList} showCompleted={true} title="Completed Tasks" />
      {/* Uncompleted Tasks */}
      <TaskList todoList={todoList} showCompleted={false} title="Uncompleted Tasks" />
    </div>
  );
};

export default ToDo;
