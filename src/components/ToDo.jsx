import React, { useEffect, useRef, useState } from 'react';
import todo from '../assets/todo.png';
import Todoitems from './Todoitems';

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };


    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto px-4">
      {/* Main Todo Card (Left) */}
      <div className="bg-white w-full lg:w-2/3 rounded-3xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold flex flex-wrap gap-1">
            You've got{' '}
            <span className="text-blue-400 min-w-[2ch] text-center">{todoList.length}</span>
            task today
          </h1>
        </div>
        {/* Input + Add Button */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
          <img src={todo} alt="todo icon" className="w-5 h-5 mr-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Add new task"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500 h-10 px-2"
          />
          <button
            onClick={add}
            className="ml-2 h-10 px-6 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full transition-colors duration-200 flex items-center justify-center"
          >
            Add
          </button>
        </div>
        {/* Task List */}
        <div className="space-y-4">
          {todoList.map((item, index) => (
            <Todoitems
              key={index}
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
      <div className="bg-green-50 w-full lg:w-1/3 rounded-3xl shadow-lg p-8 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-green-700 mb-4">Completed Tasks</h2>
        {todoList.filter(todo => todo.isComplete).length === 0 ? (
          <p className="text-gray-400">No completed tasks.</p>
        ) : (
          todoList.filter(todo => todo.isComplete).map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <span className="line-through text-green-700">{item.text}</span>
            </div>
          ))
        )}
      </div>
      {/* Uncompleted Tasks  */}
      <div className="bg-yellow-50 w-full lg:w-1/3 rounded-3xl shadow-lg p-8 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-yellow-700 mb-4">Uncompleted Tasks</h2>
        {todoList.filter(todo => !todo.isComplete).length === 0 ? (
          <p className="text-gray-400">No uncompleted tasks.</p>
        ) : (
          todoList.filter(todo => !todo.isComplete).map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <span>{item.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDo;
