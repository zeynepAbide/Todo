import React from 'react'
import checked from '../assets/checked.png'
import unchecked from '../assets/unchecked.png'
import trash from '../assets/trash.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-xl">
  {/* checkbox + metin */}
  <div className="flex items-center gap-3 flex-1">
    <div onClick={() => toggle(id)} className="cursor-pointer">
      <img
        src={isComplete ? checked : unchecked}
        alt="checkbox"
        className="w-5 h-5"
      />
    </div>
    <p className={`text-sm ${isComplete ? 'line-through text-gray-400' : 'text-gray-800'}`}>
      {text}
    </p>
  </div>

  {/*trash */}
  <div onClick={() => deleteTodo(id)} className="cursor-pointer ml-4">
    <img src={trash} alt="delete" className="w-5 h-5" />
  </div>
</div>

  )
}

export default Todoitems
