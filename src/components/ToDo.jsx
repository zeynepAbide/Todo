import React from 'react'
import todo from '../assets/todo.png'
import Todoitems from './Todoitems'

const ToDo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
{/* ---title--- */}

<div className='flex items-center justify-center mt-7 gap-2'>
  <img className='w-8' src={todo} alt="" />
  <h2 className='text-[35px] font-semibold'>To-Do List</h2>
</div>


{/* ---input box--- */}

    <div className='flex items-center my-7 bg-gray-200 rounded-full'
    >
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add new task'/>
        <button className='border-none rounded-full bg- w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD</button>
    </div>


{/* ----todo list----     */}

    <div>
        <Todoitems text ="Learn Coding"/>
        <Todoitems text ="Done with Project"/>
        
    </div>


    </div>
  )
}

export default ToDo
