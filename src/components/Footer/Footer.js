import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="footer">
          <div className="footer-img">
            <img
              src="https://x-dent.hr/wp-content/uploads/2020/06/logo-eu.png"
              alt=""
            />
            <a href="https://strukturnifondovi.hr/" target="_blank">
              <img
                src="https://x-dent.hr/wp-content/uploads/2020/06/ESI-logotip_boja_manji.png"
                alt=""
              />
            </a>
            <a href="https://strukturnifondovi.hr/eu-fondovi/esi-fondovi-2014-2020/op-konkurentnost-i-kohezija/" target="_blank">
              <img
                src="https://x-dent.hr/wp-content/uploads/2020/06/OPKK_boja_bez-pozadine_manji.png"
                alt=""
              />
            </a>
          </div>
          <div className="footer-p">
            <p className="footer-p">ВСЕ ПРАВА ЗАЩИЩЕНЫ. © Х -ДЕНТ 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
