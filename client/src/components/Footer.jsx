import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-4">
      <div className="container text-center">
        <p className="small mb-2">Follow us:</p>
        <div className="d-flex justify-content-center gap-4 mb-3 fs-5">
          <a
            href="https://facebook.com/TheCityofMango24"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://instagram.com/TheCityofMango24"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://wa.me/8801608525387"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
        <p className="text-white-50 small mt-2">
          © 2025 The City of Mango. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
