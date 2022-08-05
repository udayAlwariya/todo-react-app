import { React,useState} from "react";
import { FloatingButton } from "./FloatingButton";
import sound from '../sounds/alert.wav';

let audio = new Audio(sound);
let currTimer = 0;

export const Timer = ()=>{
    const [timer,setTimer] = useState(0);
    const [isRuning,setIsRuning] = useState(false);

    function stopTimer() {
      currTimer = -1;
      setTimer(0);
      audio.pause();
      setIsRuning(false);
    }
    
    const startTimer = (min)=>{
      if (min === '' || min === 0) {
        alert('Enter valid value');
        return
      } 
        setIsRuning(true);
        currTimer = min*60*1000;
        let intervel = setInterval(() => {
            if (currTimer > 0) {
              setTimer(currTimer-=100);
            }else{
              if(currTimer!==-1){
                audio.loop = true;
                audio.play();
              }
              clearInterval(intervel);
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
            <i className='fas fa-stopwatch'></i> Timer
          </h2>
          <div
            className='card bg-purple-light mx-auto shadow my-4 rounded-pill'
            style={{ width: '45vh', height: '45vh' }}
          >
            <div className='my-auto'>
              <h1 className='text-white text-center mt-4'>
                {Math.floor(timer / 60000) + ':' + (timer % 60000) / 100}
              </h1>
              <h1 className='text-white text-center mt-4'>
                {'₹ ' + timer / 5000}
              </h1>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='row'>
              {!isRuning ? (
                <div className='col'>
                  <div className='row'>
                    <div className='col'>
                      <input
                        type='number'
                        className='form-controol'
                        placeholder='Enter minutes'
                        onKeyUp={(e) => {
                          if (e.code === 'Enter') {
                            startTimer(e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                    </div>
                    <div className='col-2 my-auto'>
                      <button
                        className='btn bg-purple text-white'
                        onClick={() => {
                          let val = document.querySelector('input').value;
                          startTimer(val);
                          val = '';
                        }}
                      >
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='col'>
                  <button
                    className='btn bg-purple text-white'
                    onClick={stopTimer}
                  >
                    Stop
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <FloatingButton
          icon='fa-solid fa-clipboard-check'
          path='/todo-react-app/'
        />
      </>
    );
}