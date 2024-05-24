import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoRowItem from './components/ToDoRowItem'
import TodoTable from './components/TodoTable'

const defaultTodos = [
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
  },
  {
    rowNumber : 4,
    rowDescription : "Make Dinner",
    rowAssigned : "John"  
  },
  {
    rowNumber : 5,
    rowDescription : "Charge Phone battery",
    rowAssigned : "Robin"  
  }

];


function App() {

  const [todos, setTodos] = useState(defaultTodos);
  

  const addToDo = () => {
      console.log("Add new to do button was clicked!");
      if(todos.length > 0){
        const newTodo = {rowNumber: todos.length + 1, rowDescription : "New Todo", rowAssigned : "user 3"}
        setTodos((prevState) => [...prevState, newTodo]);
        console.log(todos);
      }
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
          
        </div>
        <div className="card-body">
            <TodoTable todos={todos}/>
            <button className='btn btn-primary' onClick={addToDo}> Add new todo</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
