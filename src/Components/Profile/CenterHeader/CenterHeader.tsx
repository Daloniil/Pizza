import s from "./StyleCenterHeader/CenterHeader.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const CenterHeader: React.FC = () => {
  return (
    <div className={s.center_header}>
      <div className={s.center_header_container}>
        <div className={s.center_header_container_text}>
          <span>Смачне й швидке</span>
          <h2>Меню доставки</h2>
          <p>
            Зробіть швидке замовлення, якщо Ви впевненні у своєму смаку та{" "}
            <br /> побажаннях. Якщо ні – для Вас є повне меню зі зручними
            фільтрами <br /> для пошуку у розділі <a href="#">Меню.</a>
          </p>
        </div>
      </div>

      <div className={s.menu}>
        <div className={s.pizza}>
          <span>
            <NavLink
              to="/profile/pizza"
              className={s.piza}
              activeClassName={s.ac}
            >
              Кондитерскі вироби
            </NavLink>
          </span>
        </div>

        <div className={s.sneks}>
          <span>
            <NavLink
              to="/profile/sneks"
              className={s.snek}
              activeClassName={s.ac}
            >
              Снеки
            </NavLink>
          </span>
        </div>
        <div className={s.drink}>
          <span>
            <NavLink
              to="/profile/drink"
              className={s.drin}
              activeClassName={s.ac}
            >
              Напої
            </NavLink>
          </span>
        </div>
        <div className={s.soys}>
          <span>
            <NavLink
              to="/profile/sous"
              className={s.soy}
              activeClassName={s.ac}
            >
              Соуси
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CenterHeader;
