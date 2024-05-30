import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <div className='bg-red-400 mb-[120px] p-3 text-white text-2xl font-bold shadow-emerald-200 shadow-lg'><h1 className='hover:text-black hover:cursor-pointer'>Redux toolkit Project</h1></div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
