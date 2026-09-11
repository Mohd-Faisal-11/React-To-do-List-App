import { useState } from 'react';
import css from './AddTodo.module.css'
function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState()
  const [tododueDate, setdueDate] = useState()
  
  const handleNameChange = (event) => {
    settodoName(event.target.value)
  }
  const handledueDateChange = (event) => {
    setdueDate(event.target.value)
  }

  const handleaddButtonClicked = () => {
    onNewItem(todoName, tododueDate)
    settodoName("")
    setdueDate("")
  }

    return <div className="row kg-row">
        <div className="col-sm-5">
            <input className={css.inputbox} type="text" value={todoName} placeholder="Enter ToDo Here" onChange={handleNameChange} />
        </div>
        <div className="col-sm-5">
              <input className={css.inputbox} type="date" value={tododueDate} onChange={handledueDateChange} />
        </div>
        <div className="col-sm-2">
          <button onClick={handleaddButtonClicked} type="button" className="btn btn-success kg-button">Add</button>
        </div>
      </div>
}
export default AddTodo;