import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Rivermain.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const RiverContact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="river">
          <h1>РЕКА</h1>
        </div>
        <div className="features">
          <NavLink to="/riverKontakt">КОНТАКТ</NavLink>
          <div className="border"></div>
          <NavLink to="/riverPrice">ПРАЙС-ЛИСТ</NavLink>
          <div className="border"></div>
          <NavLink to="/riverGallery">ГАЛЕРЕЯ</NavLink>
        </div>
        <hr />
        <div className="rivercontact">
          <img
            src="https://x-dent.hr/wp-content/uploads/2018/06/lokacija-2.jpg"
            alt="Река"
            title="Река"
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <h6 className="rh">Река</h6>
            <div className="riverphone">
              <FontAwesomeIcon
                icon={faPhone}
                id="phone"
                className="fa-1x"
              ></FontAwesomeIcon>
              <p>
                телефон:{" "}
                <span>
                  <a href="tel: 051/498 190" className="rPhone">
                    {" "}
                    051/498 190
                  </a>
                </span>
              </p>
            </div>
            <div className="riverloc">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="fa-1x"
                id="loc"
              ></FontAwesomeIcon>
              <p>Пролаз Мария К. Козулич 3, 51000 Риека</p>
            </div>
            <div className="riveremail">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fa-1x"
                id="envelope"
              ></FontAwesomeIcon>
              <a href="mailto: rijeka@x-dent.hr">rijeka@x-dent.hr</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rivertime">
              <h6>Рабочее время</h6>
              <p id="time-p">В рабочие дни: 8:00-20:00</p>
              <p>Суббота: 8:00-13:00</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="river-map">
              <div className="message">
                <h6>
                  <NavLink to="/contact">
                    Свяжитесь с нами
                    <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
                  </NavLink>
                </h6>
              </div>
              <iframe id="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.941113970433!2d14.436597115067016!3d45.32981155042251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a11fb98c6ff7%3A0x89f93ba8dea5faf3!2zcHJvLiBNYXJpamUgSy4gS296dWxpxIcsIDUxMDAwLCBSaWpla2EsINCl0L7RgNCy0LDRgtC40Y8!5e0!3m2!1sru!2s!4v1659270971708!5m2!1sru!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RiverContact;
