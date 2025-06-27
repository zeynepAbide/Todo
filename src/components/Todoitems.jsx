import React from 'react'
import checked from '../assets/checked.png'
import unchecked from '../assets/unchecked.png'
import trash from '../assets/trash.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex flex-row items-center my-3 gap-2'>
    <div onClick={()=>{toggle(id) }} className='flex items-center cursor-pointer'>
        <img src={isComplete ? checked : unchecked} alt="" className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-950 ${isComplete ? "line-through" : ""}`}>
            {text}</p>
    </div>

    <img onClick= {() => {deleteTodo(id)} } src={trash} alt="" className='w-3.5 cursor-pointer '/>
</div>

  )
}

export default Todoitems
