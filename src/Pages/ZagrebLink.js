import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Zagreb from "../components/Offices/Zagreb/Zagreb";

const ZagrebLink = () => {
  return (
    <div>
      <Navbar />
      <Zagreb />
      <Footer />
    </div>
  );
};

export default ZagrebLink;
