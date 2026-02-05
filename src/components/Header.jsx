import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", mobileNav);

    return () => {
      document.body.classList.remove("mobile-nav-active");
    };
  }, [mobileNav]);

  const toggleMobileNav = () => {
    setMobileNav(prev => !prev);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
          <h1>M O N E<span>.</span></h1>
        </Link>

        <i
          className={`mobile-nav-toggle mobile-nav-show bi bi-list ${mobileNav ? "d-none" : ""}`}
          onClick={toggleMobileNav}
        ></i>

        <i
          className={`mobile-nav-toggle mobile-nav-hide bi bi-x ${!mobileNav ? "d-none" : ""}`}
          onClick={toggleMobileNav}
        ></i>

        <Nav closeMobileNav={closeMobileNav} />
      </div>
    </header>
  );
}

export default Header;
