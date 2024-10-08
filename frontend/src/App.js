import './App.css';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import EditingView from './Views/EditingView/EditingView';
import LoginView from './Views/LoginView/LoginView';
import AboutView from './Views/AboutView/AboutView';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Authorization from './services/Authorization';
import OptionsContainer from './components/OptionsContainer/OptionsContainer';
import SuggestionsView from './Views/SuggestionsView/SuggestionsView';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={[<Header/>,<LoginView/>]} />
        <Route path='/suggestions/' element={<SuggestionsView/>} />
        <Route path='/about/' element={<AboutView/>} />
        <Route path='/sing-up/' element={<RegistrerView/>}/>
        <Route path='/profiles/' element={<Authorization><PrincipalView/></Authorization>}/>
        <Route path='/edit-user/' element={<EditingView/>}/>
        <Route path='/settings/' element={<OptionsContainer/>}/>
      </Routes>
    </>
  );
}

export default App;
