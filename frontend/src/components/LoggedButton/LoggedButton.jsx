import { useState } from 'react';
import './LoggedButton.css';
import { logOut } from '../../tools/connectors/conections.mjs';
import { useNavigate } from 'react-router-dom';

function LoggedButton() {
    //----------States:----------
    const navigate = useNavigate();

    async function closeSession() {
        const redirectResponse = await logOut();

        if (redirectResponse == 'ok') {
            navigate("/");
        }
    }
    //----------Handlers:----------
    return (
        <div className='circle-logButton'>
            <button onClick={closeSession}>Cerrar Sesión</button>
        </div>
    );
}
export default LoggedButton;