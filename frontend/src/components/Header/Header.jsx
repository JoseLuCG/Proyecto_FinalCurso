import './Header.css';
import bloomlyLogo from '../../assets/Bloomly_logoR.png'
import LoginButtons from '../LoginButtons/LoginButtons';
import LoggedButton from '../LoggedButton/LoggedButton';
import { sessionCookie } from '../../tools/defines.mjs';
import ButtonsHeaderOut from '../ButtonsHeaderOut/ButtonsHeaderOut';
import ButtonsHeaderIn from '../ButtonsHeaderIn/ButtonsHeaderIn';

function Header() {
    //----------States:----------
 
    //----------Handlers:----------

    return (
        <header className='h-bd'>
            <aside className='lg-ctnr'>
                <img  className="bloomlyLogo" src={bloomlyLogo} alt="logo"/>
            </aside>
            <section className='sctn-ctnr'>
                {
                    sessionCookie ?
                    <ButtonsHeaderIn/> :
                    <ButtonsHeaderOut/>
                }
                <div>
                    {
                        sessionCookie ?
                        <LoggedButton/>:
                        <LoginButtons/>
                    }
                </div>
            </section>
        </header>
    );
}
export default Header;