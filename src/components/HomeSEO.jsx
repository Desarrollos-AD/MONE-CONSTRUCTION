import { Helmet } from "react-helmet-async";

function HomeSEO() {
  return (
    <Helmet>
      {/* Título */}
      <title>MONE Construcción | Construcción y Proyectos en México</title>

      {/* Descripción */}
      <meta
        name="description"
        content="MONE Construcción es una empresa especializada en proyectos de construcción, obra civil, remodelaciones y soluciones integrales para el sector residencial, comercial e industrial en México."
      />

      {/* Keywords (ya no son tan importantes, pero ayudan un poco) */}
      <meta
        name="keywords"
        content="MONE Construcción, construcción en México, obra civil, remodelaciones, proyectos arquitectónicos, empresa constructora"
      />

      {/* Autor */}
      <meta name="author" content="MONE Construcción" />

      {/* Indexación */}
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href="https://moneconstruccion.com.mx/" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="MONE Construcción | Proyectos de Construcción en México" />
      <meta
        property="og:description"
        content="Empresa constructora especializada en obra civil, remodelaciones y proyectos arquitectónicos de alta calidad en México."
      />
      <meta property="og:url" content="https://moneconstruccion.com.mx/" />
      <meta property="og:site_name" content="MONE Construcción" />
      <meta property="og:image" content="https://moneconstruccion.com.mx/og-image.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MONE Construcción | Construcción Profesional" />
      <meta
        name="twitter:description"
        content="Soluciones integrales en construcción, obra civil y remodelaciones en México."
      />
      <meta name="twitter:image" content="https://moneconstruccion.com.mx/og-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}

export default HomeSEO;
