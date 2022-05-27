import React from 'react';

export const TaskInput = (props) => {
  const { comment, addTodo, setComment } = props;
  return (
    <div className='InputTodo'>
      <h2>新規タスクの追加</h2> 
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={addTodo}>追加</button>
    </div>
 );
};