import React from "react";

// Import Components
import Todo from './Todo'

function TodoList({todos, setTodos}) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          todos.map(todo => (
            <Todo 
            setTodos={setTodos} 
            todos={todos}
            todo={todo} 
            key={todo.id} 
            text={todo.text} />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;