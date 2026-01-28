import services2 from "../assets/img/alt-services-2.jpg";
import breadcrumbs from "../assets/img/breadcrumbs-bg.jpg";
import ServiciosCards from "../components/ServiciosCards";

function Servicios() {
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
            <h2>Servicios</h2>
          </div>
        </div>

        <ServiciosCards />

        <section id="services-cards" className="services-cards">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h3>Construcción Integral</h3>
                <p>
                  Desde la planificación hasta la ejecución, MONE ofrece
                  soluciones completas para edificación, urbanización y
                  saneamiento.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Obras de edificación y urbanización</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Supervisión y control de calidad</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Caminos, carreteras y obras viales</span>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h3>Asesoría Técnica Especializada</h3>
                <p>
                  Contamos con expertos en ingeniería y arquitectura que
                  garantizan soluciones innovadoras y eficientes.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Proyectos estructurales</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Diseño e instalación hidráulica</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Optimización de costos y tiempos</span>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <h3>Gestión y Permisos</h3>
                <p>
                  Facilitamos la gestión de permisos, licencias y trámites
                  administrativos para asegurar el éxito de tu proyecto.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Permisos de construcción y uso de suelo</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Trámites legales y administrativos</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Regulación y cumplimiento normativo</span>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <h3>Materiales y Equipamiento</h3>
                <p>
                  Proveemos insumos de construcción de alta calidad para
                  garantizar la durabilidad y resistencia de cada obra.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Cemento, concreto y varilla</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Bloques, agregados y aluminio</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Alquiler de maquinaria y herramientas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="alt-services-2" className="alt-services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>
                  Non quasi officia eum nobis et rerum epudiandae rem voluptatem
                </h3>
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint
                  at non. Ducimus maxime minima iste magni sit praesentium
                  assumenda minus. Amet rerum saepe tempora vero.
                </p>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
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

export default Servicios;
