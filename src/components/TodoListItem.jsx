export default function TodoListItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
        <label>
          <input type="checkbox" checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
          <button 
          onClick={() => deleteTodo(id)} 
          className="delete">Delete</button>
        </label>
      </li>
    )
}