import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Home from "./Home";
import NotFound from "./NotFound";
import Shoes from "./Shoes";
import Bags from "./Bags";
import Accessories from "./Accessories";
import Cart from "./Cart";
import CardPopUp from "./CardPopUp";

function App() {
  const [dash, setDash] = useState("translate-x-52");
  const [back, setBack] = useState("");

  const menuOpen = () => {
    setDash(dash === "translate-x-52" ? "animate-dash" : "translate-x-52");
    setBack(dash === "translate-x-52" ? "rotate-180" : "");
  };

  return (
    <Router>
      {/* Burger Menu */}
      <div
        className={`${dash} fixed top-0 right-0 flex h-screen md:hidden z-20 drop-shadow-xl`}
      >
        <div
          onClick={menuOpen}
          className={`${back} w-12 h-12 bg-stone-50 flex justify-center  items-center cursor-pointer`}
        >
          <MenuOpenIcon className="scale-150" />
        </div>

        <div className="w-52 -mt-4 right-0 bg-rose-100 flex flex-col justify-around">
          <Link to="/" className="w-auto h-2/6 m-auto">
            <img src="../logo.png" alt="logo" />
          </Link>

          <div className="w-auto h-2/6 flex flex-col justify-around ">
            <Link to="/" className="menu">
              Home
            </Link>
            <Link to="*" className="menu">
              Account
            </Link>
            <Link to="/Shoes" className="menu">
              Shoes
            </Link>
            <Link to="/Bags" className="menu">
              Bags
            </Link>
            <Link to="/Accessories" className="menu">
              Accessories
            </Link>
            <Link to="/Cart" className="menu">
              Cart
            </Link>
            <Link to="/Support" className="menu">
              Support
            </Link>
          </div>

          <div className="flex justify-around items-center w-auto h-2/6">
            <div className="mediaContainer bg-[#4267B2]">
              <FacebookIcon className="scale-125 mediaBtn" />
            </div>
            <div className="mediaContainer bg-[#00acee]">
              <TwitterIcon className="scale-125 mediaBtn" />
            </div>
            <div className="mediaContainer bg-gradient-to-r from-pink-500 to-yellow-500">
              <InstagramIcon className="scale-125 mediaBtn" />
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Bags" element={<Bags />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CardPopUp" element={<CardPopUp />} />
      </Routes>
    </Router>
  );
}

export default App;
