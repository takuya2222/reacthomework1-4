import React, {useState} from 'react';
import { InputTodo } from './components/InputTodo';
import { OutputTodos } from './components/OutputTodos';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [comment, setComment] = useState('');
  
  const onChangeTodo = (e) => {
    setComment(e.target.value);
  };
  
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
  
  return (
    <>
    <h1>ToDoリスト</h1>

    <form>
      <label>
        <input type='radio' id='all-Todo' name='Todo' defaultChecked onChange='radioChange()' />
        すべて
      </label>
      <label>
        <input type='radio' id='incomplete-Todo' name='Todo' />
        作業中
      </label>
      <label>
        <input type='radio' id='complete-Todo' name='Todo' />
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

        <OutputTodos
         todos={todos}
        />

      </table>

      <InputTodo 
        comment={comment}
        onChangeTodo={onChangeTodo}
        addTodo={addTodo}        
        />
    </>
  );
}