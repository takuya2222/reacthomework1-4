import React from 'react';

export const InputTodo = (props) => {
  const { comment, onChangeTodo, addTodo} = props;
  return (
    <div className='InputTodo'>
        <h2>新規タスクの追加</h2> 
        <input value={comment} onChange={onChangeTodo} />
        <button onClick={addTodo}>追加</button>
    </div>
 );
};