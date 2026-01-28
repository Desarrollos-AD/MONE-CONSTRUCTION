import breadcrumbs from "../assets/img/breadcrumbs-bg.jpg";
import ProductosCards from "../components/ProductosCards";

function Productos() {
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
            <h2>Nuestros productos</h2>
          </div>
        </div>
        <section id="projects" className="projects">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <p>
                Contamos con un portafolio de materiales de construcción y
                componentes estructurales certificados, que incluyen cemento de
                alta resistencia, varilla corrugada, láminas de aluminio y
                elementos de soporte estructural. Cada producto está
                seleccionado bajo criterios de calidad, durabilidad y
                cumplimiento de normas técnicas vigentes para reforzar la
                confiabilidad de su obra.
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
      </main>
    </>
  );
}
export default Productos;
