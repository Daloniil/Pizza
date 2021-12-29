import { actionsType } from "./redux-store";
import { ReducerType } from "../Types/Type";

let initialState = {
  item: [] as Array<BuyItemType>,
  lenght: null as number | null,
  amoun: 0 as number,
};

export type BuyItemType = {
  _id: number;
  id: number;
  name: string;
  eat: ReducerType;
  photoURL: string;
  cost: number;
  size: number;
  finalcost: number;
  amount: number;
};

export type initialStateType = typeof initialState;

const buyItem = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "BUYITEM": {
      let n = state.item.length;
      let buyeat = {
        _id: n,
        id: action.info.id,
        name: action.info.name,
        eat: action.info,
        cost: action.cost,
        size: action.size,
        finalcost: action.cost,
        amount: action.info.amount,
        photoURL: action.info.photoURL,
      };

      if (action.size > 0) {
        if (!state.item.some((buy) => buy.id === action.info.id)) {
          debugger;
          return {
            ...state,
            item: [...state.item, buyeat],
            lenght: state.item.length,
            amoun: state.amoun + action.info.amount,
          };
        } else {
          debugger;

          if (!state.item.some((buy) => buy.size === action.size)) {
            return {
              ...state,
              item: [...state.item, buyeat],
              lenght: state.item.length,
              amoun: state.amoun + action.info.amount,
            };
          } else {
            let searchId = action.info.id;
            let indexId = state.item.findIndex((el) => el.id === searchId);
            return {
              ...state,
              // @ts-ignore
              ...(state.item[indexId].eat.amount += 1),
              amoun: state.amoun + 1,
              ...(state.item[indexId].cost = Object(
                (state.item[indexId].finalcost *
                  state.item[indexId].eat.amount) as {}
              )),
            };
          }
        }
      } else if (!state.item.some((buy) => buy.id === action.info.id)) {
        return {
          ...state,
          item: [...state.item, buyeat],
          lenght: state.item.length,
          amoun: state.amoun,
        };
      } else {
        let Id = action.info.id;
        let index = state.item.findIndex((el) => el.id === Id);

        return {
          ...state,
          ...(state.item[index].eat.amount += Object(1 as {})),
          amoun: state.amoun + 1,
          ...(state.item[index].cost = Object(
            (state.item[index].finalcost * state.item[index].eat.amount) as {}
          )),
        };
      }
    }

    case "LENGHT": {
      return {
        ...state,
        lenght: action.lenght,
      };
    }

    case "AMOUNTSMINUS": {
      return {
        ...state,
        amoun: state.amoun - action.newam,
      };
    }

    case "AMOUNTSPLUS": {
      return {
        ...state,
        amoun: state.amoun + 1,
      };
    }

    case "DELETEARRAY": {
      return {
        ...state,
        item: [],
        lenght: null,
        amoun: 0,
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = actionsType<typeof actions>;

export const actions = {
  buy: (info: ReducerType, cost: number, size: number) => {
    debugger;

    return {
      type: "BUYITEM",
      info,
      cost,
      size,
    } as const;
  },

  deleteLenght: (lenght: number) => {
    return {
      type: "LENGHT",
      lenght,
    } as const;
  },

  amountLeghtminus: (newam: number) => {
    return {
      type: "AMOUNTSMINUS",
      newam,
    } as const;
  },

  amountLeghtplus: () => {
    return {
      type: "AMOUNTSPLUS",
    } as const;
  },
  daletArray: () => {
    return {
      type: "DELETEARRAY",
    } as const;
  },
};

export default buyItem;
