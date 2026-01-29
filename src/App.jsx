import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import Header from "./components/Header";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import Isotope from "isotope-layout";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function App() {
  useEffect(() => {
    "use strict";

    /* =====================
     Preloader
  ====================== */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /* =====================
     Mobile nav toggle
  ====================== */
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");

    const mobileNavToggle = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavShow?.classList.toggle("d-none");
      mobileNavHide?.classList.toggle("d-none");
    };

    document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        mobileNavToggle();
      });
    });

    /* Hide mobile nav on hash links */
    document.querySelectorAll("#navbar a").forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;

      link.addEventListener("click", () => {
        if (document.body.classList.contains("mobile-nav-active")) {
          mobileNavToggle();
        }
      });
    });

    /* Dropdowns */
    document.querySelectorAll(".navbar .dropdown > a").forEach((el) => {
      el.addEventListener("click", function (e) {
        if (document.body.classList.contains("mobile-nav-active")) {
          e.preventDefault();
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("dropdown-active");

          const indicator = this.querySelector(".dropdown-indicator");
          indicator?.classList.toggle("bi-chevron-up");
          indicator?.classList.toggle("bi-chevron-down");
        }
      });
    });

    /* =====================
     Scroll top
  ====================== */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const toggleScrollTop = () => {
        scrollTop.classList.toggle("active", window.scrollY > 100);
      };

      window.addEventListener("scroll", toggleScrollTop);
      window.addEventListener("load", toggleScrollTop);

      scrollTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* =====================
     GLightbox
  ====================== */
    GLightbox({ selector: ".glightbox" });

    /* =====================
     Isotope
  ====================== */
    const portfolioIsotopeEl = document.querySelector(".portfolio-isotope");

    if (portfolioIsotopeEl) {
      const portfolioIsotope = new Isotope(".portfolio-container", {
        itemSelector: ".portfolio-item",
        layoutMode: portfolioIsotopeEl.dataset.portfolioLayout || "masonry",
        filter: portfolioIsotopeEl.dataset.portfolioFilter || "*",
        sortBy: portfolioIsotopeEl.dataset.portfolioSort || "original-order",
      });

      document.querySelectorAll(".portfolio-flters li").forEach((el) => {
        el.addEventListener("click", () => {
          document
            .querySelector(".filter-active")
            ?.classList.remove("filter-active");
          el.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: el.dataset.filter,
          });
          AOS.refresh();
        });
      });
    }

    /* =====================
     Swiper
  ====================== */
    new Swiper(".slides-1", {
      speed: 600,
      loop: true,
      autoplay: { delay: 5000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper(".slides-2", {
      speed: 600,
      loop: true,
      autoplay: { delay: 5000 },
      slidesPerView: 2,
      breakpoints: {
        320: { slidesPerView: 1 },
        1200: { slidesPerView: 2 },
      },
    });

    /* =====================
     PureCounter
  ====================== */
    new PureCounter();

    /* =====================
     AOS
  ====================== */
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <a
        href="#"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
