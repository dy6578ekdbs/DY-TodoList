import React, { useEffect, useState, useRef } from "react";
import TodoList from './TodoList';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;



const useClick = onClick => {
    const element = useRef();

    useEffect(()=>{
        if(element.current){
            element.current.addEventListener("click",onClick);
        }
    });

    return element;
}

const Form = ({
    text,
    placeholder,
    value,
    onChange,
    onSubmit,
    categorys,
    onClick,
    filterTodo,
    removeTodo,
    deleteCategory,
    id

}) => {


    const Study = (e)=> {
        
    };

    const ClickTarget = useClick(Study);
    
     const real = filterTodo.filter(todo => {
      return todo.category == categorys;
     });
     


    const What = real.map( todo =>{
      
          return(
              <>
           

            <TodoList todo={todo} key={todo.text} removeTodo={removeTodo}/>


            </>
          );
        
      });

      

return(
    <>
<div className="category-box">

    <div className="todoform">

        <button 
        ref={ClickTarget}
        className="category-button" 
        onClick={onClick} 
        value={categorys}
        id={categorys}
        >
        
            <i class="fas fa-box" id={categorys}></i>
            <p id={categorys}>{categorys}</p>
            <i class="fas fa-plus-circle" id={categorys}></i>
        
        </button>

        <button onClick={() => deleteCategory(id)} id="small-button" className="delete">x</button>

    </div>


    <form onSubmit={onSubmit} id={categorys} className="todo form" >

        <i class="fas fa-paw"></i>
        <input  className="input small-input" required minlength="1" type={text} placeholder={placeholder} value={value} onChange={onChange}/>
      

    </form>



</div>
    {What}
    </>
);
};

export default Form;
