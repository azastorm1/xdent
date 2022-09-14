import React from "react";
import slide1 from "./slide1.png";
import slide2 from "./slide2.png";
import zagreb from "./zagreb.png";
import split from "./split.png";
import reka from "./reka.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="slide1-text">
                    <h1>
                      Морита Аккуитомо <br /> 170
                    </h1>
                    <hr id="hr" />
                    <p>
                      Мы используем самые современные <br /> технологии,
                      благодаря чему вы сможете <br /> получить максимально
                      качественное <br /> изображение в короткие сроки.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={slide1} class="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="slide1-text">
                    <h1>КаВо ОП 3Д Про</h1>
                    <hr id="hr" />
                    <p>
                      Мы используем самые современные <br /> технологии,
                      благодаря чему вы сможете <br /> получить максимально
                      качественное <br /> изображение в короткие сроки.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={slide2} class="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div id="cards" className="conatiner">
          <div className="row">
            <div className="col-md-4">
              <div className="animation-card">
                <figure className="carda">
                  <img src={zagreb} alt="" />
                  <figcaption>
                    <div className="container">
                      <Link to="/zagrebCenter">
                        <div className="center">
                          <h1>Загреб</h1>
                          <hr className="hrwhite" />
                          <h4>ЦЕНТР</h4>
                          <div className="f-loc">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <h6>Хебрангова 26</h6>
                          </div>
                          <div className="f-loc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h6>01/485 - 4608</h6>
                          </div>
                        </div>
                      </Link>
                      <hr className="hrwhite" />
                      <Link to="/maksimir">
                        <div className="center">
                          <h4>МАКСИМИР</h4>
                          <div className="f-loc">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <h6>Максимирская 65</h6>
                          </div>
                          <div className="f-loc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h6>01/481 - 5401</h6>
                          </div>
                        </div>
                      </Link>
                      <hr className="hrwhite" />
                      <Link to="/zagrebTree">
                        <div className="center">
                          <h4>ВИШНЕВОЕ ДЕРЕВО</h4>
                          <div className="f-loc">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <h6>Озальска 13</h6>
                          </div>
                          <div className="f-loc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h6>01/234 - 4232</h6>
                          </div>
                        </div>
                      </Link>
                      <hr className="hrwhite" />
                      <Link to="/newZagreb">
                        <div className="center">
                          <h4>НОВЫЙ ЗАГРЕБ</h4>
                          <div className="f-loc">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <h6>Стонска 1</h6>
                          </div>
                          <div className="f-loc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h6>01/481 - 5395</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md-4">
              <div className="animation-card">
                <Link to="/river">
                  <figure className="carda">
                    <img src={split} alt="" />
                    <figcaption>
                      <div className="reka">
                        <h1>Река</h1>
                        <div className="f-loc">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                          ></FontAwesomeIcon>
                          <h6>Хебрангова 26</h6>
                        </div>
                        <div className="f-loc">
                          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                          <h6>01/485 - 4608</h6>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="animation-card">
                <figure className="carda">
                  <img src={reka} alt="" />
                  <figcaption>
                    <div className="container">
                      <Link to="/splitPark">
                        <div className="center">
                          <h1>Расколоть</h1>
                          <hr className="hrwhite" />
                          <h4>МОЛОДЕЖНЫЙ ПАРК</h4>
                          <div className="f-loc">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <h6>ВМС Хорватии 1i</h6>
                          </div>
                          <div className="f-loc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h6>021 / 771 - 959</h6>
                          </div>
                        </div>
                      </Link>
                      <hr className="hrwhite" />
                      <Link to="/splitPolica">
                        <div className="center">
                          <h4>ПОЛИЦА</h4>
                          <div className="f-loc">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                            ></FontAwesomeIcon>
                            <h6>Поличка цеста 19</h6>
                          </div>
                          <div className="f-loc">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h6>021 / 370 - 235</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
