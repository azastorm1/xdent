import React from "react";
import "./Registration.css";
import { signInWithGoogle } from "../firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

const Registartion = () => {
  return (
    <div className="registration">
      <div className="container">
        <div className="register">
          <div className="reg">
            <img
              src="https://x-dent.hr/wp-content/uploads/2021/06/xdent-logo.svg"
              alt=""
            />
            <FontAwesomeIcon
              id="sign"
              onClick={signInWithGoogle}
              icon={faSignIn}
            />
          </div>
        </div>
        <div id="reg" className="row">
          <div className="col-md-3">
            <div className="card-first">
              <img
                className="f-png"
                src="https://x-dent.hr/wp-content/uploads/2022/05/SPLITNOVOSTI.png"
                alt=""
              />
              <h4>НАШИ УСЛУГИ В СПЛИТЕ ТЕПЕРЬ ДОСТУПНЫ В ДВУХ МЕСТАХ!</h4>
              <p>19.05.2022</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-second">
              <img
                className="f-png"
                src="https://x-dent.hr/wp-content/uploads/2022/05/ZAGREBNOVI.png"
                alt=""
              />
              <h4>ОТНЫНЕ В ЧЕТЫРЕХ МЕСТАХ В ЗАГРЕБЕ!</h4>
              <p>19.05.2022</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-third">
              <img
                className="f-png"
                src="https://x-dent.hr/wp-content/uploads/2021/05/xdentnz.jpg"
                alt=""
              />
              <h4>НОВЫЙ ОФИС В НОВОМ ЗАГРЕБЕ</h4>
              <p>05.13.2021</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-fourth">
              <img
                className="f-png"
                src="https://x-dent.hr/wp-content/uploads/2021/01/rijeka_lokacija.jpg"
                alt=""
              />
              <h4>С 25.01.2021. МЫ НАХОДИМСЯ В НОВОМ МЕСТЕ В РИЕКЕ</h4>
              <p>21.01.2021</p>
            </div>
          </div>
        </div>
        <div className="reg-btn">
          <button
            type="button"
            className="btn btn-danger"
            onClick={signInWithGoogle}
          >
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registartion;
