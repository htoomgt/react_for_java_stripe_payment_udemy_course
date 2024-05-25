import React from 'react'

const ToDoRowItem = (props) => {
    // const rowNumber = 1;
    // const rowDescription =  "Feed dog";
    // const rowAssigned =  "Eric";

    // const rowNumber = prop.todo.rowNumber ;
    const rowDescription = props.todo.rowDescription ;
    const rowAssigned = props.todo.rowAssigned ;

  return (
    <tr>
        <th scope="row">{props.index}</th>
        <td> {rowDescription}</td>
        <td> {rowAssigned}</td>
    </tr>
  )
}

export default ToDoRowItem