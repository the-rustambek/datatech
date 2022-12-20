import React from "react";
import "./Section.css";
import download from "../../Assets/Img/download.png";
import excel from "../../Assets/Img/excels.png";
import add from '../../Assets/Img/add.png'

const Section = () => {
  return (
    <div className="section">
      <div className="section-top">
        <h2 className="section-name">Создание документа: Счёт-фактура</h2>
        <button className="section-button">Назад/Отменить</button>
      </div>
      <div className="section-title">
        <label className="section-label" htmlFor="">
          Тип счета
          <select className="section-select">
            <option value="Стандарт">Стандарт</option>
            <option value="Стандарт1">Стандарт1</option>
            <option value="Стандар2">Стандарт2</option>
          </select>
        </label>
        <div className="section-list">
          <label htmlFor="">
            Номер счет-фактуры
            <input
              type="number"
              placeholder="Номер счет-фактуры"
              className="section-input"
            />
          </label>
          <label htmlFor="">
            Дата документ
            <input
              type="text"
              placeholder="Дата документа"
              className="section-input"
            />
          </label>
        </div>
        <div className="section-list">
          <label htmlFor="">
            Введите номер контракта
            <input
              type="number"
              placeholder="Введите номер контракта"
              className="section-input"
            />
          </label>
          <label htmlFor="">
            Дата до
            <input
              type="text"
              placeholder="Дата контракта"
              className="section-input"
            />
          </label>
        </div>
      </div>

      <div className="section-title section-page">
        <div className="section-left">
          <h3 className="section-subname">Ваша информация</h3>
          <label htmlFor="">
            ИНН
            <select className="section-select">
              <option value="Стандарт">Стандарт</option>
              <option value="Стандарт1">Стандарт1</option>
              <option value="Стандар2">Стандарт2</option>
            </select>
          </label>
          <label htmlFor="">
            НДС регистрационный номер
            <input
              type="number"
              placeholder="Введите данные"
              className="section-input"
            />
          </label>
          <span className="section-span">
            <label htmlFor="">
              Номер счета
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
            <label htmlFor="">
              Номер счета
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
          </span>
          <label htmlFor="">
            Адрес
            <input
              type="text"
              placeholder="Введите данные"
              className="section-input"
            />
          </label>
          <span className="section-span">
            <label htmlFor="">
              Директор
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
            <label htmlFor="">
              Главный бухгалтер
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
          </span>
        </div>
        <div className="section-left">
          <h3 className="section-subname">Ваша информация</h3>
          <label htmlFor="">
            ИНН
            <select className="section-select">
              <option value="Стандарт">Стандарт</option>
              <option value="Стандарт1">Стандарт1</option>
              <option value="Стандар2">Стандарт2</option>
            </select>
          </label>
          <label htmlFor="">
            НДС регистрационный номер
            <input
              type="number"
              placeholder="Введите данные"
              className="section-input"
            />
          </label>
          <span className="section-span">
            <label htmlFor="">
              Номер счета
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
            <label htmlFor="">
              Номер счета
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
          </span>
          <label htmlFor="">
            Адрес
            <input
              type="text"
              placeholder="Введите данные"
              className="section-input"
            />
          </label>
          <span className="section-span">
            <label htmlFor="">
              Директор
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
            <label htmlFor="">
              Главный бухгалтер
              <input
                type="number"
                placeholder="Введите данные"
                className="section-inputs"
              />
            </label>
          </span>
        </div>
      </div>

      <div className="section-excel">
        <span>
          <p className="section-download">
            <img src={download} alt="" className="section-img" />
            Загрузить из Excel
          </p>
          <p className="section-download">
            <img src={download} alt="" className="section-img" />
            Скачать шаблон
          </p>
        </span>
        <img src={excel} alt="" className="section-pic" />

        <div className="section-excel-bottom">
           <h4 className="section-subnames">Итого: 0.00</h4>
           <p>Добавить строку  <img className="section-icon" src={add} alt="" /> </p>
        </div>
      </div>

      <div className="section-bottom">
        <span className="section-span">
          <h3 className="section-subname">Доверенность</h3>
          <select name="" id="" className="section-selects">
            <option value="Выберите доверенность">Выберите доверенность</option>
            <option value="Выберите доверенность1">
              Выберите доверенность1
            </option>
            <option value="Выберите доверенность2">
              Выберите доверенность2
            </option>
          </select>
        </span>
        <div className="section-titles">
          <label htmlFor="">
            Номер доверенност
            <input
              type="text"
              placeholder="Введите данные"
              className="section-form"
            />
          </label>
          <label htmlFor="">
            Дата доверенности
            <input
              type="text"
              placeholder="Введите данные"
              className="section-form"
            />
          </label>
          <label htmlFor="">
            ИНН
            <input
              type="text"
              placeholder="Введите данные"
              className="section-form"
            />
          </label>
          <label htmlFor="">
            Ответственное лицо ФИО
            <input
              type="text"
              placeholder="Введите данные"
              className="section-form"
            />
          </label>
        </div>
      </div>
      <div className="section-button-list">
        <span>
          <button className="section-delete">Отменить</button>
          <button className="section-submit">Показать документ</button>
        </span>
        <span>
          <button className="section-submits">Сохранить</button>
          <button className="section-submits">Подписать</button>
        </span>
      </div>
    </div>
  );
};

export default Section;
