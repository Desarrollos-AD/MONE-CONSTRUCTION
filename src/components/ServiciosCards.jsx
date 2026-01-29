function ServiciosCards() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div
          className="col-lg-6 d-flex align-items-center justify-content-center text-center"
          data-aos="fade-up"
        >
          <div className="content">
            <h3>Construyendo el futuro con calidad y compromiso.</h3>
          </div>
        </div>
        <div className="section-header">
          <h2>Servicios</h2>

          <p>¡Descubre soluciones a tu medida!</p>
        </div>

        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-building"></i>
              </div>
              <h3>Proyectos Estructurales e Instalación Hidráulica</h3>
              <p>
                Diseñamos y ejecutamos sistemas estructurales e hidráulicos con
                precisión técnica, asegurando la integridad, seguridad y
                durabilidad de edificaciones, urbanizaciones e instalaciones
                industriales.
              </p>
              <a
                href="mailto:info@mone.com?subject=Cotizacion de servicios&body=Hola, estoy interesado en proyectos estructurales e instalación hidráulica"
                className="readmore stretched-link"
              >
                contáctenos <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3>Desarrollo y Asesoría Técnica</h3>
              <p>
                Proporcionamos consultoría especializada en ingeniería y
                arquitectura, acompañando a nuestros clientes desde la
                conceptualización hasta la ejecución, con soluciones eficientes
                y viables.
              </p>
              <a
                href="mailto:info@mone.com?subject=Cotizacion de servicios&body=Hola, estoy interesado en desarrollo y asesoría técnica"
                className="readmore stretched-link"
              >
                contáctenos <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-warehouse"></i>
              </div>
              <h3>Compra y Venta de Bienes Muebles</h3>
              <p>
                Comercializamos maquinaria y materiales necesarios para la
                construcción y desarrollo de proyectos.
              </p>
              <a
                href="mailto:info@mone.com?subject=Cotizacion de servicios&body=Hola, estoy interesado en compra y venta de bienes muebles"
                className="readmore stretched-link"
              >
                contáctenos <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-helmet-safety"></i>
              </div>
              <h3>Construcción, Diseño y Supervisión de Obras</h3>
              <p>
                Ejecutamos proyectos de obra pública y privada con supervisión
                continua, control de calidad y cumplimiento de normativas,
                garantizando resultados alineados con los objetivos del cliente.
              </p>
              <a
                href="mailto:info@mone.com?subject=Cotizacion de servicios&body=Hola, estoy interesado en construcción, diseño y supervisión de obras"
                className="readmore stretched-link"
              >
                contáctenos <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-truck-loading"></i>
              </div>
              <h3>Arrendamiento y Acondicionamiento de Oficinas y Bodegas</h3>
              <p>
                Ofrecemos espacios industriales y comerciales acondicionados,
                así como servicios de arrendamiento flexible con soluciones
                adaptadas a las necesidades de operación de cada empresa.
              </p>
              <a
                href="mailto:info@mone.com?subject=Cotizacion de servicios&body=Hola, estoy interesado en arrendamiento y acondicionamiento de oficinas y bodegas"
                className="readmore stretched-link"
              >
                contáctenos <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiciosCards;
