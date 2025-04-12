import './HomeView.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import bloomlyLogo from '../../assets/Bloomly_logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HomeView() {
    const [ isHomeView, setIsHomeView ] = useState(true);

    return (
        <>
            <Header />
            <main className='mn-wrapper'>
                <Card isHomeView={isHomeView} setIsHomeView={setIsHomeView} />
            </main>
        </>
    );
}

export default HomeView;