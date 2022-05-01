import React from 'react';

export const TaskList = (props) => {
  const { todos } = props;
  return (   
    <tbody>
      {todos.map((todo) => {
        return (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.comment}</td>
            <td>
              <button>{todo.status}</button>
            </td>
            <td><button>削除</button></td>
          </tr>
        );
      })}
</tbody>
)
};