import React from "react";

const TodoList = ({
    todo,
    removeTodo,
}) => {
    
    return(
       
        <> 
        <div style={{display:'flex', border:'2px gray solid', margin:'3px',padding:'3px'}}>
        <div>{todo.text}</div>
        <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </div>
        </>
    );
};

export default TodoList;