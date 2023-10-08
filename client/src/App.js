import '@styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '@views/main/main.js';
import Login from '@views/login/login.js';
import List from '@views/plan/list.js';
import Entry from '@views/entry/entry.js';
import Auth from '@views/login/auth.js';
import MainMobile from '@views/main/mainMobile';
import EntryMobile from '@views/entry/entryMobile';
import ListMobile from '@views/plan/listMobile';

function Mobile() {
  return (
    <Routes>
      <Route path="/" element={<MainMobile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plan" element={<ListMobile />} />
      <Route path="/login/auth" element={<Auth />} />
      <Route path="/entry" element={<EntryMobile />} />
    </Routes>
  )
}

function Web() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plan" element={<List />} />
      <Route path="/login/auth" element={<Auth />} />
      <Route path="/entry" element={<Entry />} />
    </Routes>
  )
}


function App() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <BrowserRouter>
      {isMobile ? <Mobile /> : <Web />}
    </BrowserRouter>
  )
}


export default App;