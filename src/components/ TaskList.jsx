import React from 'react';

export const TaskList = (props) => {
  const { todos, onClickDelete } = props;
  return (   
    <tbody>
      {todos.map((todo, index) => {
        return (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.comment}</td>
            <td>
              <button>{todo.status}</button>
            </td>
            <td><button onClick={() => onClickDelete(index)}>削除</button></td>
          </tr>
        );
      })}
    </tbody>
)
};