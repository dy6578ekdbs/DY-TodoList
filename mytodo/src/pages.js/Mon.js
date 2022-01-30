import React, {useState,useEffect,useRef} from 'react';
import TodoList from '../components/TodoList';
import Form from '../components/Form';


const Mon = ({
  settingday,
}) => {

  

    const [newtodo, setNewtodo] = useState('');
    const loadedTodos =  localStorage.getItem("todos");
    const [todos, setTodos] = useState(JSON.parse(loadedTodos));
    const [filterTodo, setFilterTodo] = useState([]);

    const [categorys,setCategorys] = useState([
     {class:"study"},{class:"date"},{class:"work"},
    
    ]);

    const [newcategory,setNewCategory] = useState("");

    const removeTodo = (id) => {
      setTodos(todos.filter(todo => {
        return todo.id !== id;
      }));
     
    };
    
    // 투두리스트 객체 생성 부분 
    const onSubmit = (event) => {
      event.preventDefault();


      setTodos([...todos,{
        text:newtodo,
        id:Date.now(),
        day:settingday,
        category:newcategory,
        check:false,
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
  
    // // todo 그리기
    // const drawTodos = filterTodo.map(
    //   todo =>{
    //     return(
    //      <TodoList todo={todo} key={todo.text} removeTodo={removeTodo}/>
    //     );
    //   }
    // );
  

     // map 함수 form 생성
    const Forms = categorys.map(category => {
     
      return(
        <>
       
        <Form 
          type='text'
          placeholder='task'
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
          onSubmit={onSubmit}


          categorys={category.class}

          onClick={(e)=>setNewCategory(e.target.value)}
        removeTodo={removeTodo}
          filterTodo={filterTodo}
        
          />
          
          </>
      );
    })


    return (
      <>
      
      <div className='todoform'>
      
      <p>오늘은 {settingday}</p>
      
      {Forms}
        
    
    </div>
      </>
    );
}

export default Mon;
