import fondo from "../assets/img/constructions-1.jpg";

function Terminos() {
  return (
    <main id="main">
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2 className="section-header">Términos y Condiciones</h2>
        </div>
      </div>

      <section id="terms" className="terms section-bg">
        <div className="container" data-aos="fade-up">
          <div className="content">
            <h3 className="">AVISO DE PRIVACIDAD INTEGRAL</h3>
            <p>
              El presente Aviso de Privacidad se emite en cumplimiento de la Ley
              Federal de Protección de Datos Personales en Posesión de los
              Particulares. El responsable del tratamiento de la información es
              quien administra el presente sitio web, con correo electrónico de
              contacto moneinmobiliaria0@gmail.com, es responsable del uso y
              protección de la información que se genera durante la navegación
              en el presente sitio web, y al respecto informa lo siguiente:
            </p>

            <h3>I. Identidad y domicilio del responsable</h3>
            <p>
              El responsable es el responsable del tratamiento de la información
              generada por el uso de este sitio web. Cualquier asunto
              relacionado con el presente Aviso de Privacidad podrá atenderse a
              través del correo electrónico: <br /> moneinmobiliaria0@gmail.com
            </p>

            <h3>II. Datos personales que se recaban</h3>
            <p>
              El presente sitio web no recaba datos personales identificables de
              los usuarios. Únicamente se obtiene información relacionada con
              acciones de navegación, de manera automática, mediante
              herramientas de análisis web, particularmente Google Analytics,
              tales como:
              <ul>
                <li> Páginas visitadas</li>
                <li> Tiempo de permanencia</li>
                <li> Tipo de dispositivo y navegador</li>
                <li> Ubicación aproximada (país o ciudad)</li>
              </ul>
              Dicha información no permite identificar de manera directa a los
              usuarios.
            </p>

            <h3>III. Finalidades del tratamiento de la información</h3>
            <p>
              La información de navegación recabada se utiliza exclusivamente
              para las siguientes finalidades:
              <ul>
                <li> Analizar el uso y funcionamiento del sitio web</li>
                <li> Generar estadísticas de navegación</li>
                <li> Mejorar el contenido, diseño y experiencia del usuario</li>
                <li>
                  En ningún caso se utilizará la información con fines
                  publicitarios personalizados, comerciales o de prospección
                  directa.
                </li>
              </ul>
            </p>

            <h3>IV. Transferencia de datos</h3>
            <p>
              El responsable no transfiere, comparte ni comercializa información
              con terceros. La información recabada mediante Google Analytics es
              tratada conforme a las políticas de privacidad y condiciones de
              uso de Google, sin que nuestra empresa tenga acceso a datos
              personales identificables.
            </p>

            <h3>
              V. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
            </h3>
            <p>
              De conformidad con la LFPDPPP, los titulares tienen derecho a
              Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
              datos personales. No obstante, debido a que este sitio web no
              recaba datos personales identificables, el ejercicio de los
              derechos ARCO se limita a solicitudes de información o
              aclaraciones relacionadas con el presente Aviso de Privacidad.
              <br />
              moneinmobiliaria0@gmail.com
            </p>

            <h3>VI. Uso de cookies y tecnologías de rastreo</h3>
            <p>
              El sitio web utiliza cookies y tecnologías similares a través de
              Google Analytics, con la finalidad de obtener información
              estadística sobre la navegación de los usuarios. El usuario puede
              configurar su navegador para bloquear o eliminar las cookies; sin
              embargo, esto podría afectar el correcto funcionamiento del sitio.
            </p>

            <h3>VII. Medidas de seguridad</h3>
            <p>
              El responsable implementa medidas de seguridad técnicas razonables
              para proteger la información de navegación generada en el sitio
              web, a fin de evitar su pérdida, uso indebido, acceso no
              autorizado o alteración.
            </p>

            <h3>VIII. Créditos de iconos y recursos gráficos</h3>
            <p>
              Algunos iconos y recursos gráficos utilizados en este sitio web
              son propiedad de sus respectivos autores y se emplean bajo
              licencia gratuita, el sistema es impulsado y creado por presta
              shop, cumpliendo con los términos de uso correspondientes:
              Asimismo, el sitio utiliza imágenes de referencia obtenidas de
              fuentes públicas con fines ilustrativos e informativos. El
              desarrollo de este sitio web ha sido realizado con el apoyo de
              Teamwagon. Algunas imágenes utilizadas en este sitio han sido
              extraídas de Freepik.
            </p>
            <h3>IX. Modificaciones al Aviso de Privacidad</h3>
            <p>
              El responsable se reserva el derecho de realizar modificaciones o
              actualizaciones al presente Aviso de Privacidad en cualquier
              momento. Las modificaciones estarán disponibles en esta misma
              sección del sitio web y entrarán en vigor a partir de su
              publicación.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Terminos;
