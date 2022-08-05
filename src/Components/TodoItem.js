export const TodoItem = (props)=>{
    let todo = props.todo;
    return (
      <div className='card border-0'>
        <div className='row'>
          <div className='col-10'>
            <h4 className='card-title'>
              {!todo.isDone ? (
                todo.title
              ) : (
                <strike className='text-secondary'>{todo.title}</strike>
              )}
            </h4>
            {/* <p className="card-body">{todo.desc}</p> */}
          </div>
          <div className='col-1 col-sm'>
            <div className='row'>
              <div className='col p-1'>
                <button
                  className='btn text-white bg-purple rounded-circle'
                  onClick={() => {
                    props.onDone(todo);
                  }}
                >
                  <i className='fa fa-check'></i>
                </button>
              </div>
              <div className='col p-1'>
                <button
                  className='btn btn-danger rounded-circle'
                  onClick={() => {
                    props.onDelete(todo);
                  }}
                >
                  <i className='fa fa-times'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
}