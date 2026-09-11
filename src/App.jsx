import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/Todo-Items-data"
import WelcomeMesage from "./components/welcomeMessage"
import "./App.css"
import { useState } from "react";
function App() {

  const [todoItems, settodoItems] = useState([])

  const handlenewItem = (itemName, itemdueDate) => {
    

    const newTodoItms = [...todoItems, {
      name: itemName,
      dueDate: itemdueDate
    }]

    settodoItems(newTodoItms)
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    settodoItems(newTodoItems)
  }
  

  return <center className="Todo-Content">
    <div className="Content-area">
      <AppName  />
      <AddTodo onNewItem={handlenewItem} />
      {todoItems.length === 0 && <WelcomeMesage />}
      <TodoItems TodoItems = {todoItems} onDeleteClick = {handleDeleteItem} />
      </div>
    </center>
}

export default App
