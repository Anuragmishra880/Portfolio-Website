import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-black navbar-dark text-white text-center py-5 ">
        <p className="small mb-3 fw-light">
          © 2026 Anurag Kumar | All Right Reserved.
        </p>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="https://github.com/Anuragmishra880/" target="_blank">
            GitHub <i class="bi bi-arrow-up-right"></i>
          </a>
          <a
            href="https://linkedin.com/in/anurag-kumar-31b51135a"
            target="_blank"
          >
            LinkedIn <i class="bi bi-arrow-up-right"></i>
          </a>
        
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anuragmishra9821497411@gmail.com"
            target="_blank"
          >
            Email<i class="bi bi-arrow-up-right"></i>
          </a>
          <a
            href="https://wa.me/919821497411?text=Hello%20Anurag"
            target="_blank"
          >
            WhatsApp <i class="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
