import "../components/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content position-relative">
        <div className="container">
          <div className="footer__column">
            <div className="">
              <div className="footer-info">
                <h3>MONE</h3>
                <p>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:moneinmobiliaria0@gmail.com">
                    moneinmobiliaria0@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className=" footer-links">
              <h4>Enlaces</h4>
              <ul>
                <li>
                  <Link to="/">MONE</Link>
                </li>
                <li>
                  <Link to="/terminos">Aviso legal y términos</Link>
                </li>
              </ul>
            </div>

            <div className=" footer-links">
              <h4>Sobre nuestros servicios</h4>
              <ul>
                <li>
                  <a href="/CATALOGO_DE_SERVICIOS_MONE.pdf" target="_blank">
                    Catálogo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-legal text-center position-relative">
            <div className="container">
              <div className="copyright">
                Marca registrada
                <strong>
                  <span>MONE &trade;</span>
                </strong>
                . Todos los derechos Reservados
              </div>
              <div className="credits">
                <small>
                  {" "}
                  <small>
                    <small>
                      Diseño{" "}
                      <a
                        href="https://bootstrapmade.com/"
                        style={{
                          color: "#a9a9a9",
                        }}
                      >
                        BootstrapMade
                      </a>{" "}
                      Distribución{" "}
                      <a
                        href="https://themewagon.com"
                        style={{ color: "#a9a9a9" }}
                      >
                        ThemeWagon
                      </a>
                    </small>
                  </small>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
