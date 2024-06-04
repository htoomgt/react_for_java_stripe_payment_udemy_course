import { useState } from 'react'
import './App.css'
import TodoTable from './components/TodoTable';
import NewToDoForm from './components/NewToDoForm';
import uuid from 'react-uuid';
import { Todo } from './DTOs/Todo';

const defaultTodos : Todo[] = [
  new Todo(uuid(), "Feed Dog", "Eric"),
  new Todo(uuid(), "Hiarcut", "Robin"),
  new Todo(uuid(), "Buy cake", "John"),
  new Todo(uuid(), "Make Dinner", "John"),
  new Todo(uuid(), "Charge Phone Battery", "Robin")

];





function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [formToggleStatus, setFormTogglestatus]  = useState(false);
  

  const addToDo = (newTodo : Todo) => {
      console.log("Add new to do button was clicked!");
      if(todos.length > 0){
        setTodos((preState) => [...preState, newTodo])
        console.log(todos);
      }
  }

  const deleteTodo = (id : string) : void => {

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
