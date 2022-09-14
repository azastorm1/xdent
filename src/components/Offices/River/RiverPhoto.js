import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Rivermain.css";

const RiverPhoto = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="river">
          <h1>РЕКА</h1>
        </div>
        <div className="features">
          <NavLink to="/riverKontakt">
            КОНТАКТ
          </NavLink>
          <div className="border"></div>
          <NavLink to="/riverPrice">ПРАЙС-ЛИСТ</NavLink>
          <div className="border"></div>
          <NavLink to="/riverGallery">ГАЛЕРЕЯ</NavLink>
        </div>
        <hr />
        <div className="row" id="riverphoto">
          <div className="col-md-2">
            <img src="https://x-dent.hr/wp-content/uploads/2018/06/20210126_163553-150x150.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="https://x-dent.hr/wp-content/uploads/2018/06/rijeka1-2-150x150.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="https://x-dent.hr/wp-content/uploads/2018/06/rijeka1-1-min-150x150.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="https://x-dent.hr/wp-content/uploads/2018/06/rijeka1-4-150x150.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="https://x-dent.hr/wp-content/uploads/2018/06/rijeka1-3-150x150.jpg" alt="" />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RiverPhoto;
