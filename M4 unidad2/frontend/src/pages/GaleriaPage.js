import React from 'react';
import '../styles/components/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return(
        <main className='holder'>
            <div className="galeria">
            <div className="cajaimagen">
                <h3>Ensambles</h3>
                <img src="image/galeria/ensamble1.jpg" alt="img1" />
                <img src="image/galeria/ensamble2.jpg" alt="img2" />
                <img src="image/galeria/ensamble3.jpg" alt="img3" />
                <img src="image/galeria/ensamble4.jpg" alt="img4" />
            </div>
            <div className="cajaimagen">
                <h3>Tienda</h3>
                <img src="image/galeria/tienda1.jpg" alt="t1" />
                <img src="image/galeria/tienda2.jpg" alt="t2" />
                <img src="image/galeria/tienda3.webp" alt="t3" />
            </div>
            <div className="cajaimagen">
                <h3>Discografia</h3>
                <img src="image/galeria/discos2.jpg" alt="d1" />
                <img src="image/galeria/discos3.jpg" alt="d2" />
            </div>
        </div>
        </main>
    );
}

export default GaleriaPage;