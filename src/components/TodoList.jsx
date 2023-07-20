import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
        {todos.length === 0 && "No Todo's"}
        {todos.map(todo => {
          return (
            <TodoListItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          )
        })}
      </ul>
    )
}