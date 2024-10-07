import './AboutView.css';
import Header from '../../components/Header/Header';

function AboutView () {
    return(
        <>
            <Header/>
            <main className='mn-abt'>
                <aside className='asd'>
                    <nav className='asd-nv'>
                        <ul className='asd-ul'>
                            <li className='asd-li'>LINKLINKIFY 1</li>
                            <li className='asd-li'>LINKLINKIFY 2</li>
                            <li className='asd-li'>LINKLINKIFY 3</li>
                        </ul>
                    </nav>
                </aside>
                <section>
                    <article>
                        <h2>¿Qué es Bloomly?</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing 
                            elit. Libero exercitationem eius nihil magnam explicabo 
                            consequatur minima? Dolorum, tempore tempora? Sapiente 
                            vel dolor omnis tempore earum eaque nobis aliquid quos 
                            saepe!
                        </p>
                    </article>
                    <article>
                        <h2>¿Qué ofrece Bloomly?</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing 
                            elit. Libero exercitationem eius nihil magnam explicabo 
                            consequatur minima? Dolorum, tempore tempora? Sapiente 
                            vel dolor omnis tempore earum eaque nobis aliquid quos 
                            saepe!
                        </p>
                    </article>
                    <article>
                        <h2>¿Qué tiene de diferente?</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing 
                            elit. Libero exercitationem eius nihil magnam explicabo 
                            consequatur minima? Dolorum, tempore tempora? Sapiente 
                            vel dolor omnis tempore earum eaque nobis aliquid quos 
                            saepe!
                        </p>
                    </article>
                </section>
            </main>
        </>
    );
}
export default AboutView;