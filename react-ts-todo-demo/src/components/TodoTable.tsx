import { ToDoRowItem } from './ToDoRowItem';
import { Todo } from '../DTOs/Todo';
import React from 'react';

interface TodoTableProps { todos : Todo[], deleteTodo : Function}

const TodoTable : React.FC<TodoTableProps> = (props ) => {
  const todos = props.todos;

    
  return (
    <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo : Todo, index : number) => {
                return <ToDoRowItem todo={todo} key={todo.rowNumber} index={index} deleteItem={props.deleteTodo} />
              })
            }
          </tbody>
        </table>
    </>
  )
}

export default TodoTable;