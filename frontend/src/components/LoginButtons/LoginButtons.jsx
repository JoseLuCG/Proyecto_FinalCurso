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
                <Link to={"/"} className='li-link'>
                    I S
                </Link>
            </button>
            <button className='crcl-r'>R T</button>
        </div>
    );
}
export default LoginButtons;