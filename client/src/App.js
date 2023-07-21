import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './main.js';
import Login from './login.js';
import List from './list.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;