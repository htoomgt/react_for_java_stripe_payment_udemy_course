import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoRowItem from './components/ToDoRowItem'


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
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo) => {
                return <ToDoRowItem todo={todo} key={todo.rowNumber} />
              })
            }
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
  )
}

export default App
