import React from "react";
import "./Navbar.css";
import wallet from "../../Assets/Img/walle.svg";
import not from "../../Assets/Img/not.svg";
import question from "../../Assets/Img/question.svg";
import settings from "../../Assets/Img/set.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-page">
        <span className="navbar-span">
          <h4 className="navbar-name">YaTT SOBIROV JAMSHID DAVRON O‘G‘LI</h4>
          <p className="navbar-number">566800736</p>
        </span>
        <div className="navbar-list">
          <div className="navbar-title">
            <button className="navbar-btn">
              <img src={wallet} alt="" className="navbar-img" />
            </button>
            <span className="navbar-span">
              <h5 className="navbar-subname">Ваш баланс:</h5>
              <h4 className="navbar-sum">150.000 сум</h4>
            </span>
          </div>
          <button className="navbar-button">Активировать тариф</button>
          <button className="navbar-btns">
            <img src={not} alt="" className="navbar-icon" />
          </button>
          <button className="navbar-btns">
            <img src={question} alt="" className="navbar-icon" />
          </button>
          <button className="navbar-btns">
            <img src={settings} alt="" className="navbar-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
