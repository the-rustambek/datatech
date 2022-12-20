import React from "react";
import { NavLink } from "react-router-dom";
import "./Document.css";
import red from "../../Assets/Img/red.png";
import green from "../../Assets/Img/green.png";
import yellow from "../../Assets/Img/yellow.png";
import gray from "../../Assets/Img/gray.png";

const Document = () => {
  return (
    <div className="document">
      <h2 className="document-name">Документы</h2>
      <ul className="document-list">
        <li className="document-item">
          <NavLink to="/document" activeClassName="document-link">
            Договора
          </NavLink>
        </li>
        <li className="document-item">
          <NavLink to="/document" activeClassName="document-link">
            Счет фактуры
          </NavLink>
        </li>
        <li className="document-item">
          <NavLink to="/document" activeClassName="document-link">
            Акт
          </NavLink>
        </li>
        <li className="document-item">
          <NavLink to="/document" activeClassName="document-link">
            Доверенность
          </NavLink>
        </li>
      </ul>

      <div className="document-title">
        <span className="document-span">
          <h3 className="document-subname">Фильтр</h3>
          <p className="document-text">Сбросить фильтр</p>
        </span>
        <div className="document-titles">
          <label htmlFor="">
            Номер документа
            <input
              type="name"
              placeholder="Номер документа"
              className="document-input"
            />
          </label>
          <label htmlFor="">
            Статус документа
            <input
              type="name"
              placeholder="Статус документа"
              className="document-input"
            />
          </label>
          <label htmlFor="">
            Поиск по контрагенту
            <input
              type="name"
              placeholder="Поиск по контрагенту"
              className="document-input"
            />
          </label>
          <label htmlFor="">
            Дата с
            <input
              type="number"
              placeholder="01.01.2020"
              className="document-inputs"
            />
          </label>
          <label htmlFor="">
            Дата до
            <input
              type="number"
              placeholder="01.01.2020"
              className="document-inputs"
            />
          </label>
        </div>
      </div>

      <div className="document-page">
        <div className="document-box">
          <div className="document-bottom">
            <h3 className="document-subname">Таблица</h3>
            <span className="document-spans">
              <img src={red} alt="" className="document-img" />
              <p>Отменен</p>
            </span>
            <span className="document-spans">
              <img src={green} alt="" className="document-img" />
              <p>Подписано</p>
            </span>
            <span className="document-spans">
              <img src={yellow} alt="" className="document-img" />
              <p>В ожидании</p>
            </span>
            <span className="document-spans">
              <img src={gray} alt="" className="document-img" />
              <p>Черновик</p>
            </span>
          </div>
          <div className="document-right">
            <button className="document-btn">Открыть в Exсel</button>
            <button className="document-btn">Фильтр таблицы</button>
          </div>
        </div>
        <table className="document-table">
             <thead>
                <tr>
                    <th>
                        <input type="checkbox" />
                        Статус
                    </th>
                    <th>Тип документа </th>
                    <th>Дата обновления </th>
                    <th>Контрагент </th>
                    <th>Номер и дата документа</th>
                    <th>Номер и дата договора</th>
                    <th>Стоимость поставки</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td>
                        <input type="checkbox" />
                        <img src={red} alt="" className="document-img" />
                    </td>
                    <td>Счет-фактура (вх.)</td>
                    <td>09.03.2021</td>
                    <td>ООО VENKON GROUP</td>
                    <td>998998933800</td>
                    <td>02-53519 от 28.02.2021</td>
                    <td>Публичная оферта от <p>15.12.2020</p> </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                        <img src={red} alt="" className="document-img" />
                    </td>
                    <td>Счет-фактура (вх.)</td>
                    <td>09.03.2021</td>
                    <td>ООО VENKON GROUP</td>
                    <td>998998933800</td>
                    <td>02-53519 от 28.02.2021</td>
                    <td>Публичная оферта от <p>15.12.2020</p> </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                        <img src={red} alt="" className="document-img" />
                    </td>
                    <td>Счет-фактура (вх.)</td>
                    <td>09.03.2021</td>
                    <td>ООО VENKON GROUP</td>
                    <td>998998933800</td>
                    <td>02-53519 от 28.02.2021</td>
                    <td>Публичная оферта от <p>15.12.2020</p> </td>
                </tr>
             </tbody>
        </table>
      </div>

      <div className="document-lists">
         <div className="document-buttons">
            <button className="document-submit">Подписать</button>
            <button className="document-delete">Отменить</button>
         </div>
         <div className="document-buttons">
             <label htmlFor="" className="document-label">
                 <p>Показать по: </p>
                <select name="" id="">
                  <option value="12">12</option>
                  <option value="18">18</option>
                  <option value="24">24</option>
                </select>
             </label>
             <button className="document-settings">Синхронизация с ГНК</button>
             <button className="document-settings">Реестр</button>
         </div> 
      </div>

      <div className="document-pagination">
        <button className="document-prev">Назад</button>
        <span className="document-number">1</span>
        <span className="document-number">2</span>
        <span className="document-number">3</span>
        <button className="document-prev">Следующая</button>
      </div>
    </div>
  );
};

export default Document;
