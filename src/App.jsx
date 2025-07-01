
import './App.css'
import './index.css';

import ToDo from './components/ToDo'
import Todoitems from './components/Todoitems'  
import React from 'react'


const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r'>
      <ToDo/>
      <Todoitems/>
      
    </div>
  )
}

export default App
