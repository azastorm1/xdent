import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>О НАС</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="about-p">
              <p>
                Dental X-Dent — центр с многолетним опытом работы в области
                стоматологической радиологии (с 1992 года). С самыми
                современными устройствами и высококвалифицированными
                врачами-радиологами мы постараемся предоставить вам услуги,
                которых у вас никогда не было. В современно оборудованных
                помещениях наших центров в Хорватии мы гарантируем вам
                профессиональное и быстрое обслуживание.
                <br />
                <br />
                Посетите нас в наших центрах в Загребе, Риеке и Сплите, и если у
                вас есть вопросы о наших услугах или вам нужна информация, не
                стесняйтесь обращаться к нам.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="message">
              <h6>
                <NavLink to="/contact">
                  Свяжитесь с нами
                  <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
                </NavLink>
              </h6>
              <img
                src="https://x-dent.hr/wp-content/uploads/2018/06/onama1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


