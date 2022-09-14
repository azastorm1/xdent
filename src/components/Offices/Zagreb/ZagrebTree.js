import React from "react";
import "./Zagreb.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const ZagrebTree = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="zagreb">
          <h1>ЗАГРЕБ</h1>
        </div>
        <div className="Zagrebfeatures">
          <NavLink to="/zagrebCenter">Центр</NavLink>
          <div className="border"></div>
          <NavLink to="/maksimir">Максимир</NavLink>
          <div className="border"></div>
          <NavLink to="/zagrebTree">Вишневое дерево</NavLink>
          <div className="border"></div>
          <NavLink to="/newZagreb">Новый загреб</NavLink>
        </div>
        <hr />
        <div className="mainzagreb">
          <div className="zagreb-info">
            <h3 className="zagrebh-h">ЗАГРЕБ – ТРЕШНЕВКА</h3>
            <div className="riverphone">
              <FontAwesomeIcon
                icon={faPhone}
                id="phone"
                className="fa-2x"
              ></FontAwesomeIcon>
              <p>
                телефон:{" "}
                <span>
                  <a href="tel: 01/ 234 42 32" className="rPhone">
                    {" "}
                    01/ 234 42 32
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
              <p>Озальская 13, 10000 Загреб</p>
            </div>
            <div className="riveremail">
              <FontAwesomeIcon
                icon={faEnvelope}
                id="envelope"
                className="fa-2x"
              ></FontAwesomeIcon>
              <a href="mailto: xdentozaljska@gmail.com">
                xdentozaljska@gmail.com
              </a>
            </div>
            <div id="ztime" className="rivertime">
              <h6>Время работы - Озальска</h6>
              <p id="time-p">В рабочие дни: 8:00-20:00</p>
              <p>Суббота: 9:00-13:00</p>
            </div>
          </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.5870797881867!2d15.949366315084365!3d45.79949961902887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7b9304a769f%3A0xcd82bfc491f17342!2sZubni%20rendgen%20-%20X-Dent%20Zagreb%20-%20Tre%C5%A1njevka!5e0!3m2!1sru!2s!4v1659271379093!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ZagrebTree;
