import TodoItem from "./Todo-item";
import css from './To-do-Item-data.module.css'
const TodoItems = ({ TodoItems, onDeleteClick }) => {
    return  <>
    
        <div className={css.todoitem}>
            {TodoItems.map((item) => (
             <TodoItem key={item.name} TodoName ={item.name} TodoDate = {item.dueDate} onDeleteClick = {onDeleteClick} />
            ))}
   
    
</div>
    </>
}

export default TodoItems;