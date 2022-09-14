import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardFirst = () => {
  return (
    <div>
      <div className="container">
        <div className="first-card">
          <h1>НАШИ УСЛУГИ В СПЛИТЕ ТЕПЕРЬ ДОСТУПНЫ В ДВУХ МЕСТАХ!</h1>
          <div className="mainly">
            <img
              src="https://x-dent.hr/wp-content/uploads/2022/05/SPLITNOVOSTI.png"
              alt=""
            />
            <div className="lately-news">
              <p>
                ПОСЛЕДНИЕ
                <span>
                  <h6>СООБЩЕНИЯ</h6>
                </span>
              </p>
              <hr className="card-hr" />
              <div className="card-links">
                <ul>
                  <li>
                    <Link to="/card-first">
                      <p>НАШИ УСЛУГИ В СПЛИТЕ ТЕПЕРЬ ДОСТУПНЫ В ДВУХ МЕСТАХ! 19.05.2022</p>
                    </Link>
                  </li>
                  <hr />
                  <li>
                  <Link to="/card-second">
                      <p>ОТНЫНЕ В ЧЕТЫРЕХ МЕСТАХ В ЗАГРЕБЕ! 19.05.2022</p>
                    </Link>
                  </li>
                  <hr />
                  <li>
                  <Link to="/card-third">
                      <p>НОВЫЙ ОФИС В НОВОМ ЗАГРЕБЕ 13.05.2021</p>
                    </Link>
                  </li>
                  <hr />
                  <li>
                  <Link to="/card-fourth">
                      <p>С 25.01.2021. МЫ НАХОДИМСЯ НА НОВОМ МЕСТЕ В РИЕКЕ</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFirst;
