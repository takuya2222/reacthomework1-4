import React, { useState } from 'react';

import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/ TaskList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [comment, setComment] = useState('');
  const [radio, setRadio] = useState('all');
  
  const addTodo = () => {
    if (comment === '') return;
    
    const todo = {
      id: todos.length + 1,
      comment,
      status: 'incomplete',
    };
      
    setTodos([...todos, todo]);
    setComment('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
    setTodos(newTodos.map((e, index) => ({...e, id: index + 1})));
  };

  const updateTaskStatus = (todoId) => {
    setTodos(
      todos.map((todo, index) =>
        todoId === todo.id
          ? {
              ...todo,
              status: todo.status === "incomplete" ? "completed" : "incomplete", 
            }
          : todo
      )
    );
  };

  const switchTodos = () => {
    if (radio === 'completed') {
      return todos.filter((todo) => todo.status === 'completed');
    }
    if (radio === 'incomplete') {
      return todos.filter((todo) => todo.status === 'incomplete');
    }
    return todos;
  }
  
  return (
    <>
    <h1>ToDoリスト</h1>

    <form>
      <label>
        <input 
          type='radio' 
          value='all'
          onChange={(e) => setRadio(e.target.value)} 
          checked={radio === 'all'} 
        />
        すべて
      </label>
      <label>
        <input 
          type='radio' 
          value='incomplete'
          onChange={(e) => setRadio(e.target.value)} 
          checked={radio === 'incomplete'}
        />
        作業中
      </label>
      <label>
        <input 
          type='radio' 
          value='complete'
          onChange={(e) => setRadio(e.target.value)}
          checked={radio === 'complete'}
        />
        完了
      </label>
    </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
        </thead>

        <TaskList
         switchTodos={switchTodos}
         onClickDelete={onClickDelete}
         updateTaskStatus={updateTaskStatus}
        />
      </table>

      <TaskInput 
        comment={comment}
        setComment={setComment}
        addTodo={addTodo}        
      />
    </>
  );
}