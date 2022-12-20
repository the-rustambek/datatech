import React from "react";
import "./Content.css";
import upload from "../../Assets/Img/upload.svg";
import excel from '../../Assets/Img/excel.png'

const Content = () => {
  return (
    <div className="content">
      <div className="content-list">
        <div className="content-title">
          <span className="content-span">
            <h3 className="content-name">Счет-фактура</h3>
            <p className="content-texts">Статус документа в ГНК</p>
          </span>
          <h4 className="content-number">№03-60378 от 31.03.2021</h4>
          <p className="content-code">566800736</p>
          <div className="content-item">
            <p className="content-subname">Отправитель:</p>
            <h5 className="content-names">
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "VENKON GROUP"
            </h5>
          </div>
          <div className="content-bottom">
            <p className="content-text">Дата:</p>
            <h5 className="content-data">2021-04-09 12:40:13</h5>
            <span>
              <button className="content-download">Скачать </button>
              <button className="content-download">Печать </button>
            </span>
          </div>
        </div>
        <div className="content-title">
          <span className="content-items">
            <h3 className="content-name">Статус: </h3>
            <p className="content-file">
              <img src={upload} alt="" className="content-icon" />
              Прикрепить файл
            </p>
          </span>
          <h3 className="content-subnames">ОЖИДАЕТ ВАШЕЙ ПОДПИСИ</h3>
          <div className="content-button">
            <button className="content-success">Подписать</button>
            <button className="content-delete">Отказаться</button>
          </div>
        </div>
      </div>
      <img src={excel} alt="" className="content-img" />
    </div>
  );
};

export default Content;
