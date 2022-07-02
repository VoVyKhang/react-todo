import React from "react";

function Todo({text, todos, setTodos, todo}) {
    // events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(
            todos.map(el => {
                if(el.id === todo.id){
                    return{
                        ...el,
                        completed: !el.completed
                    }
                }
                return el;
            })
        )
    }

    return (  
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>

            <button onClick={completeHandler} className="complete-btn"> 
                <i className="fa fa-check"></i> 
            </button>

            <button onClick={deleteHandler} className="trash-btn">
            <i className="fa fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;