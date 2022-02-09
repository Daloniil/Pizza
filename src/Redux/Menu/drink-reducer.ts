import {actionsType} from "../redux-store";
import {ReducerType} from "../../Types/Type";
import photoId14 from "../../Assets/Drink/Сік-яблучно-гранатовий-300x300.webp"
import photoId15 from "../../Assets/Drink/pepsi_bottle_600_square.webp"
import photoId16 from "../../Assets/Drink/Сік-мультивітамін-300x300.webp"
import photoId17 from "../../Assets/Drink/Сік-яблучно-виноградний-300x300.webp"
import photoId18 from "../../Assets/Drink/Сік-мультивітамін-300x300.webp"
import photoId19 from "../../Assets/Drink/cocacola_bottle_600_square.webp"


let initialState = {
    drink: [
        {
            id: 14,
            photoURL: photoId14,
            name: "Сік яблучно-гранатовий 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 15,
            photoURL: photoId15,
            name: "Pepsi 1 л",
            cost: 25,
            structure: "",
            amount: 1

        },
        {
            id: 16,
            photoURL: photoId16,
            name: "Сік мульти-вітамінний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 17,
            photoURL: photoId17,
            name: "Сік яблучно-виноградний 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 18,
            photoURL: photoId18,
            name: "Сік мульти-фруктовий 1л",
            cost: 28,
            structure: "",
            amount: 1

        },
        {
            id: 19,
            photoURL: photoId19,
            name: "Coca Cola",
            cost: 25,
            structure: "",
            amount: 1

        },


    ] as Array<ReducerType>,


};

export type initialStateType = typeof initialState

const drinkReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SETDRINK": {
            return <initialStateType>{
                ...state,
                drink: [...state.drink, ...action.drink]
            }
        }

        default:
            return state;
    }
}

type ActionsTypes = actionsType<typeof actions>


export const actions = {
    setdrinkAC: (drink: Array<initialStateType>) => {
        return {
            type: "SETDRINK",
            drink,
        } as const
    }
}


export default drinkReducer;