import './HomeView.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import bloomlyLogo from '../../assets/Bloomly_logo.png';
import { Link } from 'react-router-dom';

function HomeView() {
    // TODO: Change the styles of the buttons of this page
    return (
        <>
            <Header />
            <main className='mn-wrapper'>
                <Card/>
            </main>
        </>
    );
}

export default HomeView;