import Login from '../../components/Login/Login';
import './LoginView.css';
import Header from '../../components/Header/Header';

function LoginView() {
    //----------States:----------
 
    //----------Handlers:----------
    return (
        <>
            <Header/>
            <main className='mn-container'>
                <Login/>
            </main>
        </>
    );
}
export default LoginView;