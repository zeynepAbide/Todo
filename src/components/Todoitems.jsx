import React from 'react'
import checked from '../assets/checked.png'
import unchecked from '../assets/unchecked.png'
import trash from '../assets/trash.png'

const Todoitems = ({text}) => {
  return (
    <div className='felx place-items-center mu-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={checked} alt="" className='w-7'/>
            <p className='text-slate-700 ml-4 text-[17px]'>
                {text}</p>
        </div>

        <img src={trash} alt="" className='w-3.5 cursor-pointer'/>
      
    </div>
  )
}

export default Todoitems
