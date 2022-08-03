import {Link} from 'react-router-dom'

export const FloatingButton = (props)=>{
    return (
      <div className='floating-button shadow'>
        <Link to={props.path}>{props.icon}</Link>
      </div>
    );
}