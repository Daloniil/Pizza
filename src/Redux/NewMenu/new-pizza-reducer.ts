import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId41 from "../../Assets/Pizza/197886.webp";
import photoId42 from "../../Assets/Pizza/197919.webp";
import photoId43 from "../../Assets/Pizza/197921.webp";
import photoId44 from "../../Assets/Pizza/206549.webp";

let initialState = {
  pizza: [
    {
      id: 41,
      photoURL: photoId41,
      name: "Печиво Тіволі Грушеве",
      cost: 150,
      structure:
        "Печиво Тіволі грушеве - печиво з карамельними Кранчами, молочним шоколадом і шматочками груші в круглій бляшаній коробці",
      amount: 1,
    },
    {
      id: 42,
      photoURL: photoId42,
      name: "Шоколад NUT SELECTION",
      cost: 62,
      structure: "Молочний шоколад (77%) з мигдалем (23%).",
      amount: 1,
    },
    {
      id: 43,
      photoURL: photoId43,
      name: "Шоколад чорний з начинкою марципан",
      cost: 64,
      structure:
        "Чорний шоколад з марципаном - чорний шоколад з вишуканим 100% -м марципаном",
      amount: 1,
    },
    {
      id: 44,
      photoURL: photoId44,
      name: "Хрусткі фігурки 'Kresko'",
      cost: 55,
      structure: "Хрусткі фігурки з банановим смаком.",
      amount: 1,
    },
  ] as Array<ReducerType>,
  siza: 28 as number,
  ves: 370 as number,
};

export type initialStateType = typeof initialState;

const newPizzaReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "NEWPIZZA": {
      return <initialStateType>{
        ...state,
        pizza: [...state.pizza, ...action.pizza],
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  newpizzaAC: (pizza: Array<initialStateType>) => {
    return {
      type: "NEWPIZZA",
      pizza: pizza,
    } as const;
  },
};

export default newPizzaReducer;
