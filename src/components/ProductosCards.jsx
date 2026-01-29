import remodeling1 from "../assets/img/projects/remodeling-1.png";
import remodeling3 from "../assets/img/projects/remodeling-3.png";
import construction2 from "../assets/img/projects/construction-2.png";
import construction1 from "../assets/img/projects/construction-1.jpg";
import repairs1 from "../assets/img/projects/repairs-1.png";
import design1 from "../assets/img/projects/design-1.png";
import construction3 from "../assets/img/projects/construction-3.jpg";

function ProductosCards() {
  return (
    <div
      className="row gy-4 portfolio-container"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img src={construction1} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Proyectos de construccion</h4>
            <p>
              Consutrucción diseño y supervisión de obras, para sector publico y
              privado
            </p>
            <a
              href={construction1}
              title="Remodeling 1"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img src={remodeling1} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Productos para construcción</h4>
            <p>
              Cemento y concreto los materiales de construcción por excelencia
            </p>
            <a
              href={remodeling1}
              title="Construction 1"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img src={repairs1} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>construcción</h4>
            <p>Varilla corrugada y varilla T-6000</p>
            <a
              href={repairs1}
              title="Repairs 1"
              data-gallery="portfolio-gallery-repairs"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img src={design1} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Aluminio</h4>
            <p>Lamina de aluminio en hoja antiderrapante y disco</p>
            <a
              href={design1}
              title="Repairs 1"
              data-gallery="portfolio-gallery-book"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img src={construction3} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>urbanización</h4>
            <p>Fabricación y urbanización de toda clase de predios</p>
            <a
              href={construction3}
              title="Remodeling 2"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
        <div className="portfolio-content h-100">
          <img src={construction2} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>Soporte estructural</h4>
            <p>
              Castillo en hoja o prefabricado, malla electrosoldada, elementos
              de calidad que cumplen las normas internacionales de
              consutrucción.
            </p>
            <a
              href={construction2}
              title="Construction 2"
              data-gallery="portfolio-gallery-construction"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
        <div className="portfolio-content h-100">
          <img src={remodeling3} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>enagenación de bienes</h4>
            <p>compra venta y aquisición de maquila </p>
            <a
              href={remodeling3}
              title="Remodeling 3"
              data-gallery="portfolio-gallery-remodeling"
              className="glightbox preview-link"
            >
              <i className="bi bi-zoom-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosCards;
