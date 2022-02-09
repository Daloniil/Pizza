/* eslint-disable @typescript-eslint/no-unused-expressions */
import s from "./StylePizzaOrder/PizzaOrder.module.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ReducerType } from "../../../Types/Type";
import { useDispatch, useSelector } from "react-redux";
import {
  getdrinks,
  getnewdrink,
  getnewsneks,
  getnnewpizza,
  getpizza,
  getsize,
  getsneks,
  getsous,
  getves,
} from "../../../Selectors/Menus-selector";
import { actions } from "../../../Redux/buy-item-reducer";
import { actionsn } from "../../../Redux/later-seen-reducer";
import LastSeen from "../LaterSeen/LastSeen";

type numberType = {
  id: any;
};

export const AllOrder: React.FC = () => {
  const dispatch = useDispatch();

  const buys = (info: ReducerType, cost: number, size: number) => {
    dispatch(actions.buy(info, cost, size));
  };

  const newItem = (
    info: ReducerType,
    ves: number | undefined,
    size: number | undefined
  ) => {
    dispatch(actionsn.newItem(info, ves, size));
  };

  const number: numberType = useParams();

  const pizza = useSelector(getpizza);
  const sneks = useSelector(getsneks);
  const drink = useSelector(getdrinks);
  const sous = useSelector(getsous);

  const npizza = useSelector(getnnewpizza);
  const nsnek = useSelector(getnewsneks);
  const ndrink = useSelector(getnewdrink);

  const pages = [pizza, sneks, drink, sous, npizza, nsnek, ndrink];

  const [statePage, setStatePage] = useState(() => pizza[0]);

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].find((elem) => elem.id === Number(number.id))) {
      newItem(
        pages[i][Number(number.id) - pages[i][0].id],
        undefined,
        undefined
      );
    }
  }

  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].find((elem) => elem.id === Number(number.id))) {
        setStatePage(pages[i][Number(number.id) - pages[i][0].id]);
      }
    }
  }, [number]);

  let BuyItem = () => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].find((elem) => elem.id === Number(number.id))) {
        buys(statePage, statePage.cost, 1);
      }
    }
  };

  let Scroll = require("react-scroll");
  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  return (
    <div className={s.content}>
      <div className={s.container_item}>
        <div className={s.photo_item}>
          <img src={statePage.photoURL} alt="" height="400" width="400" />
        </div>
        <div className={s.item_info}>
          <div className={s.menu_info}>
            <NavLink className={s.link_menu_info} to="/profile/pizza">
              Меню/
            </NavLink>
            <span className={s.link_name_info}>{statePage.name}</span>
          </div>
          <div className={s.info}>
            <div className={s.name_info}>{statePage.name}</div>
            <div className={s.cost_info}>{Math.round(statePage.cost)} грн</div>
            <div className={s.strukture_info}>{statePage.structure}</div>
          </div>

          <NavLink className={s.your_item} to="/buy" onClick={BuyItem}>
            Замовити
          </NavLink>
        </div>
        <LastSeen />
      </div>
    </div>
  );
};
