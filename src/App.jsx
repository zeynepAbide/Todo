import './App.css'
import './index.css';

import ToDo from './components/ToDo'
 
import React from 'react'


const App = () => {
  return (
    <div className='min-h-screen flex justify-center pt-10 bg-gradient-to-r'>
      <ToDo/>
    </div>
  )
}

export default App
