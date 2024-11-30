import { useState } from 'react';
import './LoggedButton.css';
import { logOut } from '../../tools/connectors/conections.mjs';

function LoggedButton() {
    //----------States:----------

    function closeSession() {
        logOut();
    }
    //----------Handlers:----------
    return (
        <div className='circle-logButton'>
            <button onClick={closeSession}>Cerrar Sesión</button>
        </div>
    );
}
export default LoggedButton;