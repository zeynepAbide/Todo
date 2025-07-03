import React from 'react';
import unchecked from '../assets/unchecked.png';

const UncompletedTasks = ({ todoList }) => (
  <div className="bg-red-100 w-80 lg:w-1/4 h-96 rounded-3xl shadow-lg p-8 flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-yellow-700 mb-4">Uncompleted Tasks</h2>
    {todoList.filter(todo => !todo.isComplete).length === 0 ? (
      <p className="text-gray-400">No uncompleted tasks.</p>
    ) : (
      todoList.filter(todo => !todo.isComplete).map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <img src={unchecked} alt="unchecked" className="w-5 h-5" />
          <span>{item.text}</span>
        </div>
      ))
    )}
  </div>
);

export default UncompletedTasks; 