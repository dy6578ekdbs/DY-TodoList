import React, { useEffect, useState } from "react";
import TodoList from './TodoList';

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

}) => {

    
    
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

<div className="todoform">

    <button className="category-button" onClick={onClick} value={categorys}>{categorys}</button>

    <form onSubmit={onSubmit} id={categorys} className="form">
    <input required minlength="1" type={text} placeholder={placeholder} value={value} onChange={onChange}/>
    <button type='submit'>투두 작성 {categorys}</button>
    </form>

</div>

    {What}
    </>
);
};

export default Form;
