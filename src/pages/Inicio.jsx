
import { Link } from "react-router-dom";
import ProductosCards from "../components/ProductosCards";
import logoMone from "../assets/img/mone.svg";
import blog1 from "../assets/img/blog/blog-1.png";
import hero1 from "../assets/img/hero-carousel/hero-carousel-1.jpg";
import hero2 from "../assets/img/hero-carousel/hero-carousel-2.jpg";
import hero3 from "../assets/img/hero-carousel/hero-carousel-3.jpg";
import hero4 from "../assets/img/hero-carousel/hero-carousel-4.jpg";
import ServiciosCards from "../components/ServiciosCards";

function Inicio() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <img
                  src={logoMone}
                  alt="Logo de MONE"
                  data-aos="fade-down"
                  className="logo-mone"
                  loading="eager"
                />
                <p data-aos="fade-up">
                  Nos especializamos en ofrecer soluciones integrales para
                  proyectos de construcción, brindando calidad, eficiencia y
                  compromiso en cada obra. Nuestro equipo de expertos trabaja
                  con las mejores técnicas y materiales para garantizar
                  resultados que superen las expectativas de nuestros clientes.
                </p>
                <Link
                  to="/nosotros"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="btn-get-started"
                >
                  Conócenos
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div
            className="carousel-item active"
            style={{
              backgroundImage: `url(${hero1})`,
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${hero2})`,
            }}
          ></div>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${hero3})`,
            }}
          ></div>
          <div
            className="carousel-item"
            style={{ backgroundImage: `url(${hero4})` }}
          ></div>
        </div>
      </section>

      <main id="main">
        <ServiciosCards />

        <section id="projects" className="projects">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Nuestros productos</h2>
              <p>
                Cuando tu proyecto exige materiales confiables que aseguren la
                solidez y duración de la construcción, MONE es tu aliado ideal.
                Con nuestra variedad de productos de calidad, minimizamos
                riesgos y garantizamos resultados duraderos.
              </p>
            </div>

            <div
              className="portfolio-isotope"
              data-portfolio-filter="*"
              data-portfolio-layout="masonry"
              data-portfolio-sort="original-order"
            >
              <ul
                className="portfolio-flters"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-filter="*" className="filter-active">
                  Todos
                </li>
                <li data-filter=".filter-remodeling">Servicios</li>
                <li data-filter=".filter-construction">Productos</li>
              </ul>

              <ProductosCards />
            </div>
          </div>
        </section>

        <section id="recent-blog-posts" className="recent-blog-posts">
          <div className="container" data-aos="fade-up">
            <div className="section-header text-center">
              <h4>Consulta nuestro</h4>
              <h2>Catálogo de servicios</h2>
              <p>¿Estás listo para llevar tu proyecto al siguiente nivel?</p>
            </div>

            <div className="row gy-5 justify-content-center">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img loading="lazy" width="400"  height="400"src={blog1} className="img-fluid" alt="" />
                    <span className="post-date">CATÁLOGO</span>
                  </div>

                  <div className="post-content d-flex flex-column align-items-center text-center">
                    <p className="post-title">
                      Descubre nuestro catálogo de servicios y encuentra
                      soluciones completas en construcción, diseño y
                      supervisión.
                    </p>
                    <hr />

                    <a
                      href="CATALOGO%20DE%20SERVICIOS%20MONE.pdf"
                      className="readmore stretched-link"
                      target="_blank"
                    >
                      <span>
                        ¡Haz clic y comienza a construir el futuro hoy!
                      </span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Inicio;