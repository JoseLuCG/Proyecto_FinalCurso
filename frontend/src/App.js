import './App.css';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import EditingView from './Views/EditingView/EditingView';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Authorization from './services/Authorization';
import OptionsContainer from './components/OptionsContainer/OptionsContainer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/profiles/' element={<Authorization><PrincipalView/></Authorization>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/sing-up/' element={<RegistrerView/>}/>
        <Route path='/edit-user/' element={<EditingView/>}/>
        <Route path='/settings/' element={<OptionsContainer/>}/>
      </Routes>
    </>
  );
}

export default App;
