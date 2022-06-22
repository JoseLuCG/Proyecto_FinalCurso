import './App.css';
import ChatView from './Views/ChatView/ChatView';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import StartView from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sing-up/' element={<RegistrerView/>}/>
        <Route path='/profiles/' element={<PrincipalView/>}/>
        <Route path='/chat/' element={<ChatView/>}/>
      </Routes>
    </>
  );
}

export default App;
