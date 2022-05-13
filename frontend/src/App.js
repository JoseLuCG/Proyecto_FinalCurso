import './App.css';
import Message from './components/Message/Message';
import OptionsContainer from './components/OptionsContainer/OptionsContainer';
import ChatView from './Views/ChatView/ChatView';
import PrincipalView from './Views/PrincipalView/PrincipalView';
import RegistrerView from './Views/RegistrerView/RegistrerView';
import StartView from './Views/StartView/StartView';

function App() {
  return (
    <>
      <Message/>
      <OptionsContainer/>
      <StartView/>
      <RegistrerView/>
      <PrincipalView/>
      <ChatView/>
    </>
  );
}

export default App;
