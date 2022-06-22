import './App.css';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Authorization from './services/Authorization';

function App() {
  return (
    <>
      <Routes>
        <Route path='/profiles/' element={<Authorization><PrincipalView/></Authorization>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/sing-up/' element={<RegistrerView/>}/>
      </Routes>
    </>
  );
}

export default App;
