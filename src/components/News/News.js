import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./News.css";

const News = () => {
  return (
    <div>
      <div className="container">
        <div className="news">
          <h1>НОВОСТИ</h1>
          <div className="row">
            <div className="col-md-3">
              <Link to="/card-first">
                {" "}
                <div className="card-first">
                  <img
                    className="f-png"
                    src="https://x-dent.hr/wp-content/uploads/2022/05/SPLITNOVOSTI.png"
                    alt=""
                  />
                  <h4>НАШИ УСЛУГИ В СПЛИТЕ ТЕПЕРЬ ДОСТУПНЫ В ДВУХ МЕСТАХ!</h4>
                  <p>19.05.2022</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/card-second">
                {" "}
                  <div className="card-second">
                    <img
                      className="f-png"
                      src="https://x-dent.hr/wp-content/uploads/2022/05/ZAGREBNOVI.png"
                      alt=""
                    />
                    <h4>ОТНЫНЕ В ЧЕТЫРЕХ МЕСТАХ В ЗАГРЕБЕ!</h4>
                    <p>19.05.2022</p>
                  </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/card-third">
                {" "}
                <div className="card-third">
                  <img
                    className="f-png"
                    src="https://x-dent.hr/wp-content/uploads/2021/05/xdentnz.jpg"
                    alt=""
                  />
                  <h4>НОВЫЙ ОФИС В НОВОМ ЗАГРЕБЕ</h4>
                  <p>05.13.2021</p>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/card-fourth">
                {" "}
                <div className="card-fourth">
                  <img
                    className="f-png"
                    src="https://x-dent.hr/wp-content/uploads/2021/01/rijeka_lokacija.jpg"
                    alt=""
                  />
                  <h4>С 25.01.2021. МЫ НАХОДИМСЯ В НОВОМ МЕСТЕ В РИЕКЕ</h4>
                  <p>21.01.2021</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
