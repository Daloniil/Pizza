import s from "../Pizza/StylePizza/pizza.module.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { ReducerType } from "../../../../Types/Type";
import { useDispatch, useSelector } from "react-redux";
import { getsous } from "../../../../Selectors/Menus-selector";
import { actions } from "../../../../Redux/buy-item-reducer";

export const Sous: React.FC = () => {
  let BuyItem;

  const sous = useSelector(getsous);
  const dispatch = useDispatch();

  const buys = (info: ReducerType, cost: number, size: number) => {
    dispatch(actions.buy(info, cost, size));
  };

  return (
    <div className={s.pizza}>
      {sous.map((u) => (
        <div key={u.id}>
          <NavLink to={"/items/" + u.id} className={s.pizza_nav}>
            <div className={s.pizza_container}>
              <div className={s.pizza_all}>
                <div className={s.pizza_all_photo}>
                  <img src={u.photoURL} className={s.img} />
                </div>

                <div className={s.pizza_all_name}>
                  <div className={s.name}>{u.name}</div>
                </div>

                <div className={s.pizza_all_cost}>
                  <div className={s.cost}>{u.cost} грн</div>
                </div>

                <div className={s.pizza_all_structure}>
                  <div className={s.structure}>{u.structure}</div>
                </div>

                <div className={s.pizza_all_bottom}>
                  <div className={s.pizza_all_bottom_button}>
                    <span className={s.button}>
                      <NavLink
                        className={s.your_buy}
                        to={"/buy"}
                        onClick={
                          (BuyItem = () => {
                            buys(sous[u.id - 33], sous[u.id - 33].cost, 0);
                          })
                        }
                      >
                        {" "}
                        Замовити
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
