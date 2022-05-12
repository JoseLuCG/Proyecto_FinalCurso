import './StartView.css';

function StartView () {
    return(
        <div className='logingContainer'>
            <h1>Login view</h1>
            <img className='LogoApp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtepaT1fXQVI9_pyOM34JaAx7aASFWzfmyQg&usqp=CAU" alt="Logo imagen" />
            <input type="text" placeholder='Nombre de usuario o email'/>
            <input type="password" placeholder='Contraseña'/>
            <div>
                <button>Entrar</button>
                <button>Registrarse</button>
            </div>
        </div>
    );
}
export default StartView;