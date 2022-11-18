import React from 'react';
import '../styles/components/pages/ProductosPage.css';

const ProductosPage = (props) => {
    return (
        <main className='holder'>
            <div className="instrumentos">
                <div className="instrumento">
                    <img src="image/istrumentos/grab.webp" alt="equip" />
                    <div className="boxinstrumento">
                        <h4>Equipo Grabacion</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas minus at impedit reprehenderit. Voluptatem voluptate soluta, tempora error molestiae corrupti sint illo ducimus temporibus perspiciatis, blanditiis unde accusamus consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, neque.</p>
                    </div>
                </div>
                <div className="instrumento">
                    <img src="image/istrumentos/bateria.png" alt="bateria" />
                    <div className="boxinstrumento">
                        <h4>Bateria</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas minus at impedit reprehenderit. Voluptatem voluptate soluta, tempora error molestiae corrupti sint illo ducimus temporibus perspiciatis, blanditiis unde accusamus consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, neque.</p>
                    </div>
                </div>
                <div className="instrumento">
                    <img src="image/istrumentos/guitarra.png" alt="guitarra" />
                    <div className="boxinstrumento">
                        <h4>Guitarra Electrica</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas minus at impedit reprehenderit. Voluptatem voluptate soluta, tempora error molestiae corrupti sint illo ducimus temporibus perspiciatis, blanditiis unde accusamus consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, neque.</p>
                    </div>
                </div>
                <div className="instrumento">
                    <img src="image/istrumentos/parlantes.png" alt="parlantes" />
                    <div className="boxinstrumento">
                        <h4>Parlantes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas minus at impedit reprehenderit. Voluptatem voluptate soluta, tempora error molestiae corrupti sint illo ducimus temporibus perspiciatis, blanditiis unde accusamus consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, neque.</p>
                    </div>
                </div>
                <div className="instrumento">
                    <img src="image/istrumentos/sax.jpg" alt="sax" />
                    <div className="boxinstrumento">
                        <h4>Saxofón</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas minus at impedit reprehenderit. Voluptatem voluptate soluta, tempora error molestiae corrupti sint illo ducimus temporibus perspiciatis, blanditiis unde accusamus consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, neque.</p>
                    </div>
                </div>
                <div className="instrumento">
                    <img src="image/istrumentos/teclado.webp" alt="teclado" />
                    <div className="boxinstrumento">
                        <h4>Teclado</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptas minus at impedit reprehenderit. Voluptatem voluptate soluta, tempora error molestiae corrupti sint illo ducimus temporibus perspiciatis, blanditiis unde accusamus consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, neque.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductosPage;