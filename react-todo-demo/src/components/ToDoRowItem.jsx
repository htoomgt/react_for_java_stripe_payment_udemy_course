import React from 'react'

const ToDoRowItem = (prop) => {
    // const rowNumber = 1;
    // const rowDescription =  "Feed dog";
    // const rowAssigned =  "Eric";

    const rowNumber = prop.todo.rowNumber ;
    const rowDescription = prop.todo.rowDescription ;
    const rowAssigned = prop.todo.rowAssigned ;

  return (
    <tr>
        <th scope="row">{rowNumber}</th>
        <td> {rowDescription}</td>
        <td> {rowAssigned}</td>
    </tr>
  )
}

export default ToDoRowItem