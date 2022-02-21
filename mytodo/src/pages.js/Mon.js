import React, {useState,useEffect,useRef} from 'react';
import Form from '../components/Form';


const Mon = ({
  settingday,
  NowToday,
}) => {

  
     const [newtodo, setNewtodo] = useState('');
     
    const loadedTodos =  localStorage.getItem("todos");
    const [todos, setTodos] = useState(JSON.parse(loadedTodos));
    const [filterTodo, setFilterTodo] = useState([]);

    const loadedCategorys = localStorage.getItem("category");

    const [categorys,setCategorys] = useState(JSON.parse(loadedCategorys)); 

    const [newCategory,setNewCategory] = useState(null);

    const addCategorys =(e)=> {
     
      setCategorys([...categorys,{class:newCategory,id:Date.now()}]);
      setNewCategory("");
    }

    useEffect(()=>{
      localStorage.setItem('category', JSON.stringify(categorys));
    },[categorys]);

    const removeCategory = (id) => {
      setCategorys(categorys.filter(category => {
        return category.id !== id;
      }));
    }

    const [newCategoryTodo,setNewCategoryTodo] = useState("");

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
        date:NowToday,
        day:settingday,

        category:newCategoryTodo,

        check:false,
      }]);

      setNewtodo('');
    }
  
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));}, [todos]);
  
   useEffect(() => {
     
      setFilterTodo(
              
              todos.filter(todo => {
                
          return todo.date === NowToday;
          })
          
          );
     },[todos,settingday]);
  

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
          id={category.id}
         
          onClick={(e)=>setNewCategoryTodo(e.target.id)}
          removeTodo={removeTodo}
          filterTodo={filterTodo}

          deleteCategory={removeCategory}

          />
          
          </>
      );
    })


    return (
      <>
      
      <div className='category-form'>
      

      <form onSubmit={addCategorys}>
        <input className="input category-input" value={newCategory} onChange={(e)=> setNewCategory(e.target.value)} placeholder="카테고리 추가"/>
        <button type='submit' id="small-button">+</button>
      </form>
      
      {Forms}
        
    
    </div>
      </>
    );
}

export default Mon;
