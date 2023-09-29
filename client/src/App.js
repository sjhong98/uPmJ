import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './views/main/main.js';
import Login from './views/login/login.js';
import List from './views/plan/list.js';
import Entry from './views/entry/entry.js';
import Auth from './views/login/auth.js';
import SocketTest from './socketTest.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<List />} />
        <Route path="/login/auth" element={<Auth />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/socket_test" element={<SocketTest />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;