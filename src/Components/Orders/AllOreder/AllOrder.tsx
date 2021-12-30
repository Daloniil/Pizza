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

  const ves = useSelector(getves);
  const size = useSelector(getsize);

  if (number.id <= 20) {
    newItem(pizza[number.id - 1], ves, size);
  } else if (number.id >= 21 && number.id < 27) {
    newItem(drink[number.id - 21], undefined, undefined);
  } else if (number.id >= 27 && number.id < 40) {
    newItem(sneks[number.id - 27], undefined, undefined);
  } else if (number.id >= 40 && number.id < 48) {
    newItem(sous[number.id - 40], undefined, undefined);
  } else if (number.id >= 48 && number.id < 52) {
    newItem(npizza[number.id - 48], ves, undefined);
  } else if (number.id >= 52 && number.id < 56) {
    newItem(nsnek[number.id - 52], undefined, undefined);
  } else if (number.id >= 56 && number.id < 60) {
    newItem(ndrink[number.id - 56], undefined, undefined);
  }

  let pizzaRef = number.id <= 20 ? pizza[number.id - 1] : pizza[0];
  let drinkRef =
    number.id >= 21 && number.id < 27 ? drink[number.id - 21] : drink[0];
  let sneksRef =
    number.id >= 27 && number.id < 40 ? sneks[number.id - 27] : sneks[0];
  let sousRef =
    number.id >= 40 && number.id < 48 ? sous[number.id - 40] : sous[0];
  let npizzaRef =
    number.id >= 48 && number.id < 52 ? npizza[number.id - 48] : npizza[0];
  let nsnekRef =
    number.id >= 52 && number.id < 56 ? nsnek[number.id - 52] : nsnek[0];
  let ndrinkRef =
    number.id >= 56 && number.id < 60 ? ndrink[number.id - 56] : ndrink[0];

  let [pizzaState, setPizzaState] = useState(() => pizzaRef);
  const [drinkState, setDrinkState] = useState(() => drinkRef);
  const [sneksState, setSneksState] = useState(() => sneksRef);
  const [sousState, setSousState] = useState(() => sousRef);

  const [npizzaState, setNpizzaState] = useState(() => npizzaRef);
  const [nsneksState, setNsneksState] = useState(() => nsnekRef);
  const [ndrinkState, setNdrinkState] = useState(() => ndrinkRef);

  const [sizeState, setSizeState] = useState(() => size);

  const [costState, setCostState] = useState(() => pizzaRef.cost);

  const [ncostState, setNcostState] = useState(() => npizzaRef.cost);

  useEffect(() => {
    if (number.id <= 20) {
      setPizzaState(pizzaRef);
    } else if (number.id >= 21 && number.id < 27) {
      setDrinkState(drinkRef);
    } else if (number.id >= 27 && number.id < 40) {
      setSneksState(sneksRef);
    } else if (number.id >= 40 && number.id < 48) {
      setSousState(sousRef);
    } else if (number.id >= 48 && number.id < 52) {
      setNpizzaState(npizzaRef);
    } else if (number.id >= 52 && number.id < 56) {
      setNsneksState(nsnekRef);
    } else if (number.id >= 56 && number.id < 60) {
      setNdrinkState(ndrinkRef);
    }
  }, [number]);

  let BuyItem = () => {
    if (number.id <= 20) {
      buys(pizzaState, costState, sizeState);
    } else if (number.id >= 21 && number.id < 27) {
      buys(drinkRef, drinkRef.cost, 0);
    } else if (number.id >= 27 && number.id < 40) {
      buys(sneksRef, sneksRef.cost, 0);
    } else if (number.id >= 40 && number.id < 48) {
      buys(sousRef, sousRef.cost, 0);
    } else if (number.id >= 48 && number.id < 52) {
      buys(npizzaState, ncostState, sizeState);
    } else if (number.id >= 52 && number.id < 56) {
      buys(nsnekRef, nsnekRef.cost, 0);
    } else if (number.id >= 56 && number.id < 60) {
      buys(ndrinkRef, ndrinkRef.cost, 0);
    } else {
      buys(pizzaState, costState, sizeState);
    }
  };

  let prov: any, link: any, name: any;

  if (number.id <= 20) {
    prov = pizzaState;
    link = "/profile/pizza";
    name = "Кондитерскі вироби";
  } else if (number.id >= 21 && number.id < 27) {
    prov = drinkState;
    link = "/profile/drink";
    name = "Напої";
  } else if (number.id >= 27 && number.id < 40) {
    prov = sneksState;
    link = "/profile/sneks";
    name = "Снеки";
  } else if (number.id >= 40 && number.id < 48) {
    prov = sousState;
    link = "/profile/sous";
    name = "Соус";
  } else if (number.id >= 48 && number.id < 52) {
    prov = npizzaState;
    link = "/profile/pizza";
    name = "Кондитерскі вироби";
  } else if (number.id >= 52 && number.id < 56) {
    prov = nsneksState;
    link = "/profile/sneks";
    name = "Снеки";
  } else if (number.id >= 56 && number.id < 60) {
    prov = ndrinkState;
    link = "/profile/drink";
    name = "Напої";
  }

  let item;

  {
    item = (
      <div className={s.container_item}>
        <div className={s.photo_item}>
          <img src={prov.photoURL} alt="" height="350" width="350" />
        </div>
        <div className={s.item_info}>
          <div className={s.menu_info}>
            <NavLink className={s.link_menu_info} to="/profile/pizza">
              Меню/
            </NavLink>
            <NavLink className={s.link_info} to={link}>
              {name}/
            </NavLink>
            <span className={s.link_name_info}>{prov.name}</span>
          </div>
          <div className={s.info}>
            <div className={s.name_info}>{prov.name}</div>
            <div className={s.cost_info}>{Math.round(prov.cost)} грн</div>
            <div className={s.strukture_info}>{prov.structure}</div>
          </div>
          <NavLink className={s.your_item} to="/buy" onClick={BuyItem}>
            Замовити
          </NavLink>
        </div>
        <LastSeen />
      </div>
    );
  }

  let Scroll = require("react-scroll");
  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  return <div className={s.content}>{item}</div>;
};
