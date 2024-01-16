import React from "react";
import "../sass/_footer.scss";
import academylogo from "../assets/logo.jpg";

function Footer() {
  return (
    <>
      {/* Absolute */}

      {/* Absolute / */}
      <section className="contact-area" id="contact">
        <div className="col-lg-6 offset-lg-3">
          <div className="contact-content text-center">
            <div className="logo_parent">
              <div className="logo_and_text">
                <a href="#">
                  <img src={academylogo} alt="logo" data-aos="fade-right" />
                </a>
                <h3 data-aos="fade-right">Broadway Academy</h3>
              </div>
              <button className="kursga-yozilish" data-aos="fade-up">
                <a href="#kursga-yozilish">Kursga yozilish</a>
              </button>
            </div>

            <a href="tel:+998998082888" title="Call" data-aos="fade-right">
              +998 99 808-28-88
            </a>
            <div className="contact-social">
              <ul>
                <li data-aos="fade-right">
                  <a
                    className="hover-target"
                    href="https://t.me/ZaynabKasimova"
                    target="_blank"
                  >
                    <i class="bx bxl-telegram"></i>
                  </a>
                </li>
                <li data-aos="fade-right">
                  <a
                    className="hover-target"
                    href="https://www.instagram.com/po_russkii/"
                    target="_blank"
                  >
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2024 <span>Broadway Academy</span>
        </p>
        <p>Xizmatlar litsenziyalangan</p>
      </footer>
    </>
  );
}

export default Footer;
