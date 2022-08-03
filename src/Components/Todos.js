import { TodoItem } from "./TodoItem"

export const Todos = (props)=>{
  let todo = {
    id:props.todos.length+1,
    title:"",
    isDone:false
  }
    return (
      <div
        className='card mx-auto my-4 shadow-lg main-container'
        style={{ width: '70vw', height: '90vh' }}
      >
        <h2 className='card-title text-center mt-4'>
          <i>{props.title}</i>
        </h2>
        <div className='p-2'>
          <input
            type='text'
            className='form-controol'
            placeholder='Add Todo'
            onKeyUp={
              (e)=>{
                if(e.code==='Enter'){
                  props.onAdd(todo);
                  e.target.value="";
                }
              }
            }
            onChange={(e) => {
              todo.title = e.target.value;
            }}
          />
        </div>
        <div className='p-3'>
          {props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={props.onDelete}
                onDone={props.onDone}
              />
            );
          })}
        </div>
      </div>
    );
}