export const TodoItem = (props)=>{
    let todo = props.todo;
    return (
      <div className='card border-0'>
        <div className='row'>
          <div className='col'>
            <h4 className='card-title'>
              {!todo.isDone ? todo.title : <strike className="text-secondary">{todo.title}</strike>}
            </h4>
            {/* <p className="card-body">{todo.desc}</p> */}
          </div>
          <div className='col-2'>
            <button className='btn btn-primary rounded-circle' onClick={()=>{props.onDone(todo)}}>●</button>
          </div>
          <div className='col-2'>
            <button
              className='btn btn-danger rounded-circle'
              onClick={() => {
                props.onDelete(todo);
              }}
            >
              ●
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
}