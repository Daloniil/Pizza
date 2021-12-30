import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId20 from "../../Assets/Sneks/Potato-medalion.webp";
import photoId21 from "../../Assets/Sneks/картопляні-кульки-1-600x600.webp";
import photoId22 from "../../Assets/Sneks/нагетси-9шт-1-600x600.webp";
import photoId23 from "../../Assets/Sneks/курячі-ніжки-4шт-1-600x600.webp";
import photoId24 from "../../Assets/Sneks/сирні-палички-1-600x600.webp";
import photoId25 from "../../Assets/Sneks/картопля-зі-спеціями-1-600x600.webp";
import photoId26 from "../../Assets/Sneks/нагетси-6шт-1-600x600.webp";
import photoId27 from "../../Assets/Sneks/картопляні-діпи-1-600x600.webp";
import photoId28 from "../../Assets/Sneks/курячі-ніжки-2шт-1-600x600.webp";
import photoId29 from "../../Assets/Sneks/цибулеві-кільця-1-600x600.webp";
import photoId30 from "../../Assets/Sneks/сирні-кульки-1-600x600.webp";
import photoId31 from "../../Assets/Sneks/мясні-стріпси-6шт-1-600x600.webp";
import photoId32 from "../../Assets/Sneks/картопля-фрі-1-600x600.webp";

let initialState = {
  sneks: [
    {
      id: 27,
      photoURL: photoId20,
      name: "Картопляні медальйони",
      cost: 54,
      structure: "Порція картопляних медальйонів 350 г.",
      amount: 1,
    },
    {
      id: 28,
      photoURL: photoId21,
      name: "Картопляні кульки",
      cost: 36,
      structure: "Велика порція картопляних кульок 20 шт",
      amount: 1,
    },
    {
      id: 29,
      photoURL: photoId22,
      name: "М’ясні нагетси 9 шт",
      cost: 72,
      structure: "Велика порція м'ясні нагетси 9 шт",
      amount: 1,
    },
    {
      id: 30,
      photoURL: photoId23,
      name: "Куряча ніжка 4 шт",
      cost: 88,
      structure: "Середня порція курячих ніжок 2 шт",
      amount: 1,
    },
    {
      id: 31,
      photoURL: photoId24,
      name: "Сирні палички",
      cost: 88,
      structure: "Велика порція сирних паличок 8 шт",
      amount: 1,
    },
    {
      id: 32,
      photoURL: photoId25,
      name: "Картопля зі спеціями",
      cost: 53,
      structure: "Велика порція картоплі зі спеціями 300г",
      amount: 1,
    },
    {
      id: 33,
      photoURL: photoId26,
      name: "М’ясні нагетси 6 шт",
      cost: 47,
      structure: "Середня порція м'ясні нагетси 6 шт",
      amount: 1,
    },
    {
      id: 34,
      photoURL: photoId27,
      name: "Картопляні діпи",
      cost: 44,
      structure: "Велика порція картопляних діпів 230 г",
      amount: 1,
    },
    {
      id: 35,
      photoURL: photoId28,
      name: "Куряча ніжка 2 шт",
      cost: 48,
      structure: "Середня порція курячих ніжок 2 шт",
      amount: 1,
    },
    {
      id: 36,
      photoURL: photoId29,
      name: "Цибулеві кільця",
      cost: 42,
      structure: "Велика порція цибулевих кілець 10 шт",
      amount: 1,
    },
    {
      id: 37,
      photoURL: photoId30,
      name: "Сирні Кульки",
      cost: 95,
      structure: "Велика порція сирних кульок 10 шт",
      amount: 1,
    },
    {
      id: 38,
      photoURL: photoId31,
      name: "М’ясні стріпси 6 шт",
      cost: 83,
      structure: "Середня порція м'ясних стріпсів 6шт",
      amount: 1,
    },
    {
      id: 39,
      photoURL: photoId32,
      name: "Картопля фрі",
      cost: 38,
      structure: "Велика порція картоплі фрі 150г",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const sneksReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETSNEKS": {
      return <initialStateType>{
        ...state,
        sneks: [...state.sneks, ...action.sneks],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  setsnekAC: (sneks: Array<initialStateType>) => {
    return {
      type: "SETSNEKS",
      sneks: sneks,
    } as const;
  },
};

export default sneksReducer;
