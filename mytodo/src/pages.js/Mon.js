import React, {useState,useEffect} from 'react';
import TodoList from '../components/TodoList';
import Form from '../components/Form';


const Mon = ({
  settingday,
}) => {

    const [newtodo, setNewtodo] = useState('');
    const loadedTodos =  localStorage.getItem("todos");
    const [todos, setTodos] = useState(JSON.parse(loadedTodos));
    const [filterTodo, setFilterTodo] = useState([]);


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
        day:settingday,
      }]);
      setNewtodo('');
    }
  
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));}, [todos]);
  
   useEffect(() => {
      setFilterTodo(
              
              todos.filter(todo => {
          return todo.day === settingday;
          })
          
          );
     },[todos,settingday]);
  
    
    const drawTodos = filterTodo.map(
      todo =>{
        return(
         <TodoList todo={todo} key={todo.text} removeTodo={removeTodo}/>
        );
      }
    );
  
    return (
      <>
      
      <div className='todoform'>
  
      <p>{settingday}</p>
      
        <Form 
          type='text'
          placeholder='task'
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
          onSubmit={onSubmit}
          />
    
     
      <div>{drawTodos}</div> 
    </div>
      </>
    );
}

export default Mon;
