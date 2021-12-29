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

  if (number.id <= 13) {
    newItem(pizza[number.id - 1], ves, size);
  } else if (number.id >= 14 && number.id < 20) {
    newItem(drink[number.id - 14], undefined, undefined);
  } else if (number.id >= 20 && number.id < 33) {
    newItem(sneks[number.id - 20], undefined, undefined);
  } else if (number.id >= 33 && number.id < 41) {
    newItem(sous[number.id - 33], undefined, undefined);
  } else if (number.id >= 41 && number.id < 45) {
    newItem(npizza[number.id - 41], ves, undefined);
  } else if (number.id >= 45 && number.id < 49) {
    newItem(nsnek[number.id - 45], undefined, undefined);
  } else if (number.id >= 49 && number.id < 53) {
    newItem(ndrink[number.id - 49], undefined, undefined);
  }

  let pizzaRef = number.id <= 13 ? pizza[number.id - 1] : pizza[0];
  let drinkRef =
    number.id >= 14 && number.id < 20 ? drink[number.id - 14] : drink[0];
  let sneksRef =
    number.id >= 20 && number.id < 33 ? sneks[number.id - 20] : sneks[0];
  let sousRef =
    number.id >= 33 && number.id < 41 ? sous[number.id - 33] : sous[0];
  let npizzaRef =
    number.id >= 41 && number.id < 45 ? npizza[number.id - 41] : npizza[0];
  let nsnekRef =
    number.id >= 45 && number.id < 49 ? nsnek[number.id - 45] : nsnek[0];
  let ndrinkRef =
    number.id >= 49 && number.id < 53 ? ndrink[number.id - 49] : ndrink[0];

  let [pizzaState, setPizzaState] = useState(() => pizzaRef);
  const [drinkState, setDrinkState] = useState(() => drinkRef);
  const [sneksState, setSneksState] = useState(() => sneksRef);
  const [sousState, setSousState] = useState(() => sousRef);

  const [npizzaState, setNpizzaState] = useState(() => npizzaRef);
  const [nsneksState, setNsneksState] = useState(() => nsnekRef);
  const [ndrinkState, setNdrinkState] = useState(() => ndrinkRef);

  const [vesState, setVesState] = useState(() => ves);
  const [sizeState, setSizeState] = useState(() => size);

  const [costState, setCostState] = useState(() => pizzaRef.cost);

  const [ncostState, setNcostState] = useState(() => npizzaRef.cost);

  const [style_line28State, setstyle_line28State] = useState(() => s.line28);
  const [style_line33State, setstyle_line33State] = useState(() => s.no);
  const [style_line45State, setstyle_line45State] = useState(() => s.no);

  useEffect(() => {
    if (number.id <= 13) {
      setPizzaState(pizzaRef);
    } else if (number.id >= 14 && number.id < 20) {
      setDrinkState(drinkRef);
    } else if (number.id >= 20 && number.id < 33) {
      setSneksState(sneksRef);
    } else if (number.id >= 33 && number.id < 41) {
      setSousState(sousRef);
    } else if (number.id >= 41 && number.id < 45) {
      setNpizzaState(npizzaRef);
    } else if (number.id >= 45 && number.id < 49) {
      setNsneksState(nsnekRef);
    } else if (number.id >= 49 && number.id < 53) {
      setNdrinkState(ndrinkRef);
    }
  }, [number]);

  let NewSize28 = () => {
    if (sizeState === 33 || sizeState === 45) {
      setPizzaState((actual) => {
        return {
          ...actual,
          cost: pizzaRef.cost,
        };
      });

      setNpizzaState((actual) => {
        return {
          ...actual,
          cost: npizzaRef.cost,
        };
      });

      setNpizzaState((actual) => {
        return {
          ...actual,
          amount: 1,
        };
      });

      setPizzaState((actual) => {
        return {
          ...actual,
          amount: 1,
        };
      });

      setCostState(pizzaRef.cost);
      setNcostState(npizzaRef.cost);

      setSizeState(28);
      setVesState(370);
      setstyle_line28State(s.line28);
      setstyle_line33State(s.no);
      setstyle_line45State(s.no);
    }
  };

  let NewSize33 = () => {
    if (sizeState === 28 || sizeState === 45) {
      setPizzaState((actual) => {
        return {
          ...actual,
          cost: pizzaRef.cost * 2.7,
        };
      });
      setNpizzaState((actual) => {
        return {
          ...actual,
          cost: npizzaRef.cost * 2.7,
        };
      });
      setCostState(pizzaRef.cost * 2.7);
      setNcostState(npizzaRef.cost * 2.7);
      setPizzaState((actual) => {
        return {
          ...actual,
          id: pizzaRef.id * 200,
        };
      });
      setNpizzaState((actual) => {
        return {
          ...actual,
          id: npizzaRef.id * 200,
        };
      });

      setNpizzaState((actual) => {
        return {
          ...actual,
          amount: 1,
        };
      });

      setPizzaState((actual) => {
        return {
          ...actual,
          amount: 1,
        };
      });

      setSizeState(33);
      setVesState(580);
      setstyle_line28State(s.no);
      setstyle_line33State(s.line33);
      setstyle_line45State(s.no);
    }
  };

  let NewSize45 = () => {
    if (sizeState === 28 || sizeState === 33) {
      setPizzaState((actual) => {
        return {
          ...actual,
          cost: pizzaRef.cost * 4,
        };
      });

      setNpizzaState((actual) => {
        return {
          ...actual,
          cost: npizzaRef.cost * 4,
        };
      });
      setCostState(pizzaRef.cost * 4);
      setNcostState(npizzaRef.cost * 4);
      setPizzaState((actual) => {
        return {
          ...actual,
          id: pizzaRef.id * 300,
        };
      });
      setNpizzaState((actual) => {
        return {
          ...actual,
          id: npizzaRef.id * 300,
        };
      });

      setNpizzaState((actual) => {
        return {
          ...actual,
          amount: 1,
        };
      });

      setPizzaState((actual) => {
        return {
          ...actual,
          amount: 1,
        };
      });

      setSizeState(45);
      setVesState(1280);
      setstyle_line28State(s.no);
      setstyle_line33State(s.no);
      setstyle_line45State(s.line45);
    }
  };

  let BuyItem = () => {
    if (number.id <= 13) {
      debugger;
      buys(pizzaState, costState, sizeState);
    } else if (number.id >= 14 && number.id < 20) {
      buys(drinkRef, drinkRef.cost, 0);
    } else if (number.id >= 20 && number.id < 33) {
      buys(sneksRef, sneksRef.cost, 0);
    } else if (number.id >= 33 && number.id < 41) {
      buys(sousRef, sousRef.cost, 0);
    } else if (number.id >= 41 && number.id < 45) {
      debugger;

      buys(npizzaState, ncostState, sizeState);
    } else if (number.id >= 45 && number.id < 49) {
      buys(nsnekRef, nsnekRef.cost, 0);
    } else if (number.id >= 49 && number.id < 53) {
      buys(ndrinkRef, ndrinkRef.cost, 0);
    } else {
      buys(pizzaState, costState, sizeState);
    }
  };

  let prov: any, link: any, name: any;

  if (number.id < 14) {
    prov = pizzaState;
    link = "/profile/pizza";
    name = "Кондитерскі вироби";
  } else if (number.id >= 14 && number.id < 20) {
    prov = drinkState;
    link = "/profile/drink";
    name = "Напої";
  } else if (number.id >= 20 && number.id < 33) {
    prov = sneksState;
    link = "/profile/sneks";
    name = "Снеки";
  } else if (number.id >= 33 && number.id < 41) {
    prov = sousState;
    link = "/profile/sous";
    name = "Соус";
  } else if (number.id >= 41 && number.id < 45) {
    prov = npizzaState;
  } else if (number.id >= 45 && number.id < 49) {
    prov = nsneksState;
    link = "/profile/sneks";
    name = "Снеки";
  } else if (number.id >= 49 && number.id < 53) {
    prov = ndrinkState;
    link = "/profile/drink";
    name = "Напої";
  }

  let item;

  {
    item = (
      <div className={s.container_item}>
        <div className={s.photo_item}>
          <img src={prov.photoURL} alt="" height="400" width="400" />
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
