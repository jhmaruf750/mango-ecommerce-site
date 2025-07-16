import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = ["Home", "About", "Products", "FAQ", "Blog", "Contact"];
  const cartItems = 0;

  const handleCartClick = (e) => {
    e.preventDefault();
    navigate("/order");
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="/"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/logo.jpg"
            alt="Logo"
            style={{ width: "50px", height: "auto" }}
            className="me-2"
          />
          <span className="fw-bold text-success fs-5">The City of Mango</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a className="nav-link" href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <a
                href="/order"
                onClick={handleCartClick}
                className="nav-link position-relative"
              >
                <FaShoppingCart className="me-1" />
                {cartItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
