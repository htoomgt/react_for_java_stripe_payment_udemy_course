import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoRowItem from './components/ToDoRowItem';
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewToDoForm';
import uuid from 'react-uuid';

const defaultTodos = [
  {
    rowNumber : uuid(),
    rowDescription : "Feed Dog",
    rowAssigned : "Eric"
  },
  {
    rowNumber : uuid(),
    rowDescription : "Hiarcut",
    rowAssigned : "Robin"
  },
  {
    rowNumber : uuid(),
    rowDescription : "Buy cake",
    rowAssigned : "John"  
  },
  {
    rowNumber : uuid(),
    rowDescription : "Make Dinner",
    rowAssigned : "John"  
  },
  {
    rowNumber : uuid(),
    rowDescription : "Charge Phone battery",
    rowAssigned : "Robin"  
  }

];


function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [formToggleStatus, setFormTogglestatus]  = useState(false);
  

  const addToDo = (newTodo) => {
      console.log("Add new to do button was clicked!");
      if(todos.length > 0){
        setTodos((preState) => [...preState, newTodo])
        console.log(todos);
      }
  }

  const deleteTodo = (id) => {

    const updatedTodos = todos.filter((todo) => {
      if(todo.rowNumber != id ){
        return todo;
      }
    })


    setTodos(updatedTodos);

    console.log(updatedTodos);
  }

  const toggleFormOpenClose = () => {
    setFormTogglestatus(!formToggleStatus);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
          
        </div>
        <div className="card-body">
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            <button className='btn btn-primary' onClick={toggleFormOpenClose}> {!formToggleStatus ? 'Add New Todo' : 'Close New To Do'}</button>

            {formToggleStatus && <NewToDoForm fnAddToDo={addToDo} fnToggleFormOpenClose={toggleFormOpenClose} />}
        </div>
        
      </div>
    </div>
  )
}

export default App
