import { useState } from 'react';
import './LoggedButton.css';
import { logOut } from '../../tools/connectors/conections.mjs';
import { useNavigate, Link } from 'react-router-dom';

function LoggedButton() {
    //----------States:----------
    const navigate = useNavigate();

    async function closeSession() {
        const redirectResponse = await logOut();
        if (redirectResponse.success) {
            navigate("/");
        }
    }
    //----------Handlers:----------
    return (
        <div className='circle-logButton'>
            <button onClick={closeSession}>Cerrar Sesión</button>
            <Link to={"/profiles/"}>
                    <button className='' >Back</button>
            </Link>
        </div>
    );
}
export default LoggedButton;