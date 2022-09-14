import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Media.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar";

const TwoD = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar />
      <div className="media">
        <div className="container">
          <h1>УСЛУГИ</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="d">
                <NavLink id="send-a" to="/media/twoD">2d ЗАПИСЬ</NavLink>
                <div className="border"></div>
                <NavLink id="send-a" to="/media/threeD">3d ЗАПИСЬ</NavLink>
              </div>
              <hr />
              <div className="twoD-p">
                <p>
                  Цифровая двумерная (2D) интраоральная и панорамная
                  рентгенография прочно вошла в повседневную стоматологическую
                  практику за последние 20 лет. Однако 2D-изображения трудно
                  интерпретировать из-за наложения сложных анатомических
                  структур. При измерении мы всегда используем запас прочности,
                  чтобы компенсировать увеличение, вызванное самой техникой
                  записи, и у нас нет информации о ширине (толщине) и точном
                  пространственном положении. Однако мы не собираемся клеветать
                  на технологию, которая была нашей опорой столько лет и которая
                  уже столько раз открывала нам глаза, наоборот, мы думаем, что
                  одно и то же 2D-изображение будет основой диагностики,
                  планирования и контроль в стоматологических кабинетах и ​​его
                  специализированных кабинетах на долгое время.
                </p>
              </div>
              <div className="inside-record">
                <h5>ВНУТРИРОТОВАЯ ЗАПИСЬ</h5>
                <ul>
                  <li>параллельная проекция</li>
                  <li>эксцентрические выступы</li>
                  <li>техника укуса крыла</li>
                  <li>стоматологический статус</li>
                </ul>
                <p>
                  Внутриротовое изображение зуба показывает зуб в натуральную
                  величину с ассоциированным корнем и соседними зубами.
                </p>
              </div>
              <div className="panorama-record">
                <h5>ПАНОРАМНАЯ ЗАПИСЬ</h5>
                <br />
                <h6>Ортопантомограмма</h6>
                <p>
                  Ортопантомограмма – это рентген челюстно-лицевой области,
                  показывающий верхнюю и нижнюю челюсть со всеми зубами, оба
                  челюстных сустава и связанные с ними пазухи.
                </p>
                <br />
                <h6>Визуализация околоносовых пазух</h6>
                <p>
                  Изображение придаточных пазух носа включает пазухи и
                  окружающие их структуры. Их можно записывать в нескольких
                  разных проекциях, при этом классическая задне-передняя запись
                  выполняется по умолчанию.
                </p>
                <br />
                <h6>Височно-нижнечелюстные суставы (латерально-лобные)</h6>
                <p>
                  На фотографии височно-нижнечелюстных суставов отчетливо видны
                  указанные суставы и их взаимоотношения с окружающими костными
                  структурами в разных проекциях. Суставы регистрируют в прямой
                  или боковой проекциях с открытым и закрытым ртом.
                </p>
              </div>
              <div className="special-record">
                <h5>СПЕЦИАЛЬНЫЕ ЗАПИСИ</h5>
                <br />
                <h6>Телерентген (LL-PA)</h6>
                <p>
                  {" "}
                  Телерентгенограмма — изображение головы, которое чаще всего
                  используется в ортодонтической диагностике, показывающее все
                  костные структуры, области и мягкие ткани лица. Запись может
                  производиться в профильной проекции LL и во фронтальной
                  проекции PA.
                </p>
                <h6>Цефалометрическое сканирование (LL-AP)</h6>
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
                <Slider {...settings}>
                  <img
                    src="https://x-dent.hr/wp-content/uploads/2018/06/io1-730x460.jpg"
                    alt=""
                  />
                  <img
                    src="https://x-dent.hr/wp-content/uploads/2018/06/io2-730x460.jpg"
                    alt=""
                  />
                  <img
                    src="https://x-dent.hr/wp-content/uploads/2018/06/io3-730x460.jpg"
                    alt=""
                  />
                  <img
                    src="https://x-dent.hr/wp-content/uploads/2017/12/tele1-730x460.jpg"
                    alt=""
                  />
                  <img
                    src="https://x-dent.hr/wp-content/uploads/2017/12/ortopan-730x460.jpg"
                    alt=""
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TwoD;
