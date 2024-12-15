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
            // TODO: Make the page reload if the session is closed
            navigate("/"); // ! Delete this line when the TODO will be finished.
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