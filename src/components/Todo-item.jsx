function TodoItem({TodoName, TodoDate, onDeleteClick}) {

    return <div className="row kg-row">
        <div className="col-sm-5">
                {TodoName}
        </div>
        <div className="col-sm-5">
                {TodoDate}
        </div>
        <div className="col-sm-2">
          <button onClick={()=> onDeleteClick(TodoName)} type="button" className="btn btn-danger kg-button">Delete</button>
        </div>
      </div> 
}
export default TodoItem;