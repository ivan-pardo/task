import React from 'react';

const ContactoPage = (props) => {
    return(
        <main class='holder'>
            <div className="contacto">
            <div>
                <h2>Envia tu Mensaje</h2>
                <form action="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="tel">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Go" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Contactanos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum eveniet perspiciatis cum
                    temporibusb
                    fugiat mollitia, sint pariatur quam maiores?</p>
                <ul>
                    <li><i className="fa-brands fa-whatsapp"></i>: 101-10101101</li>
                    <li><i className="fa-solid fa-envelope"></i>: musicshop@.com</li>
                    <li><i className="fa-brands fa-facebook"></i>: @facebook.com/musicshop/</li>
                    <li><i className="fa-brands fa-twitter"></i>: @twitter.com/musicshop/0258</li>
                    <li><i className="fa-solid fa-location-dot"></i>: Voltaire 1001</li>
                </ul>
            </div>
        </div>
        </main>
    );
}

export default ContactoPage;