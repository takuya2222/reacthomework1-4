import React, {useState} from 'react';

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
      </table>

    <div>
      <h2>新規タスクの追加</h2> 
      <input value={comment} onChange={onChangeTodo}/>
      <button onClick={addTodo}>追加</button>
    </div>
    </>
  );
}