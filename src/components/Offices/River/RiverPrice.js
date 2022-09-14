import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./RiverPrice.css";

const RiverPrice = () => {
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
        <div className="row">
          <div className="col-md-6">
            <div className="table-twod">
              <h6 id="table-twod">2D ЗАПИСЬ</h6>
              <div id="table-white">
                <p>ЦИФРОВОЙ ОРТОПАН</p>
                <p>180,00 хорватских кун</p>
              </div>
              <div className="table-smoke">
                <p>ЦИФРОВОЙ ОРТОПАН 1:1</p>
                <p>180,00 хорватских кун</p>
              </div>
              <div className="table-white">
                <p>ЦИФРОВЫЕ ВНУТРОРОТНЫЕ ЗАПИСИ</p>
                <p>70,00 хорватских кун</p>
              </div>
              <div className="table-smoke">
                <p>ЦИФРОВЫЕ ЗАПИСИ ЗАКУПОРНЫХ</p>
                <p>70,00 хорватских кун</p>
              </div>
              <div className="table-white">
                <p>ЦИФРОВОЙ ТЕЛЕРЕНТГЕН ЛЛ</p>
                <p>190,00 хорватских кун</p>
              </div>
              <div className="table-smoke">
                <p>ЦИФРОВОЙ ТЕЛЕРЕНТКСЕН ПА</p>
                <p>190,00 хорватских кун</p>
              </div>
              <div className="table-white">
                <p>ПАЛУХИ ЧЕЛЮСТНЫХ ПАЗУХОВ</p>
                <p>180,00 хорватских кун</p>
              </div>
              <div className="table-smoke">
                <p>ЦИФРОВЫЕ ТЕМПЕРАТУРНЫЕ СОЕДИНЕНИЯ</p>
                <p>180,00 хорватских кун</p>
              </div>
            </div>
            <div className="table-benefits">
              <h6 id="table-benefits">ОСОБЫЕ ПРЕИМУЩЕСТВА</h6>
              <div id="table-white">
                <p>CONTROL DIGITAL ORTHOPAN (в течение 6 месяцев)</p>
                <p>90,00 хорватских кун</p>
              </div>
              <div className="table-smoke">
                <p>КОНТРОЛЬ 3D КЛКТ ЗА ПОЛОВИНУ ЦЕНЫ (в течение 6 месяцев)</p>
              </div>
              <div className="table-white">
                <p>ЦИФРОВОЙ ТЕЛЕРЕНТГЕН И ЦИФРОВОЙ ОРТОПАН</p>
                <p>290,00 хорватских кун</p>
              </div>
              <div className="table-smoke">
                <p>ЦИФРОВОЙ ОРТОПАН ДЛЯ ДЕТЕЙ</p>
                <p>150,00 хорватских кун</p>
              </div>
              <div className="table-white">
                <p>БЕСПЛАТНЫЙ ОРТОПАН С 3D КЛКТ ОДНОЙ ИЛИ ОБЕИХ ЧЕЛЮСТЕЙ</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="table-twod">
              <h6 id="table-twod">3D ЗАПИСЬ</h6>
              <div id="table-white">
                <p>ВИД ОДНОГО ЗУБА</p>
                <p>200,00 хорватских кун</p>
              </div>
              <div id='C' className="table-smoke">
                <p>ОТОБРАЖЕНИЕ СЕКСТАНА</p>
                <p>350,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-white">
                <p>ВИД ВЕРХНЕЙ ЧЕЛЮСТИ</p>
                <p>550,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-smoke">
                <p>ВИД НИЖНЕЙ ЧЕЛЮСТИ</p>
                <p>550,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-white">
                <p>ВИД ОБЕИХ ЧЕЛЮСТЕЙ</p>
                <p>800,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-smoke">
                <p>ВИД ОДНОГО ЧЕЛЮСТНОГО СОЕДИНЕНИЯ</p>
                <p>350,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-white">
                <p>ВИД ОБЕИХ ЧЕЛЮСТНЫХ СОЕДИНЕНИЙ</p>
                <p>550,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-smoke">
                <p>ОТОБРАЖЕНИЕ СИНУСА	</p>
                <p>550,00 хорватских кун</p>
              </div>
              <div id='threed-table' className="table-white">
                <p>ОБСЛЕДОВАНИЕ ORL: СИНУСЫ, НОС, ПИРАМИДА, ВИСОЧНЫЕ КОСТИ, УХО, сосцевидный отросток</p>
                <p>800,00 хорватских кун</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RiverPrice;
