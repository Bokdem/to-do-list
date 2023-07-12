import { useState } from "react"

export function TodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return

        addTodo(newItem)

        setNewItem("")
      }

    return(
    <form onSubmit={handleSubmit} className='App'>
        <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item">
        </input>
        <button className='btn'>Add</button>
        </div>
    </form>
    )
}