import Login from '../../components/Login/Login';
import './LoginView.css';
import Header from '../../components/Header/Header';

function LoginView() {
    //----------States:----------
    
    // TODO: Add a page reload if the user is log in
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