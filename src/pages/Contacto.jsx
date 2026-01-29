import breadcrumbs from "../assets/img/breadcrumbs-bg.jpg";
import "../pages/Contacto.css";
import { useState } from "react";

function Contacto() {
  const [
    nombre,
    telefono,
    setNombre,
    setTelefono,
    email,
    setEmail,
    compania,
    setCompania,
    mensaje,
    setMensaje,
  ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: `url(${breadcrumbs})` }}
        >
          <div
            className="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>Contacto</h2>
          </div>
        </div>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-envelope"></i>
                  <h3>Envia un mensaje a nuestro correo</h3>
                  <a href="mailto:moneinmobiliaria0@gmail.com">
                    moneinmobiliaria0@gmail.com
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-map"></i>
                  <h3>Visitanos</h3>
                  <p>Boca del Rio Veracruz</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-telephone"></i>
                  <h3>LLamanos</h3>
                  <p>229 371 6558</p>
                </div>
              </div>
            </div>
          </div>

          <div className="formulario" data-aos="fade-up" data-aos-delay="100">
            <legend>Comunícate con nosotros</legend>
            <p>
              ¿Quieres nuestros servicios? Tienes alguna pregunta hasnoslos
              saber llenando el siguiente formulario
            </p>
            <form onSubmit={handleSubmit} className="contacto__formulario">
              <div className="input">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="input">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingresa tu Teléfono"
                />
              </div>

              <div className="input">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu E-mail"
                />
              </div>

              <div className="input">
                <label htmlFor="conpania">Compañía:</label>
                <input
                  type="text"
                  value={compania}
                  onChange={(e) => setCompania(e.target.value)}
                  placeholder="Ingresa tu Compañía"
                />
              </div>
              <div className="input--texarea">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe tu mensaje"
                  rows={5}
                />
              </div>
            </form>
            <div className="bton">
              <button type="submit" className="btn-naranga">
                Enviar
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contacto;
