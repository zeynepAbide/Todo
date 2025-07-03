import React from 'react';

const CompletedTasks = ({ todoList }) => (
  <div className="bg-green-50 w-80 lg:w-1/4 h-96 rounded-3xl shadow-lg p-8 flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-green-700 mb-4">Completed Tasks</h2>
    {todoList.filter(todo => todo.isComplete).length === 0 ? (
      <p className="text-gray-400">No completed tasks.</p>
    ) : (
      todoList.filter(todo => todo.isComplete).map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <span className="line-through text-green-700">{item.text}</span>
        </div>
      ))
    )}
  </div>
);

export default CompletedTasks; 