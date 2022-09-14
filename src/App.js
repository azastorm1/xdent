import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutLink from "./Pages/AboutLink";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import River from './Pages/River'
import DevicesLink from "./Pages/DevicesLink";
import MediaLink from "./Pages/MediaLink";
import TwoD from "./components/Media/TwoD";
import ThreeD from "./components/Media/ThreeD";
import ContactLink from "./Pages/ContactLink";
import RiverContact from "./components/Offices/River/RiverContact";
import RiverPhoto from "./components/Offices/River/RiverPhoto";
import RiverPrice from "./components/Offices/River/RiverPrice";
import Split from "./components/Offices/Split/Split";
import SplitPolica from "./components/Offices/Split/SplitPolica";
import SplitPark from "./components/Offices/Split/SplitPark";
import ZagrebLink from "./Pages/ZagrebLink";
import ZagrebCenter from "./components/Offices/Zagreb/ZagrebCenter";
import Maksimir from "./components/Offices/Zagreb/Maksimir";
import ZagrebTree from "./components/Offices/Zagreb/ZagrebTree";
import NewZagreb from "./components/Offices/Zagreb/NewZagreb";
import NewsLink from "./Pages/NewsLink";
import CardFirstLink from "./Pages/CardFirstLink";
import CardSecondLink from "./Pages/CardSecondLink";
import CardThirdLink from "./Pages/CardThirdLink";
import CardFourthLink from "./Pages/CardFourthLink";
import RegistartionLink from "./Pages/RegistartionLink";
import firebase from './components/firebase/config'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={user ? <Home user={user} /> : <RegistartionLink />} />
        <Route path="/about" element={<AboutLink />} />
        <Route path='/river' element={<River/>} />
        <Route path="/devices" element={<DevicesLink/>} />
        <Route path="/media" element={<MediaLink />} />
        <Route path="/media/twoD" element={<TwoD /> } />
        <Route path="/media/threeD" element={<ThreeD /> } />
        <Route path="/contact" element={ <ContactLink/>} /> 
        <Route path="/riverKontakt" element={<RiverContact/>} />
        <Route path="/riverGallery" element={<RiverPhoto/>} />
        <Route path="/riverPrice" element={<RiverPrice/>} />
        <Route path="/split" element={<Split/>} />
        <Route path="/splitPark" element={<SplitPark/>} />
        <Route path="/splitPolica" element={<SplitPolica/>} />
        <Route path="/zagreb" element={<ZagrebLink/>} />
        <Route path="/zagrebCenter" element={<ZagrebCenter/>} />
        <Route path="/maksimir" element={<Maksimir/>} />
        <Route path="/zagrebTree" element={<ZagrebTree/>} />
        <Route path="/newZagreb" element={<NewZagreb/>} />
        <Route path="/news" element={<NewsLink/>} />
        <Route path="/card-first" element={<CardFirstLink/>} />
        <Route path="/card-second" element={<CardSecondLink/>} />
        <Route path="/card-third" element={<CardThirdLink/>} />
        <Route path="/card-fourth" element={<CardFourthLink/>} />
      </Routes>
    </div>
  );
}

export default App;
