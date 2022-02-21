import React from "react";

const TodoList = ({
    todo,
    removeTodo,
}) => {
    
    return(
       
        <> 
        <div className="todolist">
            <i class="fa-solid fa-cloud"></i>
            <span>{todo.text}</span>
            <button id="small-button" onClick={() => removeTodo(todo.id)}>-</button>
        </div>
        </>
    );
};

export default TodoList;