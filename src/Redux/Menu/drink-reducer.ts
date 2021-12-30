import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";
import photoId21 from "../../Assets/Drink/Сік-яблучно-гранатовий-300x300.webp";
import photoId22 from "../../Assets/Drink/pepsi_bottle_600_square.webp";
import photoId23 from "../../Assets/Drink/Сік-мультивітамін-300x300.webp";
import photoId24 from "../../Assets/Drink/Сік-яблучно-виноградний-300x300.webp";
import photoId25 from "../../Assets/Drink/Сік-мультивітамін-300x300.webp";
import photoId26 from "../../Assets/Drink/cocacola_bottle_600_square.webp";

let initialState = {
  drink: [
    {
      id: 21,
      photoURL: photoId21,
      name: "Сік яблучно-гранатовий 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 22,
      photoURL: photoId22,
      name: "Pepsi 1 л",
      cost: 25,
      structure: "",
      amount: 1,
    },
    {
      id: 23,
      photoURL: photoId23,
      name: "Сік мульти-вітамінний 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 24,
      photoURL: photoId24,
      name: "Сік яблучно-виноградний 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 25,
      photoURL: photoId25,
      name: "Сік мульти-фруктовий 1л",
      cost: 28,
      structure: "",
      amount: 1,
    },
    {
      id: 26,
      photoURL: photoId26,
      name: "Coca Cola",
      cost: 25,
      structure: "",
      amount: 1,
    },
  ] as Array<ReducerType>,
};

export type initialStateType = typeof initialState;

const drinkReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETDRINK": {
      return <initialStateType>{
        ...state,
        drink: [...state.drink, ...action.drink],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  setdrinkAC: (drink: Array<initialStateType>) => {
    return {
      type: "SETDRINK",
      drink,
    } as const;
  },
};

export default drinkReducer;
