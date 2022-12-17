import React from "react";
import logo from "../../Assets/Img/logo.svg";
import icon from "../../Assets/Img/sozdat.svg";
import icon1 from "../../Assets/Img/isxodyashie.svg";
import icon2 from "../../Assets/Img/soxranenie.svg";
import icon3 from "../../Assets/Img/soxrdelete.svg";
import support from "../../Assets/Img/support.svg";
import tex from "../../Assets/Img/texpodderjki.svg";
import settings from "../../Assets/Img/settings.svg";
import Union from "../../Assets/Img/Union1.svg";

import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="#" className="logo-link">
          <img src={logo} alt="" className="logo-img" />
        </a>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={icon} alt="" className="sidebar-icon" />
              <p className="sidebar-text">Создать</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img
                src={icon1}
                alt=""
                style={{ transform: "rotate(180deg)" }}
                className="sidebar-icon"
              />
              <p className="sidebar-text">Входящие (2)</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={icon1} alt="" className="sidebar-icon" />
              <p className="sidebar-text">Исходящие (3)</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={icon2} alt="" className="sidebar-icon" />
              <p className="sidebar-text">Сохраненные (0)</p>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src={icon3} alt="" className="sidebar-icon" />
              <p className="sidebar-text">Сохраненные (0)</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul className="dashboard-list">
          <li className="dashboard-item">
            <a href="#" className="sidebar-link">
              <img src={tex} alt="" className="sidebar-icon" />
              <div className="sidebar-blok">
                <p className="sidebar-text">Тех поддержка:</p>
                <p className="sidebar-tel">+998 99 999 99 99</p>
              </div>
            </a>
          </li>
          <li className="dashboard-item">
            <a href="#" className="sidebar-link">
              <img src={settings} alt="" className="sidebar-icon" />
              <p className="sidebar-text">Настройки </p>
            </a>
          </li>
          <li className="dashboard-item">
            <a href="#" className="sidebar-link">
              <img src={Union} alt="" className="sidebar-icon" />
              <p className="sidebar-text">Выйти </p>
            </a>
          </li>
          <img src={support} alt="" className="sidebar-thumb" />
        </ul>
      </div>
    </div>
  );
}
