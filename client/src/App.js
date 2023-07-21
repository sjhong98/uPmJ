import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './main.js';
import Login from './login.js';
import List from './list.js';
import Auth from './auth.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<List />} />
        <Route path="/login/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;