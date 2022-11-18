import React from 'react';
import '../styles/components/pages/ClasesPage.css';

const ClasesPage = (props) => {
    return(
        <main className='holder'>
            <div className="profesores">
            <div className="profesor">
                <img src="image/clases/bateria.jpg" alt="bateria" />
                <hr />
                <h4 id="textoclases">Laura Casas</h4>
                <p id="textoclases">Docente de Bateria</p>
                <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                    eius illo velit saepe ipsum omnis suscipit.</p>
            </div>
            <div className="profesor">
                <img src="image/clases/guitarra.jpg" alt="guitarra" />
                <hr />
                <h4 id="textoclases">Gonzalo Flores</h4>
                <p id="textoclases">Docente de Guitarra</p>
                <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                    eius illo velit saepe ipsum omnis suscipit.</p>
            </div>
            <div className="profesor">
                <img src="image/clases/piano.jpg"  alt="piano" />
                <hr />
                <h4 id="textoclases">Hugo Guzman</h4>
                <p id="textoclases">Docente de Piano</p>
                <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                    eius illo velit saepe ipsum omnis suscipit.</p>
            </div>
            <div className="profesor">
                <img src="image/clases/saxofon.jpg" alt="sax" />
                <hr />
                <h4 id="textoclases">Denis Ibañez</h4>
                <p id="textoclases">Docente de Saxofón</p>
                <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                    eius illo velit saepe ipsum omnis suscipit.</p>
            </div>
            <div className="profesor">
                <img src="image/clases/violin.jpg" alt="violin" />
                <hr/>
                <h4 id="textoclases">Daniela Ramirez</h4>
                <p id="textoclases">Docente de Violin</p>
                <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                    eius illo velit saepe ipsum omnis suscipit.</p>
            </div>
            <div className="profesor">
                <img src="image/clases/teoria.jpg" alt="teo" />
                <hr/>
                <h4 id="textoclases">Laura Casas</h4>
                <p id="textoclases">Profesora de Teoria Musical</p>
                <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                    eius illo velit saepe ipsum omnis suscipit.</p>
            </div>
        </div>
        </main>
    );
}

export default ClasesPage;