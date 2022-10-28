import React from "react";

const ClasesPage = (props) => {
    return (
        <main className="holder">
            <div className="profesores">
                <div className="profesor">
                    <img src="image/" alt="" />
                    <div className="textoclases">
                        <h4>Laura Casas</h4>
                        <p>Docente de Bateria</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                            eius illo velit saepe ipsum omnis suscipit.</p>
                    </div>
                </div>
                <div className="profesor">
                    <img src="image/clases/guitarra.jpg" width="150" alt="" />
                    <div className="textclases">
                        <h4 id="textoclases">Gonzalo Flores</h4>
                        <p id="textoclases">Docente de Guitarra</p>
                        <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                            eius illo velit saepe ipsum omnis suscipit.</p>
                    </div>
                </div>
                <div className="profesor">
                    <img src="image/clases/piano.jpg" width="150" alt="" />
                    <div className="textoclases">
                        <h4 id="textoclases">Hugo Guzman</h4>
                        <p id="textoclases">Docente de Piano</p>
                        <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                            eius illo velit saepe ipsum omnis suscipit.</p>
                    </div>
                </div>
                <div className="profesor">
                    <img src="image/clases/saxofon.jpg" width="150" alt="" />
                    <div className="textoclases">
                        <h4 id="textoclases">Denis Ibañez</h4>
                        <p id="textoclases">Docente de Saxofón</p>
                        <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                            eius illo velit saepe ipsum omnis suscipit.</p>
                    </div>
                </div>
                <div className="profesor">
                    <img src="image/clases/violin.jpg" width="150" alt="" />
                    <div className="textoclases">
                        <h4 id="textoclases">Daniela Ramirez</h4>
                        <p id="textoclases">Docente de Violin</p>
                        <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                            eius illo velit saepe ipsum omnis suscipit.</p>
                    </div>
                </div>
                <div className="profesor">
                    <img src="image/clases/teoria.jpg" width="150" alt="" />
                    <div className="textoclases">
                        <h4 id="textoclases">Laura Casas</h4>
                        <p id="textoclases">Profesora de Teoria Musical</p>
                        <p id="textoclases">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis doloremque eligendi voluptate
                            eius illo velit saepe ipsum omnis suscipit.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ClasesPage;