import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoRowItem from './components/ToDoRowItem'
import TodoTable from './components/TodoTable'


function App() {
  const todos = [
    {
      rowNumber : 1,
      rowDescription : "Feed Dog",
      rowAssigned : "Eric"
    },
    {
      rowNumber : 2,
      rowDescription : "Hiarcut",
      rowAssigned : "Robin"
    },
    {
      rowNumber : 3,
      rowDescription : "Buy cake",
      rowAssigned : "John"
    }

  ];

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
          
        </div>
        <div className="card-body">
            <TodoTable todos={todos}/>
        </div>
        
      </div>
    </div>
  )
}

export default App
