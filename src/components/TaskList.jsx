import React from 'react';
import unchecked from '../assets/unchecked.png';

const TaskList = ({ todoList, showCompleted, title }) => {
  const filteredTasks = todoList.filter(todo => showCompleted ? todo.isComplete : !todo.isComplete);
  return (
    <div className={showCompleted ? "bg-green-50 w-80 lg:w-1/4 h-96 rounded-3xl shadow-lg p-8 flex flex-col gap-2" : "bg-red-100 w-80 lg:w-1/4 h-96 rounded-3xl shadow-lg p-8 flex flex-col gap-2"}>
      <h2 className={showCompleted ? "text-lg font-semibold text-green-700 mb-4" : "text-lg font-semibold text-yellow-700 mb-4"}>
        {title}
      </h2>
      {filteredTasks.length === 0 ? (
        <p className="text-gray-400">No {showCompleted ? 'completed' : 'uncompleted'} tasks.</p>
      ) : (
        filteredTasks.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            {showCompleted ? (
              <span className="line-through text-green-700">{item.text}</span>
            ) : (
              <>
                <img src={unchecked} alt="unchecked" className="w-5 h-5" />
                <span>{item.text}</span>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList; 