import React, { useEffect, useRef, useState } from 'react';
import todo from '../assets/todo.png';
import Todoitem from './Todoitem';
import TaskList from './TaskList';

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
      {/* Main Todo */}
      <div className="bg-white w-full lg:w-2/3 rounded-3xl shadow-lg p-8 h-96">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold mb-0 whitespace-nowrap">
  You've got <span className="text-blue-400">{todoList.length}</span> tasks today
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
        <div className="space-y-4">
          {todoList.map((item, index) => (
            <Todoitem
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
      <TaskList todoList={todoList} showCompleted={true} title="Completed Tasks" />
      {/* Uncompleted Tasks  */}
      <TaskList todoList={todoList} showCompleted={false} title="Uncompleted Tasks" />
    </div>
  );
};

export default ToDo;
