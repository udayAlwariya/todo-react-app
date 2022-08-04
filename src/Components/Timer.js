import { React,useState } from "react";
import { FloatingButton } from "./FloatingButton";

export const Timer = ()=>{
    const [timer,setTimer] = useState(0);
    var interval;
    const startTimer = (min)=>{
        let miliseconds = min*60*1000;
        return setInterval(() => {
            if (miliseconds !== -1) {
              setTimer(miliseconds-=100);
            }
        }, 100);
    }

    return (
      <>
        <div
          className='card mx-auto mt-4 shadow-lg main-container'
          style={{ width: '70vw', height: '90vh' }}
        >
          <h2 className='text-center shadow p-1 bg-purple text-white'>
            <i>Timer</i>
          </h2>
          <div
            className='card bg-purple-light mx-auto my-4'
            style={{ width: '50vw', height: '30vh' }}
          >
            <h1 className='text-white text-center mt-4'>
              {Math.round(timer / 60000 - 1) + ':' + (timer % 60000)}
            </h1>
            <h1 className='text-white text-center mt-4'>
              {'₹' + timer / 5000}
            </h1>
          </div>
          <div className='mx-auto'>
            <div className='p-2'>
              <input
                type='number'
                className='form-controol'
                placeholder='Enter minutes'
                onKeyUp={(e) => {
                  if (e.code === 'Enter') {
                    clearInterval(interval);
                    interval = startTimer(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        </div>
        <FloatingButton icon='📝' path='/todo-react-app/' />
      </>
    );
}