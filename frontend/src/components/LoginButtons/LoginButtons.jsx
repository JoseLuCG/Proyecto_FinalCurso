import { useState } from 'react';
import './LoginButtons.css';
import { Link } from 'react-router-dom';

function LoginButtons() {
    //----------States:----------
    const [ session, setSession ] = useState("");

    //----------Handlers:----------
    return (
        <div className='circle-logButton'>
            <button className='crcl-l'>
                <Link to={"/login"} className='li-link'>
                    I S
                </Link>
            </button>
            <button className='crcl-r'>
                <Link to={"/sing-up/"}>
                    R T
                </Link>
            </button>
        </div>
    );
}
export default LoginButtons;