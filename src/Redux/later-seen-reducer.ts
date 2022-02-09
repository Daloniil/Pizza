import { actionsType } from "./redux-store";
import { ItemType, ReducerType } from "../Types/Type";

let initialState = {
  item: [] as Array<ItemType>,
};

export type initialStateType = typeof initialState;

const laterSeen = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  if (action.type === "NEWITEMS") {
    {
      let n = state.item.length - 1 + 1;
      let neweat = {
        _id: n,
        eat: action.info,
        ves: action.ves,
        size: action.size,
      };

      if (!state.item.some((buy) => buy.eat === action.info)) {
        if (state.item.length >= 6) {
          state.item.splice(0, 0);
          return <initialStateType>{
            ...state,
            item: [...state.item, neweat],
          };
        } else {
          return <initialStateType>{
            ...state,
            item: [...state.item, neweat],
          };
        }
      }
    }
    return state;
  } else {
    return state;
  }
};

type ActionsTypes = actionsType<typeof actionsn>;

export const actionsn = {
  newItem: (
    info: ReducerType,
    ves: number | undefined,
    size: number | undefined
  ) => {
    return {
      type: "NEWITEMS",
      info,
      ves,
      size,
    } as const;
  },
};

export default laterSeen;
