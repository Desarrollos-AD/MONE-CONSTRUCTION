import about from "../assets/img/about.jpg";
import breadcrumbs from "../assets/img/breadcrumbs-bg.jpg";
import services1 from "../assets/img/alt-services.jpg";
import services2 from "../assets/img/alt-services-2.jpg";
import "./Nosotros.css"

function Nosotros() {
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
            <h2>¿Que nos impulsa?</h2>
          </div>
        </div>

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div
                className="col-lg-7 about-img"
                style={{ backgroundImage: `url(${about})` }}
              ></div>

              <div className="col-lg-7">
                <h2>Construyendo el futuro con calidad y compromiso.</h2>
                <div className="our-story">
                  <h3>Nosotros</h3>
                  <h4>¿Quiénes somos?</h4>
                  <p>
                    MONE Construcción es una empresa dedicada a la planeación,
                    diseño, supervisión y ejecución de proyectos de ingeniería
                    civil y construcción, tanto en los sectores público como
                    privado. Nuestro equipo está conformado por especialistas
                    altamente capacitados, comprometidos con la excelencia, la
                    innovación y la entrega de soluciones que generan valor
                    sostenible para nuestros clientes y sus comunidades.
                  </p>

                  <div className="valores">
                    <h4> valores </h4>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle"></i>{" "}
                        <span>Compromiso</span>
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i>{" "}
                        <span>Inovación</span>
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i>{" "}
                        <span>Calidad</span>
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i>{" "}
                        <span>Responsabilidad</span>
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i>{" "}
                        <span>Sostenibilidad </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: `url(${services1})` }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Misión</h3>
                <p>
                  Brindar soluciones integrales de ingeniería y construcción,
                  respaldadas por rigor técnico, seguridad y mejores prácticas
                  de la industria. Nos enfocamos en optimizar recursos,
                  fortalecer la eficiencia operativa y asegurar la satisfacción
                  de nuestros clientes en cada proyecto que emprendemos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="alt-services-2" className="alt-services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Visión</h3>
                <p>
                  Ser reconocidos como una empresa líder en el sector de la
                  construcción e infraestructura en México, destacando por
                  nuestra capacidad técnica, innovación continua, compromiso con
                  la sostenibilidad y excelencia operativa, así como por
                  construir relaciones duraderas con nuestros clientes y aliados
                  estratégicos.
                </p>
              </div>

              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: `url(${services2})` }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Nosotros;
