import React, {useState,useEffect} from 'react';
import TodoList from '../components/TodoList';
import Form from '../components/Form';

const Todo = () => {

  const [newtodo, setNewtodo] = useState('');
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }))
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos,{
      text:newtodo,
      id:Date.now(),
    }])
    setNewtodo('');
  }


  const drawTodos = todos.map(
    todo =>{
      return(
       <TodoList todo={todo} key={todo.text} removeTodo={removeTodo}/>
      );
    }
  );

  return (
    <>
      <Form 
        type='text'
        placeholder='task'
        value={newtodo}
        onChange={(e) => setNewtodo(e.target.value)}
        onSubmit={onSubmit}
        />
  
    <div>{drawTodos}</div>
    </>
  );
}

export default Todo;
