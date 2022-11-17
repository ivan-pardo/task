import React from 'react';

const GaleriaPage = (props) => {
    return(
        <main className='holder'>
            <div className="galeria">
            <div className="cajaimagen">
                <h3>Ensambles</h3>
                <img src="image/galeria/ensamble1.jpg" alt="" />
                <img src="image/galeria/ensamble2.jpg" alt="" />
                <img src="image/galeria/ensamble3.jpg" alt="" />
                <img src="image/galeria/ensamble4.jpg" alt="" />
            </div>
            <div className="cajaimagen">
                <h3>Tienda</h3>
                <img src="image/galeria/tienda1.jpg" alt="" />
                <img src="image/galeria/tienda2.jpg" alt="" />
                <img src="image/galeria/tienda3.webp" alt="" />
            </div>
            <div className="cajaimagen">
                <h3>Discografia</h3>
                <img src="image/galeria/discos2.jpg" alt="" />
                <img src="image/galeria/discos3.jpg" alt="" />
            </div>
        </div>
        </main>
    );
}

export default GaleriaPage;