import './Header.css';
import logo from '../../assets/logo.png';
import LoginButtons from '../LoginButtons/LoginButtons';
import LoggedButton from '../LoggedButton/LoggedButton';
import { sessionCookie } from '../../tools/defines.mjs';
import ButtonsHeaderOut from '../ButtonsHeaderOut/ButtonsHeaderOut';
import ButtonsHeaderIn from '../ButtonsHeaderIn/ButtonsHeaderIn';

function Header() {
    //----------States:----------
 
    //----------Handlers:----------

    // TODO: Add a change in buttons when the user is logged
    return (
        <header className='h-bd'>
            <aside className='lg-ctnr'>
                <div className='img-ctnr'>
                </div>
                <h1 className='appname'>BLOOMLY</h1>
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