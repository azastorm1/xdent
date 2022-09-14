import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Split";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Split = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="river">
          <h1>РАСКОЛОТЬ</h1>
        </div>
        <div className="features">
          <NavLink to="/splitPark" className="nav-link active">
            МОЛОДЕЖНЫЙ ПАРК
          </NavLink>
          <div className="border"></div>
          <NavLink to="/splitPolica">ПОЛИЦА</NavLink>
        </div>
        <hr />
        <div className="row">
          <h3 className="zagrebh-h">МОЛОДЕЖНЫЙ ПАРК</h3>
          <div className="col-md-4">
            <div className="riverphone">
              <FontAwesomeIcon
                icon={faPhone}
                id="phone"
                className="fa-2x"
              ></FontAwesomeIcon>
              <p>
                телефон:{" "}
                <span>
                  <a href="tel: 021/771 959" className="rPhone">
                    {" "}
                    021/771 959
                  </a>
                </span>
              </p>
            </div>
            <div className="riverloc">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="fa-2x"
                id="loc"
              ></FontAwesomeIcon>
              <p> ВМС Хорватии 1i, 21000 Сплит</p>
            </div>
            <div className="riveremail">
              <FontAwesomeIcon
                icon={faEnvelope}
                id="envelope"
                className="fa-2x"
              ></FontAwesomeIcon>
              <a href="mailto: split@x-dent.hr">split@x-dent.hr</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rivertime">
              <h6>Рабочее время</h6>
              <p id="time-p">В рабочие дни: 8:00-20:00</p>
              <p>Суббота: 8:00-12:00</p>
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
              <iframe
                id="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.265195774699!2d16.44177961500129!3d43.517662269203306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e090b631323%3A0x39d2dcada5ca49f4!2sZubni%20rendgen%20-%20X-Dent%20Split!5e0!3m2!1sru!2s!4v1659270488428!5m2!1sru!2s"
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

export default Split;
