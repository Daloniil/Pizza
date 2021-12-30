import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId45 from "../../Assets/Sneks/Potato-medalion.webp";
import photoId46 from "../../Assets/Sneks/картопляні-кульки-1-600x600.webp";
import photoId47 from "../../Assets/Sneks/нагетси-9шт-1-600x600.webp";
import photoId48 from "../../Assets/Sneks/курячі-ніжки-4шт-1-600x600.webp";

let initialState = {
  snek: [
    {
      id: 52,
      photoURL: photoId45,
      name: "Картопляні медальйони",
      cost: 54,
      structure: "Порція картопляних медальйонів 350 г.",
      amount: 1,
    },
    {
      id: 53,
      photoURL: photoId46,
      name: "Картопляні кульки",
      cost: 36,
      structure: "Велика порція картопляних кульок 20 шт",
      amount: 1,
    },
    {
      id: 54,
      photoURL: photoId47,
      name: "М’ясні нагетси 9 шт",
      cost: 72,
      structure: "Велика порція м'ясні нагетси 9 шт",
      amount: 1,
    },
    {
      id: 55,
      photoURL: photoId48,
      name: "Куряча ніжка 4 шт",
      cost: 88,
      structure: "Середня порція курячих ніжок 2 шт",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const newSnekReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "NEWSNEK": {
      return <initialStateType>{
        ...state,
        snek: [...state.snek, ...action.snek],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  newsnekAC: (snek: Array<initialStateType>) => {
    return {
      type: "NEWSNEK",
      snek: snek,
    } as const;
  },
};

export default newSnekReducer;
