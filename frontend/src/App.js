import './App.css';
import Message from './components/Message/Message';
import OptionsContainer from './components/OptionsContainer/OptionsContainer';
import ChatView from './Views/ChatView/ChatView';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import StartView from './Views/StartView/StartView';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login/' element={<StartView/>}/>
        <Route path='/singup/' element={<RegistrerView/>}/>
        <Route path='/profiles/' element={<PrincipalView/>}/>
        <ChatView/>
      </Routes>
    </>
  );
}

export default App;
