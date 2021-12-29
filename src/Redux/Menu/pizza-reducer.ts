import { actionsType } from "../redux-store";
import { ReducerType } from "../../Types/Type";

import photoId1 from "../../Assets/Pizza/197886.webp";
import photoId2 from "../../Assets/Pizza/197919.webp";
import photoId3 from "../../Assets/Pizza/197921.webp";
import photoId4 from "../../Assets/Pizza/206549.webp";
import photoId5 from "../../Assets/Pizza/206555.webp";
import photoId6 from "../../Assets/Pizza/206897.webp";
import photoId7 from "../../Assets/Pizza/206903.webp";
import photoId8 from "../../Assets/Pizza/206907.webp";
import photoId9 from "../../Assets/Pizza/206910.webp";
import photoId10 from "../../Assets/Pizza/207081.webp";
import photoId11 from "../../Assets/Pizza/209713.webp";
import photoId12 from "../../Assets/Pizza/210079.webp";
import photoId13 from "../../Assets/Pizza/210082.webp";
import photoId14 from "../../Assets/Pizza/210096.webp";
import photoId15 from "../../Assets/Pizza/210110.webp";
import photoId16 from "../../Assets/Pizza/210111.webp";
import photoId17 from "../../Assets/Pizza/210312.webp";
import photoId18 from "../../Assets/Pizza/216246.webp";
import photoId19 from "../../Assets/Pizza/224777.webp";
import photoId20 from "../../Assets/Pizza/img_217696.webp";

let initialState = {
  pizza: [
    {
      id: 1,
      photoURL: photoId1,
      name: "Печиво Тіволі Грушеве",
      cost: 150,
      structure:
        "Молочним шоколадом і шматочками груші в круглій бляшаній коробці",
      amount: 1,
    },
    {
      id: 2,
      photoURL: photoId2,
      name: "Шоколад NUT SELECTION",
      cost: 62,
      structure: "Молочний шоколад (77%) з мигдалем (23%). ",
      amount: 1,
    },
    {
      id: 3,
      photoURL: photoId3,
      name: "Шоколад з марципан",
      cost: 64,
      structure:
        "Чорний шоколад з марципаном - чорний шоколад з вишуканим 100% -м марципаном",
      amount: 1,
    },
    {
      id: 4,
      photoURL: photoId4,
      name: "Хрусткі фігурки 'Kresko'",
      cost: 55,
      structure: "Хрусткі фігурки з банановим смаком.",
      amount: 1,
    },
    {
      id: 5,
      photoURL: photoId5,
      name: "Цукерки Трюфель",
      cost: 45,
      structure: "Ніжна трюфельна начинка в тонкому корпусі з шоколаду.",
      amount: 1,
    },
    {
      id: 6,
      photoURL: photoId6,
      name: "Печиво-сендвіч Multicake",
      cost: 28,
      structure:
        "Ніжне цукрове печиво-сендвіч з кремовою начинкою та краплею полуничного джему в центрі.",
      amount: 1,
    },
    {
      id: 7,
      photoURL: photoId7,
      name: "Цукерка Korivka Roshen",
      cost: 53,
      structure:
        "Цукерки Korivka Roshen, корпус - молочна помадка із цукровою скоринкою.",
      amount: 1,
    },
    {
      id: 8,
      photoURL: photoId8,
      name: "Шоколад з мигдалем",
      cost: 45,
      structure:
        "Ніжний молочний шоколад Roshen із цілими смаженими ядрами мигдалю.",
      amount: 1,
    },
    {
      id: 9,
      photoURL: photoId9,
      name: "Шоколад Оленка",
      cost: 20,
      structure: "Молочний шоколад Оленка від Roshen, 90 грам.",
      amount: 1,
    },
    {
      id: 10,
      photoURL: photoId10,
      name: "Цукерка Червоний мак 1 Кг",
      cost: 200,
      structure:
        "Цукерки глазуровані шоколадною глазур'ю, корпус - праліне з додаванням льодяникової крихти.",
      amount: 1,
    },
    {
      id: 11,
      photoURL: photoId11,
      name: "Цукрове печиво До кави",
      cost: 14,
      structure: "Цукрове печиво До кави масло-ваніль",
      amount: 1,
    },
    {
      id: 12,
      photoURL: photoId12,
      name: "Вафельні рулети Waffeletten",
      cost: 88,
      structure:
        "Вафельні рулети Waffeletten з молочн шоколадом 100г ТМ Bahlsen",
      amount: 1,
    },
    {
      id: 13,
      photoURL: photoId13,
      name: "Печиво ZOO Country",
      cost: 68,
      structure: "Печиво ZOO Country 100 г ТМ Bahlsen",
      amount: 1,
    },
    {
      id: 14,
      photoURL: photoId14,
      name: "Цукерки Халлорен",
      cost: 189,
      structure: "Шоколадні цукерки Халлорен Десертна мрія 130 г",
      amount: 1,
    },
    {
      id: 15,
      photoURL: photoId15,
      name: "Шоклолад з какао-муссом",
      cost: 58,
      structure: "Молочний шоколад з начинкою какао-мусс 100г ",
      amount: 1,
    },
    {
      id: 16,
      photoURL: photoId16,
      name: "Шоклолад з кокосом",
      cost: 58,
      structure: "Молочний шоколад з начинкою кокос-молочний крем 100г ",
      amount: 1,
    },
    {
      id: 17,
      photoURL: photoId17,
      name: "Цукерки 'Мелодика' 1 КГ",
      cost: 105,
      structure:
        "Глазуровані помадні цукерки з ніжною желейною начинкою з персиковим соком.",
      amount: 1,
    },
    {
      id: 18,
      photoURL: photoId18,
      name: "Вафлі ROSHEN WAFERS",
      cost: 30,
      structure:
        "Вафлі Roshen Wafers Шоколад — неглазуровані вафлі із шоколадною начинкою.",
      amount: 1,
    },
    {
      id: 19,
      photoURL: photoId19,
      name: "Печиво До кави",
      cost: 21,
      structure:
        "Класичне печиво - не надто солодке,воно давно завоювало любов любителів кави",
      amount: 1,
    },
    {
      id: 20,
      photoURL: photoId20,
      name: "Бісквіт Кіндер Деліс 1 Шт.",
      cost: 21,
      structure:
        "Бісквітне тістечко, покрите какао-глазур'ю (24%), з молочною начинкою (15%).",
      amount: 1,
    },
  ] as Array<ReducerType>,
  siza: 28 as number,
  ves: 370 as number,
};

export type initialStateType = typeof initialState;

const pizzaReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SETPIZZA": {
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
  setpizzAC: (pizza: Array<initialStateType>) => {
    return {
      type: "SETPIZZA",
      pizza: pizza,
    } as const;
  },
};
export default pizzaReducer;
