import React, {useState,useEffect} from 'react';
import TodoList from '../components/TodoList';
import Form from '../components/Form';

const Todo = () => {
  
  const setday = "mon";

  const [newtodo, setNewtodo] = useState('');
  const loadedTodos =  localStorage.getItem("todos");
  const [todos, setTodos] = useState(JSON.parse(loadedTodos));

  useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);
 
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }));
   
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos,{
      text:newtodo,
      id:Date.now(),
      day:setday,
    }]);

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
  
    
    {/* 투두 폼 */}
      <Form 
        type='text'
        placeholder='task'
        value={newtodo}
        onChange={(e) => setNewtodo(e.target.value)}
        onSubmit={onSubmit}
        day={setday}
        />
  
    {/* 투두 출력 */}
    <div>{drawTodos}</div> 


    </>
  );
}

export default Todo;
