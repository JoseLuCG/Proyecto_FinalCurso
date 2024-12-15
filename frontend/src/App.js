import './App.css';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import EditingView from './Views/EditingView/EditingView';
import LoginView from './Views/LoginView/LoginView';
import AboutView from './Views/AboutView/AboutView';
import RulesView from './Views/RulesView/RulesView';
import { Route, Routes } from 'react-router-dom';
import Authorization from './services/Authorization';
import OptionsContainer from './components/OptionsContainer/OptionsContainer';
import SuggestionsView from './Views/SuggestionsView/SuggestionsView';
import { useContext, useEffect } from 'react';
import { OwnUser } from './services/OwnUserStorage';
import HomeView from './Views/HomeView/HomeView';
import OptionsView from './Views/OptionsView/OptionsView';

function App() {
  const [ user, setUser ] = useContext(OwnUser);

  useEffect(
    ()=> {
      const userData = JSON.parse(localStorage.getItem("User"));
      setUser(userData);
    },[]
  );

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/login' element={<LoginView/>} />
        <Route path='/suggestions/' element={<SuggestionsView/>} />
        <Route path='/about/' element={<AboutView/>} />
        <Route path='/rules-of-conduct/' element={<RulesView/>} />
        <Route path='/sing-up/' element={<RegistrerView/>}/>
        <Route path='/options/' element={<Authorization><OptionsView/></Authorization>} />
        <Route path='/profiles/' element={<Authorization><PrincipalView/></Authorization>}/>
        <Route path='/edit-user/' element={<Authorization><EditingView/></Authorization>}/>
        <Route path='/settings/' element={<Authorization><OptionsContainer/></Authorization>}/>
      </Routes>
    </>
  );
}

export default App;
