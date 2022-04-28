import React from 'react';

export const OutputTodos = (props) => {
  const { todos } = props;
  return (   
    <tbody>
      {todos.map((todo) => {
        return (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.comment}</td>
            <td>
              <button>作業中</button>
            </td>
            <td><button>削除</button></td>
          </tr>
        );
      })}
</tbody>
)
};