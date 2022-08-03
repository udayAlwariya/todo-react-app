import './App.css'
import {Routes, Route } from 'react-router-dom';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Timer } from './Components/Timer';

function App() {
    return (
      <Routes>
        <Route path='/todo-react-app/' element={<Home />} />
        <Route path='/todo-react-app/timer' element={<Timer />} />
      </Routes>
    );
}

export default App;
