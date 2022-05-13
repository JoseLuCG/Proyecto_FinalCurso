import './App.css';
import OptionsContainer from './components/OptionsContainer/OptionsContainer';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import StartView from './Views/StartView/StartView';

function App() {
  return (
    <>
      <OptionsContainer/>
      <StartView/>
      <RegistrerView/>
      <PrincipalView/>
    </>
  );
}

export default App;
